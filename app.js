// ============================================================
// 中国旅游人格测试 - 核心应用逻辑 v2.0
// ============================================================

// ========== 全局状态 ==========
const STATE = {
  currentQuestion: 0,
  answers: {},
  userProfile: null,
  personalityType: null,
  rankedProvinces: [],
  allProvincesScored: [],
  currentView: 'welcome',
  regionFilter: 'all'
};

// ========== DOM 工具 ==========
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

const screens = {
  welcome: $('#welcomeScreen'),
  quiz: $('#quizScreen'),
  result: $('#resultScreen'),
  allProvinces: $('#allProvincesScreen')
};

// ========== 维度名称映射 ==========
const DIM_NAMES = {
  nature: '自然风光', adventure: '冒险刺激', food: '美食追求',
  crowd: '热门热闹', urban: '都市繁华', culture: '文化沉浸'
};
const DIM_EMOJIS = {
  nature: '🌿', adventure: '🧗', food: '🍜',
  crowd: '🔥', urban: '🌃', culture: '🏛️'
};
const DIM_KEYS = Object.keys(DIM_NAMES);

// ========== 视图切换 ==========
function showScreen(name) {
  Object.keys(screens).forEach(k => {
    if (screens[k]) screens[k].classList.add('hidden');
  });
  if (screens[name]) {
    screens[name].classList.remove('hidden');
    screens[name].classList.remove('fade-in');
    void screens[name].offsetWidth;
    screens[name].classList.add('fade-in');
  }
  STATE.currentView = name;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ========== 开始测试 ==========
function startQuiz() {
  STATE.currentQuestion = 0;
  STATE.answers = {};
  STATE.userProfile = null;
  STATE.personalityType = null;
  STATE.rankedProvinces = [];
  STATE.allProvincesScored = [];
  showScreen('quiz');
  renderQuestion();
  $('#progressFill').style.width = '0%';
}

// ========== 渲染问题 ==========
function renderQuestion() {
  const q = QUIZ_QUESTIONS[STATE.currentQuestion];
  const total = QUIZ_QUESTIONS.length;
  const progress = (STATE.currentQuestion / total) * 100;
  $('#progressFill').style.width = progress + '%';
  $('#questionCounter').textContent = `第 ${STATE.currentQuestion + 1} / ${total} 题`;

  const emojis = ['🌍','⛰️','👥','📅','⏱️','👨‍👩‍👧‍👦','💡','💳','🎪','🎁'];
  $('#questionTitle').innerHTML = `
    <span style="font-size:1.5rem;">${emojis[STATE.currentQuestion] || '📍'}</span>
    ${q.question}
  `;

  const optionsList = $('#optionsList');
  optionsList.innerHTML = '';
  const selectedIdx = STATE.answers[q.id];

  q.options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    if (selectedIdx === idx) btn.classList.add('selected');
    btn.innerHTML = `
      <span class="option-index">${String.fromCharCode(65 + idx)}</span>
      <span>${opt.text}</span>
      <span class="option-check" style="margin-left:auto;font-size:1.2rem;opacity:0;">✅</span>
    `;
    btn.addEventListener('click', () => {
      STATE.answers[q.id] = idx;
      optionsList.querySelectorAll('.option-btn').forEach(b => {
        b.classList.remove('selected');
        b.querySelector('.option-check').style.opacity = '0';
      });
      btn.classList.add('selected');
      btn.querySelector('.option-check').style.opacity = '1';
      setTimeout(() => nextQuestion(), 400);
    });
    optionsList.appendChild(btn);
  });

  $('#prevBtn').classList.toggle('hidden', STATE.currentQuestion === 0);
  const isLast = STATE.currentQuestion === QUIZ_QUESTIONS.length - 1;
  $('#nextBtn').textContent = isLast ? '🎯 查看结果' : '下一题 →';

  // 如果已选过，显示勾
  if (selectedIdx !== undefined) {
    const check = optionsList.querySelectorAll('.option-check')[selectedIdx];
    if (check) check.style.opacity = '1';
  }
}

// ========== 上一题 ==========
function prevQuestion() {
  if (STATE.currentQuestion > 0) {
    STATE.currentQuestion--;
    renderQuestion();
  }
}

// ========== 下一题 ==========
function nextQuestion() {
  const q = QUIZ_QUESTIONS[STATE.currentQuestion];
  if (STATE.answers[q.id] === undefined) {
    STATE.answers[q.id] = 0; // 默认选第一个
  }
  if (STATE.currentQuestion < QUIZ_QUESTIONS.length - 1) {
    STATE.currentQuestion++;
    renderQuestion();
  } else {
    calculateResults();
    showScreen('result');
    renderResults();
    $('#progressFill').style.width = '100%';
  }
}

// ========== 计算匹配结果 ==========
function calculateResults() {
  // 1. 汇总用户画像原始分
  const rawProfile = {};
  DIM_KEYS.forEach(k => { rawProfile[k] = 0; });

  QUIZ_QUESTIONS.forEach(q => {
    const answerIdx = STATE.answers[q.id];
    if (answerIdx !== undefined) {
      const scores = q.options[answerIdx].scores;
      Object.keys(scores).forEach(key => {
        rawProfile[key] = (rawProfile[key] || 0) + scores[key];
      });
    }
  });

  // 2. 归一化到 1-5 范围
  const vals = DIM_KEYS.map(k => rawProfile[k]);
  const minV = Math.min(...vals);
  const maxV = Math.max(...vals);
  const range = maxV - minV || 1;

  const normalized = {};
  DIM_KEYS.forEach(k => {
    normalized[k] = Math.round((1 + ((rawProfile[k] - minV) / range) * 4) * 10) / 10;
  });
  STATE.userProfile = normalized;

  // 3. 判定人格类型
  STATE.personalityType = classifyPersonality(normalized);

  // 4. 余弦相似度匹配省份
  const userVector = DIM_KEYS.map(k => normalized[k]);
  const userNorm = Math.sqrt(userVector.reduce((s, v) => s + v * v, 0)) || 1;

  const scored = PROVINCE_DATA.map(province => {
    const mp = province.matchProfile;
    const provVector = DIM_KEYS.map(k => mp[k] || 3);
    const provNorm = Math.sqrt(provVector.reduce((s, v) => s + v * v, 0)) || 1;

    let dotProduct = 0;
    DIM_KEYS.forEach((k, i) => {
      dotProduct += userVector[i] * provVector[i];
    });

    const similarity = dotProduct / (userNorm * provNorm);
    return {
      ...province,
      score: similarity,
      matchPercent: Math.round(similarity * 100)
    };
  });

  scored.sort((a, b) => b.score - a.score);
  STATE.allProvincesScored = scored;
  STATE.rankedProvinces = scored.slice(0, RECOMMEND_COUNT);
}

// ========== 人格分类 ==========
function classifyPersonality(profile) {
  let bestType = PERSONALITY_TYPES[0];
  let bestScore = -Infinity;

  PERSONALITY_TYPES.forEach(pt => {
    const dimKey = pt.dominant;
    const score = profile[dimKey] || 0;
    if (score > bestScore) {
      bestScore = score;
      bestType = pt;
    }
  });

  return bestType;
}

// ========== 渲染结果 ==========
function renderResults() {
  const rankList = $('#rankList');
  rankList.innerHTML = '';

  // 人格类型卡片
  const pt = STATE.personalityType;
  const personalityCard = document.createElement('div');
  personalityCard.className = 'personality-card';
  personalityCard.innerHTML = `
    <div class="personality-header">
      <span class="personality-emoji">${pt.name.split(' ')[0]}</span>
      <div>
        <h3>${pt.name}</h3>
        <p>${pt.desc}</p>
      </div>
    </div>
    <div class="dimension-bars" id="dimensionBars"></div>
  `;
  rankList.appendChild(personalityCard);

  // 维度可视化条
  setTimeout(() => renderDimensionBars(), 100);

  // 分隔标题
  const sepEl = document.createElement('div');
  sepEl.className = 'section-title';
  sepEl.innerHTML = '<span>🏆 你的匹配目的地 Top 5</span>';
  rankList.appendChild(sepEl);

  // 省份排名
  const medals = ['🥇','🥈','🥉','4️⃣','5️⃣'];
  const rankClasses = ['rank-1','rank-2','rank-3','rank-other','rank-other'];

  STATE.rankedProvinces.forEach((prov, idx) => {
    const item = document.createElement('div');
    item.className = 'rank-item';
    item.setAttribute('data-province-id', prov.id);
    item.innerHTML = `
      <div class="rank-badge ${rankClasses[idx]}">${medals[idx]}</div>
      <div class="rank-info">
        <div class="province-name">${prov.name} <span style="font-size:.8rem;color:var(--text-light);">${prov.region}</span></div>
        <div class="province-vibe">${prov.vibe}</div>
      </div>
      <div class="rank-score">${prov.matchPercent}%<span style="font-size:.7rem;">匹配</span></div>
      <div class="rank-arrow">▼</div>
    `;
    item.addEventListener('click', () => toggleProvinceDetail(prov.id, item, true));
    rankList.appendChild(item);

    const detail = document.createElement('div');
    detail.className = 'spot-detail';
    detail.id = `detail-${prov.id}`;
    detail.innerHTML = buildSpotDetailHTML(prov);
    rankList.appendChild(detail);
  });

  // 操作区域
  const actionBar = document.createElement('div');
  actionBar.className = 'action-bar';
  actionBar.innerHTML = `
    <button class="btn btn-primary" onclick="restartQuiz()" style="flex:1;">🔄 重新测试</button>
    <button class="btn btn-outline" onclick="shareResult()" style="flex:1">📤 分享结果</button>
    <button class="btn btn-outline" onclick="showAllProvinces()" style="width:100%;margin-top:8px;">📋 查看全部34省景点</button>
  `;
  rankList.appendChild(actionBar);
}

// ========== 维度可视化条 ==========
function renderDimensionBars() {
  const container = $('#dimensionBars');
  if (!container) return;
  container.innerHTML = '';

  const profile = STATE.userProfile;
  DIM_KEYS.forEach(k => {
    const val = profile[k];
    const pct = Math.max(5, (val / 5) * 100);
    const bar = document.createElement('div');
    bar.className = 'dim-bar-wrap';
    bar.innerHTML = `
      <span class="dim-label">${DIM_EMOJIS[k]} ${DIM_NAMES[k]}</span>
      <div class="dim-bar-track">
        <div class="dim-bar-fill" style="width:0%;background:${getDimColor(k)};" data-width="${pct}%"></div>
      </div>
      <span class="dim-val">${val}</span>
    `;
    container.appendChild(bar);
  });

  // 动画填充
  setTimeout(() => {
    container.querySelectorAll('.dim-bar-fill').forEach(bar => {
      bar.style.width = bar.getAttribute('data-width');
    });
  }, 200);
}

function getDimColor(key) {
  const colors = {
    nature: '#4caf50', adventure: '#ff9800', food: '#e8453c',
    crowd: '#9c27b0', urban: '#2196f3', culture: '#795548'
  };
  return colors[key] || '#888';
}

// ========== 构建景点详情 HTML ==========
function buildSpotDetailHTML(prov) {
  const spotCards = prov.spots.map(s => `
    <div class="spot-card">
      <div class="spot-icon">${s.icon}</div>
      <div class="spot-info">
        <h4>${s.name}</h4>
        <p>${s.desc}</p>
        ${s.address ? `
        <div class="spot-nav">
          <a href="https://uri.amap.com/navigation?to=${encodeURIComponent(s.address)},${encodeURIComponent(s.name)}" target="_blank" rel="noopener" class="nav-link">
            <span class="nav-icon">📍</span>
            <span class="nav-text">${s.address}</span>
            <span class="nav-arrow">导航 →</span>
          </a>
        </div>` : ''}
      </div>
    </div>
  `).join('');

  const tags = prov.tags.map(t => `<span class="meta-tag">#${t}</span>`).join('');

  return `
    <p class="spot-desc">${prov.description}</p>
    ${spotCards}
    <div class="province-meta">
      <span class="meta-tag cuisine">🍜 ${prov.cuisine}</span>
      <span class="meta-tag best-season">📅 ${prov.bestSeason}</span>
      ${tags}
    </div>
  `;
}

// ========== 展开/折叠省份详情 ==========
function toggleProvinceDetail(provinceId, itemElement, isResult) {
  const prefix = isResult ? 'detail-' : 'detail-all-';
  const detail = document.getElementById(`${prefix}${provinceId}`);
  const isExpanded = itemElement.classList.contains('expanded');

  document.querySelectorAll('.rank-item.expanded').forEach(el => {
    el.classList.remove('expanded');
    const pid = el.getAttribute('data-province-id');
    ['detail-', 'detail-all-'].forEach(pf => {
      const d = document.getElementById(`${pf}${pid}`);
      if (d) d.style.display = 'none';
    });
  });

  if (!isExpanded && detail) {
    itemElement.classList.add('expanded');
    detail.style.display = 'block';
  }
}

// ========== 分享结果 ==========
function shareResult() {
  const pt = STATE.personalityType;
  const top3 = STATE.rankedProvinces.slice(0, 3);
  const text = [
    `🌍 我的旅行人格：${pt.name}`,
    `${pt.desc}`,
    ``,
    `🏆 推荐目的地：`,
    ...top3.map((p, i) => `  ${['🥇','🥈','🥉'][i]} ${p.name} - ${p.vibe}（${p.matchPercent}%匹配）`),
    ``,
    `快来做测试，发现你的专属旅行目的地！`
  ].join('\n');

  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => {
      showToast('✅ 已复制到剪贴板，快去分享吧！');
    }).catch(() => {
      showToast(text.replace(/\n/g, '\n'));
    });
  } else {
    showToast('📋 长按复制以上内容分享');
  }
}

// ========== Toast 提示 ==========
function showToast(msg) {
  let toast = $('#toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.style.cssText = `
      position:fixed; bottom:30px; left:50%; transform:translateX(-50%);
      background:#333; color:#fff; padding:12px 28px; border-radius:50px;
      font-size:.9rem; z-index:9999; opacity:0; transition:opacity .4s;
      pointer-events:none; max-width:90vw; text-align:center; white-space:pre-line;
    `;
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.style.opacity = '1';
  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => { toast.style.opacity = '0'; }, 3000);
}

// ========== 显示全部省份（带区域筛选） ==========
function showAllProvinces() {
  showScreen('allProvinces');
  STATE.regionFilter = 'all';
  renderAllProvinces();
}

function renderAllProvinces() {
  const list = $('#allProvinceList');
  list.innerHTML = '';

  // 区域筛选按钮
  const regions = ['全部','华北','东北','华东','华中','华南','西南','西北'];
  const filterBar = document.createElement('div');
  filterBar.className = 'region-filter';
  filterBar.innerHTML = regions.map(r => {
    const val = r === '全部' ? 'all' : r;
    const active = STATE.regionFilter === val ? 'active' : '';
    return `<button class="region-btn ${active}" onclick="filterByRegion('${val}')">${r}</button>`;
  }).join('');
  list.appendChild(filterBar);

  // 省份列表
  let provinces = STATE.allProvincesScored;
  if (STATE.regionFilter !== 'all') {
    provinces = provinces.filter(p => p.region === STATE.regionFilter);
  }

  provinces.forEach((prov, idx) => {
    const rank = STATE.allProvincesScored.findIndex(p => p.id === prov.id) + 1;
    const item = document.createElement('div');
    item.className = 'rank-item';
    item.setAttribute('data-province-id', prov.id);
    const badgeClass = rank <= 3 ? `rank-${rank}` : 'rank-other';
    const emoji = rank <= 3 ? ['🥇','🥈','🥉'][rank-1] : `${rank}`;
    item.innerHTML = `
      <div class="rank-badge ${badgeClass}" style="font-size:.85rem;">${emoji}</div>
      <div class="rank-info">
        <div class="province-name">${prov.name} <span style="font-size:.8rem;color:var(--text-light);">${prov.region}</span></div>
        <div class="province-vibe">${prov.vibe}</div>
      </div>
      <div class="rank-score">${prov.matchPercent}%</div>
      <div class="rank-arrow">▼</div>
    `;
    item.addEventListener('click', () => toggleProvinceDetail(prov.id, item, false));
    list.appendChild(item);

    const detail = document.createElement('div');
    detail.className = 'spot-detail';
    detail.id = `detail-all-${prov.id}`;
    detail.innerHTML = buildSpotDetailHTML(prov);
    list.appendChild(detail);
  });
}

function filterByRegion(region) {
  STATE.regionFilter = region;
  renderAllProvinces();
}

// ========== 返回结果页 ==========
function backToResult() {
  showScreen('result');
  renderResults();
}

// ========== 重新测试 ==========
function restartQuiz() {
  STATE.currentQuestion = 0;
  STATE.answers = {};
  STATE.userProfile = null;
  STATE.personalityType = null;
  STATE.rankedProvinces = [];
  STATE.allProvincesScored = [];
  $('#progressFill').style.width = '0%';
  startQuiz();
}

// ========== 键盘导航 ==========
document.addEventListener('keydown', (e) => {
  if (STATE.currentView !== 'quiz') return;

  const q = QUIZ_QUESTIONS[STATE.currentQuestion];
  const numMap = { '1': 0, '2': 1, '3': 2, '4': 3 };
  const letterMap = { 'a': 0, 'b': 1, 'c': 2, 'd': 3 };
  let optionIdx = numMap[e.key] !== undefined ? numMap[e.key] : letterMap[e.key.toLowerCase()];

  if (optionIdx !== undefined && optionIdx < q.options.length) {
    STATE.answers[q.id] = optionIdx;
    const btns = $$('#optionsList .option-btn');
    btns.forEach((b, i) => {
      b.classList.toggle('selected', i === optionIdx);
      const check = b.querySelector('.option-check');
      if (check) check.style.opacity = i === optionIdx ? '1' : '0';
    });
    setTimeout(() => nextQuestion(), 400);
    return;
  }

  if (e.key === 'Enter') { nextQuestion(); return; }
  if (e.key === 'Backspace' && STATE.currentQuestion > 0) { prevQuestion(); return; }
});

// ========== 初始化 ==========
console.log('🗺️ 中国旅游人格测试 v2.0 已就绪');
console.log(`   📊 ${PROVINCE_DATA.length} 个省份 · ${QUIZ_QUESTIONS.length} 道测试题 · ${PERSONALITY_TYPES.length} 种人格类型`);
console.log('   💡 测试中可按数字键 1-4 或字母 A-D 快速选择');

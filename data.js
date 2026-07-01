// ============================================================
// 中国34个省级行政区特色旅游景点完整数据
// 每个省份含：核心特色、代表景点(含emoji)、美食、最佳季节、匹配画像
// ============================================================
const PROVINCE_DATA = [
  // ==================== 华北地区 ====================
  {
    id: "beijing", name: "北京", fullName: "北京市", region: "华北",
    tags: ["人文历史","都市繁华","文化沉浸","热门打卡"],
    vibe: "皇城底蕴与现代都市交融",
    description: "六朝古都，故宫红墙黄瓦诉说千年故事，胡同深处藏着地道京味儿。",
    spots: [
      { name: "故宫博物院", desc: "世界最大木质宫殿群，明清皇家宫殿，红墙黄瓦间穿越六百年历史", icon: "🏯", address: "北京市东城区景山前街4号" },
      { name: "八达岭长城", desc: "万里长城精华段，登高望远感受'不到长城非好汉'的豪迈", icon: "🧱" },
      { name: "颐和园", desc: "现存最完整皇家园林，万寿山昆明湖，移步换景如画中游", icon: "🏞️" },
      { name: "南锣鼓巷", desc: "最古老胡同街区，四合院与小店交织，品豆汁儿逛老北京", icon: "🏘️" }
    ],
    cuisine: "北京烤鸭、炸酱面、豆汁儿焦圈、涮羊肉",
    bestSeason: "春秋（4-5月、9-10月）",
    matchProfile: { nature: 2, adventure: 2, food: 4, crowd: 5, urban: 5, culture: 5 }
  },
  {
    id: "tianjin", name: "天津", fullName: "天津市", region: "华北",
    tags: ["都市繁华","美食追求","人文历史","休闲放松"],
    vibe: "中西合璧的幽默之城",
    description: "九河下梢天津卫，洋楼林立的五大道，笑声不断的相声茶馆。",
    spots: [
      { name: "五大道", desc: "万国建筑博览苑，2000多栋欧式洋楼，骑行穿梭百年风云", icon: "🏛️", address: "天津市和平区重庆道83号" },
      { name: "天津之眼", desc: "海河上的巨型摩天轮，俯瞰津城夜景，浪漫至极", icon: "🎡" },
      { name: "古文化街", desc: "津门故里，泥人张杨柳青年画，听相声品津味小吃", icon: "🎭" }
    ],
    cuisine: "狗不理包子、煎饼果子、耳朵眼炸糕、十八街麻花",
    bestSeason: "春秋",
    matchProfile: { nature: 2, adventure: 2, food: 5, crowd: 4, urban: 4, culture: 4 }
  },
  {
    id: "hebei", name: "河北", fullName: "河北省", region: "华北",
    tags: ["人文历史","自然风光","休闲放松"],
    vibe: "京畿福地，山海画卷",
    description: "环绕京津的宝藏省份，承德避暑山庄的皇家气度，秦皇岛的海滨浪漫。",
    spots: [
      { name: "承德避暑山庄", desc: "世界最大皇家园林，清代帝王夏宫，融南北园林精华于一园", icon: "🏯", address: "承德市双桥区丽正门大街22号" },
      { name: "北戴河/阿那亚", desc: "中国四大避暑胜地，碧海金沙，观日出赶海拾贝", icon: "🏖️" },
      { name: "山海关", desc: "天下第一关，明长城东起点，雄关漫道真如铁", icon: "🏰" }
    ],
    cuisine: "驴肉火烧、承德荞面、秦皇岛海鲜",
    bestSeason: "夏秋（6-10月）",
    matchProfile: { nature: 3, adventure: 2, food: 3, crowd: 3, urban: 2, culture: 4 }
  },
  {
    id: "shanxi", name: "山西", fullName: "山西省", region: "华北",
    tags: ["人文历史","文化沉浸","小众探索","美食追求"],
    vibe: "地上文物看山西",
    description: "五千年文明看山西，云冈石窟的佛国世界，平遥古城的明清时光。",
    spots: [
      { name: "平遥古城", desc: "保存最完整的明清古城，漫步城墙俯瞰2800年晋商传奇", icon: "🏘️", address: "晋中市平遥县康宁路" },
      { name: "云冈石窟", desc: "世界文化遗产，45个洞窟51000余尊造像，北魏佛国艺术巅峰", icon: "🗿" },
      { name: "五台山", desc: "中国四大佛教名山之首，清凉圣境，文殊菩萨道场", icon: "⛰️" },
      { name: "壶口瀑布", desc: "世界最大黄色瀑布，黄河之水天上来，奔流到海不复回", icon: "🌊" }
    ],
    cuisine: "刀削面、平遥牛肉、太谷饼、山西老陈醋",
    bestSeason: "春秋（4-5月、9-10月）",
    matchProfile: { nature: 3, adventure: 2, food: 4, crowd: 2, urban: 1, culture: 5 }
  },
  {
    id: "neimenggu", name: "内蒙古", fullName: "内蒙古自治区", region: "华北",
    tags: ["自然风光","冒险刺激","田园静谧","小众探索"],
    vibe: "风吹草低见牛羊",
    description: "一望无际的呼伦贝尔大草原，策马奔腾的自由，星空篝火的浪漫。",
    spots: [
      { name: "呼伦贝尔大草原", desc: "世界著名天然牧场，骑马驰骋在绿色海洋，住蒙古包看银河", icon: "🐴", address: "呼伦贝尔市陈巴尔虎旗草原景区" },
      { name: "额济纳胡杨林", desc: "三千年不死不倒不朽的胡杨，金秋十月美到窒息", icon: "🍂" },
      { name: "响沙湾", desc: "会唱歌的沙漠，滑沙骑骆驼，感受大漠孤烟直", icon: "🐪" }
    ],
    cuisine: "烤全羊、手把肉、奶茶、奶皮子",
    bestSeason: "夏秋（6-10月）",
    matchProfile: { nature: 5, adventure: 5, food: 3, crowd: 2, urban: 1, culture: 2 }
  },

  // ==================== 东北地区 ====================
  {
    id: "liaoning", name: "辽宁", fullName: "辽宁省", region: "东北",
    tags: ["人文历史","都市繁华","自然风光","海滨"],
    vibe: "共和国工业长子的山海传奇",
    description: "沈阳故宫的满清风韵，大连的浪漫海滨，丹东的边境风情。",
    spots: [
      { name: "沈阳故宫", desc: "中国仅存两大皇家宫殿之一，满族入关前的皇宫", icon: "🏯", address: "沈阳市沈河区沈阳路171号" },
      { name: "大连金石滩", desc: "金色沙滩与奇特海蚀地貌，浪漫滨海度假胜地", icon: "🌊" },
      { name: "丹东鸭绿江断桥", desc: "抗美援朝历史见证，江对岸即是朝鲜，独特边境体验", icon: "🌉" }
    ],
    cuisine: "锅包肉、大连海鲜、沈阳鸡架、朝鲜冷面",
    bestSeason: "夏秋（6-10月）",
    matchProfile: { nature: 3, adventure: 3, food: 4, crowd: 3, urban: 3, culture: 3 }
  },
  {
    id: "jilin", name: "吉林", fullName: "吉林省", region: "东北",
    tags: ["自然风光","休闲放松","小众探索","田园静谧"],
    vibe: "冰雪童话与雾凇仙境",
    description: "长白山的天地大美，松花江畔的雾凇奇观，冬日滑雪的酣畅。",
    spots: [
      { name: "长白山天池", desc: "中国最深高山湖泊，火山口上的蓝色眼眸，神秘壮美", icon: "🏔️", address: "延边州安图县二道白河镇" },
      { name: "雾凇岛", desc: "中国四大自然奇观，冬季银装素裹如仙境，摄影师的天堂", icon: "❄️" },
      { name: "净月潭", desc: "亚洲最大人工林海，城市中的森林氧吧，四季皆美", icon: "🌲" }
    ],
    cuisine: "延边冷面、白肉血肠、朝鲜族烤肉、小鸡炖蘑菇",
    bestSeason: "冬夏（12-2月滑雪、7-8月避暑）",
    matchProfile: { nature: 5, adventure: 3, food: 3, crowd: 2, urban: 2, culture: 2 }
  },
  {
    id: "heilongjiang", name: "黑龙江", fullName: "黑龙江省", region: "东北",
    tags: ["自然风光","冒险刺激","休闲放松","都市繁华"],
    vibe: "冰雪王国与东方莫斯科",
    description: "哈尔滨的俄式浪漫，雪乡的童话世界，北极村的极光之约。",
    spots: [
      { name: "哈尔滨冰雪大世界", desc: "世界最大冰雪主题乐园，冰雕城堡流光溢彩，冬日梦幻王国", icon: "🧊" },
      { name: "雪乡", desc: "中国最美雪景，木屋上厚厚的雪蘑菇，宛如童话世界", icon: "🏠" },
      { name: "漠河北极村", desc: "中国最北端，有机会看到北极光，找北之旅终极目的地", icon: "🌌", address: "大兴安岭漠河市北极镇北极村" }
    ],
    cuisine: "锅包肉（发源地）、哈尔滨红肠、大列巴、杀猪菜",
    bestSeason: "冬季（12-2月）",
    matchProfile: { nature: 5, adventure: 4, food: 3, crowd: 3, urban: 3, culture: 3 }
  },

  // ==================== 华东地区 ====================
  {
    id: "shanghai", name: "上海", fullName: "上海市", region: "华东",
    tags: ["都市繁华","热门打卡","美食追求","娱乐消遣"],
    vibe: "东方巴黎的摩登与烟火",
    description: "外滩的万国建筑博览，陆家嘴的未来天际线，弄堂里的本帮味道。",
    spots: [
      { name: "外滩", desc: "黄浦江畔万国建筑博览群，夜晚灯火璀璨如东方香榭丽舍", icon: "🌃", address: "上海市黄浦区中山东一路" },
      { name: "上海迪士尼", desc: "中国大陆首座迪士尼乐园，奇幻童话城堡圆你童年梦", icon: "🏰" },
      { name: "豫园", desc: "江南古典园林明珠，九曲桥湖心亭，品南翔小笼赏园林", icon: "🏯" }
    ],
    cuisine: "南翔小笼包、生煎馒头、本帮红烧肉、蟹粉豆腐",
    bestSeason: "春秋（3-5月、9-11月）",
    matchProfile: { nature: 1, adventure: 2, food: 5, crowd: 5, urban: 5, culture: 4 }
  },
  {
    id: "jiangsu", name: "江苏", fullName: "江苏省", region: "华东",
    tags: ["人文历史","休闲放松","美食追求","田园静谧"],
    vibe: "江南园林与水乡诗画",
    description: "苏州园林的移步换景，南京的古都风韵，扬州的烟花三月。",
    spots: [
      { name: "苏州拙政园", desc: "中国四大名园之首，江南私家园林巅峰之作，一步一景", icon: "🏯", address: "苏州市姑苏区东北街178号" },
      { name: "南京中山陵", desc: "民主革命先行者孙中山陵寝，392级台阶步步登高", icon: "🏛️" },
      { name: "扬州瘦西湖", desc: "'烟花三月下扬州'，二十四桥明月夜，水上园林画卷", icon: "🌿" }
    ],
    cuisine: "盐水鸭、松鼠桂鱼、扬州炒饭、蟹黄汤包",
    bestSeason: "春季（3-5月）",
    matchProfile: { nature: 3, adventure: 2, food: 5, crowd: 3, urban: 3, culture: 5 }
  },
  {
    id: "zhejiang", name: "浙江", fullName: "浙江省", region: "华东",
    tags: ["自然风光","人文历史","海滨","休闲放松"],
    vibe: "诗意山水与江南秘境",
    description: "西湖的淡妆浓抹，千岛湖的碧水千岛，普陀山的海天佛国。",
    spots: [
      { name: "杭州西湖", desc: "'欲把西湖比西子'，断桥残雪苏堤春晓，十景处处入画", icon: "🏞️", address: "杭州市西湖区北山街" },
      { name: "千岛湖", desc: "1078个岛屿星罗棋布，碧水蓝天间泛舟仙境", icon: "🛶" },
      { name: "普陀山", desc: "观音菩萨道场，海天佛国，梵音袅袅洗涤心灵", icon: "⛩️" }
    ],
    cuisine: "西湖醋鱼、东坡肉、龙井虾仁、宁波汤圆",
    bestSeason: "春秋（3-5月、9-11月）",
    matchProfile: { nature: 4, adventure: 2, food: 4, crowd: 4, urban: 3, culture: 4 }
  },
  {
    id: "anhui", name: "安徽", fullName: "安徽省", region: "华东",
    tags: ["自然风光","文化沉浸","小众探索","田园静谧"],
    vibe: "天下奇山与水墨徽州",
    description: "黄山的云海日出，宏村的粉墙黛瓦，徽派建筑的诗意栖居。",
    spots: [
      { name: "黄山", desc: "'五岳归来不看山，黄山归来不看岳'，奇松怪石云海温泉四绝", icon: "⛰️", address: "黄山市黄山区汤口镇" },
      { name: "宏村", desc: "画里乡村，月沼南湖，徽派建筑的白墙黑瓦倒映水中", icon: "🏘️" },
      { name: "九华山", desc: "地藏菩萨道场，九十九座山峰如莲花绽放", icon: "⛩️" }
    ],
    cuisine: "臭鳜鱼、毛豆腐、黄山烧饼、徽州一品锅",
    bestSeason: "春秋（4-5月、9-10月）",
    matchProfile: { nature: 5, adventure: 3, food: 3, crowd: 2, urban: 1, culture: 4 }
  },
  {
    id: "fujian", name: "福建", fullName: "福建省", region: "华东",
    tags: ["自然风光","人文历史","海滨","小众探索"],
    vibe: "山海画廊与客家传奇",
    description: "武夷山的丹霞碧水，永定土楼的客家智慧，鼓浪屿的万国琴声。",
    spots: [
      { name: "武夷山", desc: "世界双遗产，九曲溪竹筏漂流，大红袍母树茶香千年", icon: "⛰️" },
      { name: "永定土楼", desc: "世界文化遗产，客家圆形土楼如天外飞碟，东方古城堡", icon: "🛖" },
      { name: "鼓浪屿", desc: "钢琴之岛，万国建筑博物馆，没有机动车的小岛慢生活", icon: "🏝️", address: "厦门市思明区鼓浪屿街道" }
    ],
    cuisine: "佛跳墙、沙茶面、海蛎煎、土笋冻",
    bestSeason: "春秋冬（避开夏季台风）",
    matchProfile: { nature: 4, adventure: 3, food: 5, crowd: 3, urban: 2, culture: 4 }
  },
  {
    id: "jiangxi", name: "江西", fullName: "江西省", region: "华东",
    tags: ["自然风光","文化沉浸","田园静谧","小众探索"],
    vibe: "道教仙山与最美乡村",
    description: "庐山的云雾、婺源的油菜花海、景德镇的千年窑火。",
    spots: [
      { name: "庐山", desc: "人文圣山，'不识庐山真面目'，瀑布云海避暑胜地", icon: "⛰️", address: "九江市庐山市牯岭镇" },
      { name: "婺源", desc: "中国最美乡村，春季油菜花海金黄，秋季晒秋色彩斑斓", icon: "🌼" },
      { name: "三清山", desc: "道教名山，花岗岩峰林与云海交相辉映", icon: "🏔️" }
    ],
    cuisine: "南昌拌粉、瓦罐汤、庐山石鸡、景德镇碱水粑",
    bestSeason: "春季（3-4月油菜花）、秋季（10-11月晒秋）",
    matchProfile: { nature: 5, adventure: 3, food: 3, crowd: 3, urban: 1, culture: 4 }
  },
  {
    id: "shandong", name: "山东", fullName: "山东省", region: "华东",
    tags: ["人文历史","自然风光","海滨","美食追求"],
    vibe: "孔孟故里与蓬莱仙境",
    description: "泰山之巅的日出，曲阜的儒家圣地，青岛的红瓦碧海。",
    spots: [
      { name: "泰山", desc: "五岳之首，'会当凌绝顶，一览众山小'，帝王封禅圣地", icon: "⛰️", address: "泰安市泰山区环山路" },
      { name: "曲阜三孔", desc: "孔庙孔府孔林，儒家文化发源地，两千年的文化圣地", icon: "🏛️" },
      { name: "青岛八大关", desc: "红瓦绿树碧海蓝天的万国建筑街区，浪漫海滨城市名片", icon: "🏖️" }
    ],
    cuisine: "鲁菜、煎饼卷大葱、青岛啤酒海鲜、德州扒鸡",
    bestSeason: "春秋（4-5月、9-10月）",
    matchProfile: { nature: 3, adventure: 2, food: 5, crowd: 4, urban: 3, culture: 5 }
  },
  {
    id: "taiwan", name: "台湾", fullName: "台湾省", region: "华东",
    tags: ["自然风光","都市繁华","美食追求","海滨"],
    vibe: "宝岛台湾的山海之歌",
    description: "阿里山的云海日出，日月潭的碧波荡漾，台北的都市脉动。",
    spots: [
      { name: "阿里山", desc: "五奇著称：日出、云海、晚霞、森林、铁路，美不胜收", icon: "🌄" },
      { name: "日月潭", desc: "台湾最大天然湖泊，湖中有岛，山水相映如画", icon: "🏞️", address: "南投县鱼池乡水社村" },
      { name: "台北101", desc: "曾是世界第一高楼，观景台俯瞰台北全景", icon: "🏙️" }
    ],
    cuisine: "蚵仔煎、牛肉面、珍珠奶茶、凤梨酥",
    bestSeason: "春秋（3-5月、10-11月）",
    matchProfile: { nature: 4, adventure: 3, food: 5, crowd: 3, urban: 4, culture: 3 }
  },

  // ==================== 华中地区 ====================
  {
    id: "henan", name: "河南", fullName: "河南省", region: "华中",
    tags: ["人文历史","文化沉浸","美食追求","小众探索"],
    vibe: "华夏之源，老家河南",
    description: "洛阳龙门石窟的佛光、嵩山少林寺的功夫、开封的北宋风华。",
    spots: [
      { name: "龙门石窟", desc: "世界文化遗产，十万余尊造像，卢舍那大佛慈悲微笑千年", icon: "🗿", address: "洛阳市洛龙区龙门镇" },
      { name: "少林寺", desc: "天下第一名刹，禅宗祖庭，少林功夫发源地", icon: "🥋" },
      { name: "洛阳牡丹", desc: "'唯有牡丹真国色，花开时节动京城'，四月花海", icon: "🌸" }
    ],
    cuisine: "胡辣汤、洛阳水席、烩面、开封灌汤包",
    bestSeason: "春季（4月牡丹花会）、秋季（9-10月）",
    matchProfile: { nature: 2, adventure: 2, food: 5, crowd: 3, urban: 2, culture: 5 }
  },
  {
    id: "hubei", name: "湖北", fullName: "湖北省", region: "华中",
    tags: ["自然风光","人文历史","冒险刺激","文化沉浸"],
    vibe: "千湖之省与荆楚神韵",
    description: "三峡大坝的举世无双、武当山的仙风道骨、神农架的原始秘境。",
    spots: [
      { name: "神农架", desc: "北纬31°的绿色奇迹，野人之谜，原始森林与高山草甸", icon: "🌲", address: "神农架林区木鱼镇" },
      { name: "三峡大坝", desc: "世界最大水利枢纽，高峡出平湖，大国重器", icon: "🏗️" },
      { name: "武当山", desc: "道教圣地，太极祖庭，'亘古无双胜境，天下第一仙山'", icon: "⛩️" }
    ],
    cuisine: "热干面、武昌鱼、小龙虾、排骨藕汤",
    bestSeason: "春秋（4-5月、9-10月）",
    matchProfile: { nature: 5, adventure: 4, food: 4, crowd: 3, urban: 2, culture: 4 }
  },
  {
    id: "hunan", name: "湖南", fullName: "湖南省", region: "华中",
    tags: ["自然风光","冒险刺激","美食追求","文化沉浸"],
    vibe: "奇峰仙境与火辣湘情",
    description: "张家界的悬浮山、凤凰古城的沱江夜色、长沙的火辣夜生活。",
    spots: [
      { name: "张家界武陵源", desc: "三千奇峰拔地而起，《阿凡达》悬浮山原型，人间仙境", icon: "🏔️", address: "张家界市武陵源区索溪峪镇" },
      { name: "凤凰古城", desc: "沈从文笔下的边城，沱江吊脚楼，苗家风情夜色", icon: "🏘️" },
      { name: "衡山", desc: "五岳之南岳，独秀于南方的寿岳福地", icon: "⛰️" }
    ],
    cuisine: "长沙臭豆腐、剁椒鱼头、口味虾、湘西腊肉",
    bestSeason: "春秋（4-5月、9-10月）",
    matchProfile: { nature: 5, adventure: 4, food: 5, crowd: 4, urban: 2, culture: 3 }
  },

  // ==================== 华南地区 ====================
  {
    id: "guangdong", name: "广东", fullName: "广东省", region: "华南",
    tags: ["都市繁华","美食追求","海滨","娱乐消遣"],
    vibe: "岭南风情与国际都会",
    description: "广州的千年商都、深圳的科技速度、潮汕的美食天堂。",
    spots: [
      { name: "广州长隆", desc: "中国最大主题乐园集群，野生动物世界+水上乐园+欢乐世界", icon: "🎢", address: "广州市番禺区香江大道593号" },
      { name: "丹霞山", desc: "世界丹霞地貌命名地，红色砂岩奇观，色如渥丹灿若明霞", icon: "🏔️" },
      { name: "深圳世界之窗", desc: "一天环游世界，各国地标微缩景观齐聚一堂", icon: "🗼" }
    ],
    cuisine: "广式早茶、烧鹅、潮汕牛肉火锅、煲仔饭",
    bestSeason: "秋冬（10-3月，避开夏季台风）",
    matchProfile: { nature: 3, adventure: 3, food: 5, crowd: 5, urban: 5, culture: 3 }
  },
  {
    id: "guangxi", name: "广西", fullName: "广西壮族自治区", region: "华南",
    tags: ["自然风光","冒险刺激","休闲放松","小众探索"],
    vibe: "山水甲天下的喀斯特仙境",
    description: "桂林漓江的百里画廊、阳朔的田园诗画、德天跨国瀑布的磅礴。",
    spots: [
      { name: "桂林漓江", desc: "'桂林山水甲天下'，百里漓江百里画，竹筏泛舟如入仙境", icon: "🏞️", address: "桂林市阳朔县观莲路" },
      { name: "阳朔西街", desc: "中西合璧的洋人街，租辆单车骑行十里画廊，田园慢生活", icon: "🚲" },
      { name: "德天跨国瀑布", desc: "亚洲第一跨国瀑布，横跨中越两国，磅礴壮丽", icon: "💦" }
    ],
    cuisine: "桂林米粉、啤酒鱼、螺蛳粉、荔浦芋扣肉",
    bestSeason: "春秋（4-5月、9-10月）",
    matchProfile: { nature: 5, adventure: 4, food: 4, crowd: 3, urban: 1, culture: 3 }
  },
  {
    id: "hainan", name: "海南", fullName: "海南省", region: "华南",
    tags: ["海滨","休闲放松","冒险刺激","田园静谧"],
    vibe: "热带海岛的椰风海韵",
    description: "三亚的碧海白沙、万宁的冲浪天堂、五指山的热带雨林。",
    spots: [
      { name: "三亚亚龙湾", desc: "天下第一湾，七千米银白沙滩，潜水冲浪的天堂", icon: "🏖️", address: "三亚市吉阳区龙溪路" },
      { name: "蜈支洲岛", desc: "中国马尔代夫，玻璃海潜水圣地，珊瑚礁五彩斑斓", icon: "🐠" },
      { name: "万宁冲浪海岸", desc: "中国冲浪胜地，日月湾浪花翻涌，年轻人的活力天堂", icon: "🏄" }
    ],
    cuisine: "文昌鸡、和乐蟹、清补凉、椰子饭",
    bestSeason: "冬季（11-3月）",
    matchProfile: { nature: 4, adventure: 4, food: 4, crowd: 4, urban: 2, culture: 1 }
  },
  {
    id: "xianggang", name: "香港", fullName: "香港特别行政区", region: "华南",
    tags: ["都市繁华","美食追求","热门打卡","娱乐消遣"],
    vibe: "东方之珠的国际都会",
    description: "维港的天际线、太平山顶的日落、旺角的港式烟火气。",
    spots: [
      { name: "维多利亚港", desc: "世界三大夜景之一，灯光秀流光溢彩，东方之珠名片", icon: "🌃", address: "香港油尖旺区尖沙咀海滨花园" },
      { name: "香港迪士尼", desc: "全球最小但最精致的迪士尼，童话城堡圆梦之旅", icon: "🏰" },
      { name: "太平山顶", desc: "俯瞰维港全景最佳位置，夜幕下万家灯火璀璨", icon: "🚡" }
    ],
    cuisine: "港式茶餐厅、烧鹅、菠萝包、丝袜奶茶",
    bestSeason: "秋冬（10-3月）",
    matchProfile: { nature: 2, adventure: 2, food: 5, crowd: 5, urban: 5, culture: 3 }
  },
  {
    id: "aomen", name: "澳门", fullName: "澳门特别行政区", region: "华南",
    tags: ["都市繁华","美食追求","人文历史","娱乐消遣"],
    vibe: "葡式风情与东方赌城",
    description: "大三巴的历史沧桑、氹仔的葡国风情、金光大道的璀璨。",
    spots: [
      { name: "大三巴牌坊", desc: "澳门标志，圣保禄教堂前壁遗址，中西文化融合的象征", icon: "⛪", address: "澳门花王堂区炮台山下" },
      { name: "澳门塔", desc: "338米高空观景台，勇敢者可挑战全球最高蹦极", icon: "🗼" },
      { name: "氹仔官也街", desc: "葡式建筑与手信美食一条街，品尝正宗葡挞", icon: "🏘️" }
    ],
    cuisine: "葡式蛋挞、猪扒包、水蟹粥、马介休",
    bestSeason: "秋冬（10-3月）",
    matchProfile: { nature: 1, adventure: 3, food: 5, crowd: 4, urban: 5, culture: 4 }
  },

  // ==================== 西南地区 ====================
  {
    id: "sichuan", name: "四川", fullName: "四川省", region: "西南",
    tags: ["自然风光","美食追求","冒险刺激","文化沉浸"],
    vibe: "天府之国的极致山水",
    description: "九寨沟的五彩池、稻城亚丁的最后香格里拉、大熊猫的故乡。",
    spots: [
      { name: "九寨沟", desc: "人间仙境，108个海子五彩斑斓，'九寨归来不看水'", icon: "🏞️", address: "阿坝州九寨沟县漳扎镇" },
      { name: "稻城亚丁", desc: "蓝色星球上最后一片净土，雪山草甸湖泊的极致美", icon: "🏔️" },
      { name: "乐山大佛", desc: "世界最大石刻佛像，71米高，'山是一尊佛，佛是一座山'", icon: "🗿" }
    ],
    cuisine: "火锅、串串香、麻婆豆腐、担担面",
    bestSeason: "秋季（9-10月）",
    matchProfile: { nature: 5, adventure: 5, food: 5, crowd: 4, urban: 2, culture: 3 }
  },
  {
    id: "chongqing", name: "重庆", fullName: "重庆市", region: "西南",
    tags: ["都市繁华","美食追求","冒险刺激","自然风光"],
    vibe: "8D魔幻山城与火锅江湖",
    description: "洪崖洞的千与千寻夜景、轻轨穿楼的奇观、武隆的天坑地缝。",
    spots: [
      { name: "洪崖洞", desc: "现实版千与千寻，吊脚楼建筑群，夜晚灯火璀璨如梦幻", icon: "🏮", address: "重庆市渝中区嘉陵江滨江路" },
      { name: "武隆天生三桥", desc: "世界自然遗产，《变形金刚4》取景地，巨大的天然石桥", icon: "🌉" },
      { name: "长江索道", desc: "万里长江第一条空中走廊，飞渡长江瞰山城", icon: "🚡" }
    ],
    cuisine: "重庆火锅、小面、酸辣粉、毛血旺",
    bestSeason: "春秋（3-5月、9-11月）",
    matchProfile: { nature: 4, adventure: 4, food: 5, crowd: 5, urban: 5, culture: 2 }
  },
  {
    id: "guizhou", name: "贵州", fullName: "贵州省", region: "西南",
    tags: ["自然风光","小众探索","文化沉浸","休闲放松"],
    vibe: "喀斯特秘境与苗侗风情",
    description: "黄果树的磅礴飞瀑、千户苗寨的万家灯火、荔波的翡翠碧水。",
    spots: [
      { name: "黄果树瀑布", desc: "亚洲最大瀑布，77.8米高101米宽，水雾彩虹震撼人心", icon: "💦", address: "安顺市镇宁县黄果树镇" },
      { name: "西江千户苗寨", desc: "世界最大苗族村寨，万家灯火点亮山谷，苗族歌舞长桌宴", icon: "🏘️" },
      { name: "荔波小七孔", desc: "地球腰带上的绿宝石，碧水古桥瀑布溶洞的完美组合", icon: "🌿" }
    ],
    cuisine: "酸汤鱼、肠旺面、丝娃娃、花溪牛肉粉",
    bestSeason: "夏秋（6-10月）",
    matchProfile: { nature: 5, adventure: 3, food: 4, crowd: 3, urban: 1, culture: 4 }
  },
  {
    id: "yunnan", name: "云南", fullName: "云南省", region: "西南",
    tags: ["自然风光","文化沉浸","冒险刺激","田园静谧"],
    vibe: "彩云之南的多元秘境",
    description: "大理的风花雪月、丽江的小桥流水、西双版纳的热带雨林。",
    spots: [
      { name: "大理苍山洱海", desc: "'下关风上关花苍山雪洱海月'，环湖骑行风花雪月", icon: "🏞️", address: "大理市古城区洱海南路" },
      { name: "丽江古城", desc: "世界文化遗产，小桥流水纳西风情，夜晚酒吧民谣悠扬", icon: "🏘️" },
      { name: "西双版纳", desc: "热带雨林与傣族风情，大象孔雀的乐园，泼水节的狂欢", icon: "🌴" }
    ],
    cuisine: "过桥米线、汽锅鸡、野生菌火锅、乳扇",
    bestSeason: "全年皆宜（避开7-8月雨季）",
    matchProfile: { nature: 5, adventure: 4, food: 4, crowd: 3, urban: 1, culture: 5 }
  },
  {
    id: "xizang", name: "西藏", fullName: "西藏自治区", region: "西南",
    tags: ["自然风光","冒险刺激","文化沉浸","小众探索"],
    vibe: "雪域高原的神山圣湖",
    description: "布达拉宫的圣洁、纳木错的湛蓝、珠穆朗玛的巍峨。",
    spots: [
      { name: "布达拉宫", desc: "世界屋脊上的明珠，藏传佛教圣地，红白宫殿巍峨壮丽", icon: "🏯", address: "拉萨市城关区北京中路35号" },
      { name: "纳木错", desc: "西藏三大圣湖之一，海拔4718米的天空之镜", icon: "🏞️" },
      { name: "珠峰大本营", desc: "仰望世界之巅珠穆朗玛峰，星空下的朝圣之路", icon: "🗻" }
    ],
    cuisine: "酥油茶、糌粑、藏面、牦牛肉",
    bestSeason: "夏季（6-9月，避开严寒）",
    matchProfile: { nature: 5, adventure: 5, food: 2, crowd: 1, urban: 1, culture: 5 }
  },

  // ==================== 西北地区 ====================
  {
    id: "shaanxi", name: "陕西", fullName: "陕西省", region: "西北",
    tags: ["人文历史","文化沉浸","美食追求","冒险刺激"],
    vibe: "秦唐盛世的历史回响",
    description: "兵马俑的大秦雄风、西安城墙的盛唐遗韵、华山的险峻天梯。",
    spots: [
      { name: "秦始皇兵马俑", desc: "世界第八大奇迹，八千陶俑军阵气势磅礴，震撼两千年", icon: "🗿", address: "西安市临潼区秦俑馆公路" },
      { name: "西安城墙", desc: "中国现存最完整古城墙，骑行城墙俯瞰古今交融的长安", icon: "🏰" },
      { name: "华山", desc: "奇险天下第一山，长空栈道鹞子翻身，挑战胆量极限", icon: "⛰️" }
    ],
    cuisine: "羊肉泡馍、肉夹馍、凉皮、biangbiang面",
    bestSeason: "春秋（4-5月、9-10月）",
    matchProfile: { nature: 4, adventure: 4, food: 5, crowd: 4, urban: 3, culture: 5 }
  },
  {
    id: "gansu", name: "甘肃", fullName: "甘肃省", region: "西北",
    tags: ["人文历史","自然风光","冒险刺激","小众探索"],
    vibe: "丝绸之路的驼铃回响",
    description: "莫高窟的千年壁画、月牙泉的沙漠奇观、七彩丹霞的斑斓。",
    spots: [
      { name: "敦煌莫高窟", desc: "世界艺术宝库，735个洞窟45000平方米壁画，千年佛国", icon: "🏛️", address: "酒泉敦煌市莫高镇" },
      { name: "张掖七彩丹霞", desc: "上帝打翻的调色盘，色彩斑斓的丘陵地貌，世界奇观", icon: "🎨" },
      { name: "月牙泉鸣沙山", desc: "沙漠第一泉，千年不涸的奇迹，骑骆驼听驼铃", icon: "🐪" }
    ],
    cuisine: "兰州牛肉面、手抓羊肉、酿皮子、灰豆子",
    bestSeason: "夏秋（6-10月）",
    matchProfile: { nature: 4, adventure: 5, food: 4, crowd: 2, urban: 1, culture: 5 }
  },
  {
    id: "qinghai", name: "青海", fullName: "青海省", region: "西北",
    tags: ["自然风光","冒险刺激","小众探索","田园静谧"],
    vibe: "高原圣湖与天空之镜",
    description: "青海湖的油菜花海、茶卡盐湖的天空之镜、可可西里的无人秘境。",
    spots: [
      { name: "青海湖", desc: "中国最大内陆咸水湖，七月油菜花海金黄，环湖骑行天堂", icon: "🏞️", address: "海南共和县青海湖景区" },
      { name: "茶卡盐湖", desc: "天空之镜，人走在盐湖上如漫步云端，摄影者的终极梦想", icon: "🪞" },
      { name: "塔尔寺", desc: "藏传佛教格鲁派六大寺院之一，酥油花壁画堆绣三绝", icon: "⛩️" }
    ],
    cuisine: "青海酿皮、手抓羊肉、酸奶、甜醅",
    bestSeason: "夏季（6-8月）",
    matchProfile: { nature: 5, adventure: 4, food: 3, crowd: 2, urban: 1, culture: 3 }
  },
  {
    id: "ningxia", name: "宁夏", fullName: "宁夏回族自治区", region: "西北",
    tags: ["自然风光","人文历史","小众探索","休闲放松"],
    vibe: "塞上江南与西夏古国",
    description: "沙湖的半沙半湖奇观、镇北堡的影视情怀、西夏王陵的东方金字塔。",
    spots: [
      { name: "沙湖", desc: "沙漠与湖泊共存的奇观，半沙半湖芦苇荡漾，江南水乡与大漠融合", icon: "🏞️" },
      { name: "镇北堡影视城", desc: "《大话西游》取景地，'中国电影从这里走向世界'", icon: "🎬", address: "银川市西夏区镇北堡镇" },
      { name: "西夏王陵", desc: "东方金字塔，西夏王朝的千年遗迹，神秘而壮观", icon: "🗿" }
    ],
    cuisine: "手抓羊肉、羊杂碎、烩小吃、枸杞",
    bestSeason: "夏秋（5-10月）",
    matchProfile: { nature: 3, adventure: 3, food: 4, crowd: 2, urban: 1, culture: 4 }
  },
  {
    id: "xinjiang", name: "新疆", fullName: "新疆维吾尔自治区", region: "西北",
    tags: ["自然风光","冒险刺激","美食追求","文化沉浸"],
    vibe: "大美新疆的西域传奇",
    description: "喀纳斯的北欧风光、赛里木湖的湛蓝、那拉提的空中草原。",
    spots: [
      { name: "喀纳斯", desc: "神的后花园，湖水随季节变色，秋季金黄如北欧童话", icon: "🏞️", address: "阿勒泰布尔津县禾木喀纳斯乡" },
      { name: "赛里木湖", desc: "大西洋最后一滴眼泪，高原明珠，湖水湛蓝如宝石", icon: "💎" },
      { name: "那拉提草原", desc: "空中草原，6月野花遍地，风吹草低见牛羊", icon: "🌿" }
    ],
    cuisine: "大盘鸡、烤羊肉串、手抓饭、馕",
    bestSeason: "夏秋（6-10月）",
    matchProfile: { nature: 5, adventure: 5, food: 4, crowd: 2, urban: 1, culture: 3 }
  }
];

// ============================================================
// 旅游人格类型定义（按6个维度的主导组合分类）
// ============================================================
const PERSONALITY_TYPES = [
  {
    id: "nature_lover",
    name: "🌿 自然探索者",
    desc: "你热爱山川湖海，向往在广袤天地间寻找内心的宁静。你适合去自然风光极致的地方。",
    dominant: "nature",
    topRegions: ["新疆","西藏","青海","四川","云南","贵州"]
  },
  {
    id: "culture_seeker",
    name: "🏛️ 文化沉浸者",
    desc: "你对历史文明有着天然的好奇，古建筑、石窟、博物馆是你的精神食粮。",
    dominant: "culture",
    topRegions: ["北京","陕西","山西","河南","甘肃","山东"]
  },
  {
    id: "urban_explorer",
    name: "🌃 都市漫游者",
    desc: "你享受现代都市的繁华脉动，摩天大楼、主题乐园、时尚商圈是你的舞台。",
    dominant: "urban",
    topRegions: ["上海","香港","澳门","广东","重庆","北京"]
  },
  {
    id: "adventure_seeker",
    name: "🧗 极限冒险家",
    desc: "你不走寻常路，沙漠、雪山、峡谷、天坑才是你的主场。你需要刺激与挑战！",
    dominant: "adventure",
    topRegions: ["内蒙古","新疆","西藏","陕西","四川","湖北"]
  },
  {
    id: "food_hunter",
    name: "🍜 美食猎人",
    desc: "味蕾就是你的旅行指南！为了吃可以跨越千山万水，每座城市都有必吃的理由。",
    dominant: "food",
    topRegions: ["四川","重庆","广东","湖南","陕西","山东"]
  },
  {
    id: "trend_chaser",
    name: "📸 热门玩家",
    desc: "你爱打卡网红景点、追求热门体验、享受人群的活力与氛围。越热闹越开心！",
    dominant: "crowd",
    topRegions: ["北京","上海","重庆","广东","湖南","海南"]
  }
];

// ============================================================
// 测试问题（10题，覆盖6个旅行维度）
// 维度: nature(自然) adventure(冒险) food(美食) crowd(热闹) urban(都市) culture(文化)
// ============================================================
const QUIZ_QUESTIONS = [
  {
    id: "q1",
    question: "假期来临，你最想看到的风景是？",
    options: [
      { text: "🏔️ 壮丽山川湖泊，拥抱大自然", scores: { nature: 5, urban: -2 } },
      { text: "🏛️ 古城老街与历史遗迹", scores: { culture: 5, nature: -2 } },
      { text: "🌃 摩天大楼与现代都市", scores: { urban: 5, nature: -3 } },
      { text: "🏖️ 阳光沙滩与碧海蓝天", scores: { nature: 3, urban: -1 } }
    ]
  },
  {
    id: "q2",
    question: "旅行中你最享受什么活动？",
    options: [
      { text: "🧗 徒步登山、探险越野，挑战极限", scores: { adventure: 5, nature: 2 } },
      { text: "🍜 走街串巷寻找地道美食", scores: { food: 5, adventure: -1 } },
      { text: "📸 打卡网红景点，拍美照发朋友圈", scores: { crowd: 4, urban: 2 } },
      { text: "🛋️ 泡咖啡馆/民宿发呆，享受慢时光", scores: { adventure: -3, nature: 1 } }
    ]
  },
  {
    id: "q3",
    question: "对于景点的人流量，你的态度是？",
    options: [
      { text: "🔥 就要去最热门的，热闹才有氛围", scores: { crowd: 5, urban: 1 } },
      { text: "😊 适中就好，热门的和安静的各来一些", scores: { crowd: 1 } },
      { text: "🧭 偏爱小众秘境，人越少越好", scores: { crowd: -5, adventure: 3 } },
      { text: "🤷 无所谓，心之所向就行", scores: {} }
    ]
  },
  {
    id: "q4",
    question: "你更喜欢什么季节出发？",
    options: [
      { text: "🌸 春天（3-5月），万物复苏花海烂漫", scores: { nature: 2, culture: 1 } },
      { text: "☀️ 夏天（6-8月），热情如火生机勃勃", scores: { adventure: 2, nature: 2 } },
      { text: "🍂 秋天（9-11月），金风送爽色彩斑斓", scores: { nature: 3, culture: 2 } },
      { text: "❄️ 冬天（12-2月），冰雪奇缘银装素裹", scores: { adventure: 3, nature: 1 } }
    ]
  },
  {
    id: "q5",
    question: "你理想的旅行节奏是？",
    options: [
      { text: "⚡ 特种兵模式，一天刷完所有景点", scores: { adventure: 3, urban: 2 } },
      { text: "🚶 随心漫步，深度体验当地生活", scores: { culture: 3, nature: 2, adventure: -2 } },
      { text: "🏨 度假躺平，酒店泳池海滩就够了", scores: { adventure: -3, urban: -1 } },
      { text: "📋 按攻略走，有条不紊一个不落", scores: { culture: 2, crowd: 1 } }
    ]
  },
  {
    id: "q6",
    question: "这次旅行你想和谁一起？",
    options: [
      { text: "💑 情侣/伴侣，浪漫之旅", scores: { culture: 2, nature: 2 } },
      { text: "👨‍👩‍👧‍👦 家人/孩子，亲子出游", scores: { adventure: -3, nature: 2, culture: 1 } },
      { text: "👫 朋友/闺蜜，欢乐结伴", scores: { adventure: 2, crowd: 2, food: 2 } },
      { text: "🧘 独自旅行，与自己对话", scores: { adventure: 3, crowd: -2, culture: 2 } }
    ]
  },
  {
    id: "q7",
    question: "你更在意旅途中的哪种体验？",
    options: [
      { text: "📖 学习历史文化，增长见识", scores: { culture: 5, adventure: -2 } },
      { text: "🌄 震撼的自然景观，心灵洗礼", scores: { nature: 5, urban: -3 } },
      { text: "🎉 好玩刺激，释放压力", scores: { adventure: 4, crowd: 2 } },
      { text: "🍷 享受美食美酒，感官盛宴", scores: { food: 5, culture: 1 } }
    ]
  },
  {
    id: "q8",
    question: "你的旅行预算风格是？",
    options: [
      { text: "💰 奢华享受，五星酒店米其林", scores: { urban: 3, crowd: 2 } },
      { text: "💵 中等预算，性价比优先", scores: {} },
      { text: "🪙 穷游背包客，花最少看最多", scores: { adventure: 3, crowd: -2, urban: -2 } },
      { text: "🎯 该花就花，关键体验不省钱", scores: { adventure: 1, nature: 1 } }
    ]
  },
  {
    id: "q9",
    question: "看到一张旅行海报，哪个元素最吸引你？",
    options: [
      { text: "🏯 巍峨的古建筑/寺庙/石窟", scores: { culture: 5, urban: -1 } },
      { text: "🌊 壮阔的大海/瀑布/湖泊", scores: { nature: 4, adventure: 1 } },
      { text: "🎪 热闹的夜市/酒吧街/美食街", scores: { food: 4, crowd: 3, urban: 2 } },
      { text: "🏙️ 璀璨的都市天际线/摩天轮", scores: { urban: 5, crowd: 2 } }
    ]
  },
  {
    id: "q10",
    question: "旅行结束，你最想带回什么？",
    options: [
      { text: "📷 满满的照片和美好的回忆", scores: { culture: 2, nature: 2 } },
      { text: "🎁 当地特色手信和纪念品", scores: { crowd: 2, food: 2 } },
      { text: "📝 一段不同寻常的故事和经历", scores: { adventure: 4, culture: 1 } },
      { text: "🍵 一种全新的生活方式启发", scores: { nature: 3, culture: 2, adventure: -2 } }
    ]
  }
];

// 推荐数量
const RECOMMEND_COUNT = 5;

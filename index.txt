const spots = [
    // ==================== 4个直辖市 ====================
    // 北京市
    {
        id: "gugong",
        name: "故宫博物院",
        province: "北京",
        city: "北京",
        address: "北京市东城区景山前街4号",
        level: "国家5A级旅游景区、世界文化遗产",
        lng: 116.3974,
        lat: 39.9163,
        tags: ["culture", "history", "scenery", "social"],
        ticket: "旺季60元/人，淡季40元/人（珍宝馆、钟表馆各10元）",
        openTime: "08:30-17:00（旺季），08:30-16:30（淡季），周一闭馆",
        duration: "3-4小时",
        bestSeason: "四季皆宜，春秋季最佳",
        food: [
            { name: "故宫角楼咖啡", desc: "文创主题咖啡，故宫特调饮品", price: "人均45元", distance: "神武门外景区旁" },
            { name: "四季民福烤鸭店", desc: "北京老字号，景观位可看故宫角楼", price: "人均150元", distance: "距景区约1km" },
            { name: "老北京炸酱面", desc: "传统京味小吃", price: "人均30元", distance: "周边胡同内" }
        ],
        hotel: [
            { name: "北京华尔道夫酒店", level: "五星奢华", price: "2000元/晚起", distance: "距景区约2km" },
            { name: "王府井希尔顿酒店", level: "五星", price: "1200元/晚起", distance: "距景区约2.5km" },
            { name: "前门四合院民宿", level: "京味特色民宿", price: "400元/晚起", distance: "距景区约3km" }
        ],
        plan: "【半日精华路线】\n午门进→太和殿→中和殿→保和殿→乾清宫→交泰殿→坤宁宫→御花园→神武门出\n\n【一日深度路线】\n上午：前三殿+后三宫+御花园\n中午：故宫餐厅/角楼咖啡休整\n下午：珍宝馆+钟表馆+东西六宫\n傍晚：景山公园俯瞰故宫全景",
        tips: "1. 提前7天在「故宫博物院」公众号实名预约，周一闭馆\n2. 单向游览，午门进、神武门出，不走回头路\n3. 景区面积大，穿舒适鞋子，可租电子讲解器"
    },
    {
        id: "badaling-changcheng",
        name: "八达岭长城",
        province: "北京",
        city: "北京",
        address: "北京市延庆区八达岭镇",
        level: "国家5A级旅游景区、世界文化遗产",
        lng: 116.0231,
        lat: 40.3586,
        tags: ["history", "scenery", "outdoor", "adventure"],
        ticket: "旺季40元/人，淡季35元/人",
        openTime: "06:30-19:00（旺季），07:30-18:00（淡季）",
        duration: "3-4小时",
        bestSeason: "4-5月、9-10月，气候舒适",
        food: [
            { name: "八达岭饭店", desc: "景区内家常菜正餐", price: "人均80元", distance: "景区内" },
            { name: "延庆豆腐宴", desc: "当地特色农家菜", price: "人均50元", distance: "周边农家院" },
            { name: "景区简餐", desc: "烤肠、玉米、泡面", price: "人均20元", distance: "登山沿途" }
        ],
        hotel: [
            { name: "八达岭长城公社", level: "高端度假", price: "1800元/晚起", distance: "景区内" },
            { name: "延庆城区连锁酒店", level: "四星", price: "350元/晚起", distance: "距景区约20km" },
            { name: "岔道城农家院", level: "民俗民宿", price: "200元/晚起", distance: "距景区约3km" }
        ],
        plan: "【经典攀登路线】\n09:00 抵达景区，接驳车到登城口\n10:00 北楼攀登至北八楼好汉坡\n12:00 山顶休息用餐\n13:30 南楼游览，人少景更开阔\n16:00 下山返程\n体力一般可选缆车上下",
        tips: "1. 可乘京张高铁至八达岭长城站，直达景区\n2. 台阶陡峭，穿防滑运动鞋，带足饮用水\n3. 山上风大温差大，带防风外套，注意防晒"
    },
    {
        id: "yiheyuan",
        name: "颐和园",
        province: "北京",
        city: "北京",
        address: "北京市海淀区新建宫门路19号",
        level: "国家5A级旅游景区、世界文化遗产",
        lng: 116.2755,
        lat: 39.9999,
        tags: ["culture", "history", "scenery", "slow"],
        ticket: "旺季30元/人，淡季20元/人（联票60/50元）",
        openTime: "06:30-18:00（旺季），07:00-17:00（淡季）",
        duration: "3-4小时",
        bestSeason: "春夏季赏花，秋冬季观雪景",
        food: [
            { name: "听鹂馆饭庄", desc: "宫廷菜老字号，景区内", price: "人均200元", distance: "景区内" },
            { name: "西苑美食街", desc: "各类小吃正餐集合", price: "人均40元", distance: "距景区约1km" },
            { name: "老北京爆肚", desc: "传统风味小吃", price: "人均30元", distance: "周边胡同" }
        ],
        hotel: [
            { name: "颐和安缦酒店", level: "顶级奢华", price: "6000元/晚起", distance: "景区旁" },
            { name: "中关村皇冠假日", level: "五星", price: "900元/晚起", distance: "距景区约5km" },
            { name: "西苑快捷酒店", level: "经济", price: "250元/晚起", distance: "距景区约2km" }
        ],
        plan: "【经典环湖路线】\n东宫门进→仁寿殿→文昌院→玉澜堂→长廊→排云殿→佛香阁→石舫→苏州街→北宫门出\n\n【休闲路线】\n新建宫门进→铜牛→十七孔桥→乘船游南湖岛→长廊漫步→西堤赏景",
        tips: "1. 园区面积大，建议穿舒适鞋子，可租脚踏船游湖\n2. 佛香阁是全园制高点，可俯瞰昆明湖全景\n3. 春秋周末人流大，建议错峰出行"
    },

    // 天津市
    {
        id: "wudadao",
        name: "五大道文化旅游区",
        province: "天津",
        city: "天津",
        address: "天津市和平区重庆道83号",
        level: "国家4A级旅游景区",
        lng: 117.2035,
        lat: 39.1176,
        tags: ["culture", "history", "slow", "scenery"],
        ticket: "免费，马车观光80元/人",
        openTime: "全天开放",
        duration: "2-3小时",
        bestSeason: "春秋季，梧桐叶落时最美",
        food: [
            { name: "狗不理包子", desc: "天津老字号招牌", price: "人均60元", distance: "景区周边" },
            { name: "耳朵眼炸糕", desc: "天津传统小吃", price: "人均10元", distance: "景区内" },
            { name: "天津菜馆", desc: "罾蹦鲤鱼等津菜", price: "人均80元", distance: "五大道内" }
        ],
        hotel: [
            { name: "天津丽思卡尔顿酒店", level: "五星奢华", price: "1500元/晚起", distance: "距景区约1km" },
            { name: "五大道洋楼民宿", level: "特色民宿", price: "350元/晚起", distance: "景区内" },
            { name: "和平区连锁酒店", level: "经济", price: "200元/晚起", distance: "距景区约2km" }
        ],
        plan: "【漫步游览路线】\n重庆道→大理道→常德道→睦南道→马场道\n打卡民园广场、瓷房子、疙瘩楼，可租自行车骑行\n傍晚到民园广场看夜景",
        tips: "1. 区域内多单行道，建议步行或骑行，自驾不便\n2. 民园广场拍照出片，傍晚灯光亮起最佳\n3. 可请讲解员了解洋楼历史与名人故事"
    },
    {
        id: "tianjin-zhiyan",
        name: "天津之眼摩天轮",
        province: "天津",
        city: "天津",
        address: "天津市红桥区三岔河口永乐桥",
        level: "国家4A级旅游景区",
        lng: 117.1763,
        lat: 39.1539,
        tags: ["scenery", "romance", "lively", "modern"],
        ticket: "70元/人",
        openTime: "09:30-21:30（周一上午检修）",
        duration: "1小时左右",
        bestSeason: "四季皆宜，夜晚观景最佳",
        food: [
            { name: "古文化街小吃", desc: "麻花、崩豆张等特产", price: "人均30元", distance: "距景区约2km" },
            { name: "津味家常菜馆", desc: "本地特色正餐", price: "人均70元", distance: "周边商圈" },
            { name: "海河景观咖啡", desc: "河畔休闲饮品", price: "人均40元", distance: "河边商铺" }
        ],
        hotel: [
            { name: "天津香格里拉大酒店", level: "五星", price: "1000元/晚起", distance: "距景区约3km" },
            { name: "古文化街精品酒店", level: "中端", price: "300元/晚起", distance: "距景区约2km" },
            { name: "火车站快捷酒店", level: "经济", price: "180元/晚起", distance: "距景区约3km" }
        ],
        plan: "【夜游路线】\n傍晚抵达→古文化街逛吃→19:00左右乘坐摩天轮→俯瞰海河夜景\n结束后沿海河步道散步，可搭配海河游船",
        tips: "1. 节假日排队久，建议提前网购票，选日落时段乘坐\n2. 转一圈约30分钟，轿厢有空调，平稳舒适\n3. 周一上午设备检修，下午开放，注意时间"
    },
    {
        id: "panshan",
        name: "盘山风景区",
        province: "天津",
        city: "天津",
        address: "天津市蓟州区官庄镇莲花岭村",
        level: "国家5A级旅游景区",
        lng: 117.3018,
        lat: 40.0532,
        tags: ["nature", "scenery", "outdoor", "adventure"],
        ticket: "78元/人",
        openTime: "07:30-17:00",
        duration: "1天",
        bestSeason: "4-10月，秋季红叶最佳",
        food: [
            { name: "盘山农家院", desc: "炖柴鸡、山野菜", price: "人均60元", distance: "景区周边" },
            { name: "景区餐厅", desc: "家常菜简餐", price: "人均50元", distance: "景区内" },
            { name: "蓟县碗坨", desc: "本地特色小吃", price: "人均10元", distance: "山下商铺" }
        ],
        hotel: [
            { name: "盘山恒大酒店", level: "五星度假", price: "800元/晚起", distance: "景区周边" },
            { name: "盘山农家民宿", level: "农家院", price: "200元/晚起", distance: "景区周边" },
            { name: "蓟州城区酒店", level: "中端", price: "300元/晚起", distance: "距景区约12km" }
        ],
        plan: "【登山路线】\n09:00 山门进入→入胜索道上山→万松寺→云罩寺→挂月峰\n12:00 山顶用餐休息\n13:30 步行下山游览沿途景点\n16:30 返程\n体力一般可全程索道",
        tips: "1. 市区自驾约1.5小时，也可乘大巴到蓟州转车\n2. 山路台阶多，穿防滑鞋，可带登山杖\n3. 山上温差大，带薄外套，夏季防蚊虫"
    },

    // 上海市
    {
        id: "waitan",
        name: "上海外滩",
        province: "上海",
        city: "上海",
        address: "上海市黄浦区中山东一路",
        level: "国家5A级旅游景区",
        lng: 121.4901,
        lat: 31.2397,
        tags: ["scenery", "modern", "history", "lively"],
        ticket: "免费，黄浦江游船120元起",
        openTime: "全天开放，景观灯19:00-22:30",
        duration: "1-2小时",
        bestSeason: "四季皆宜，夜晚最佳",
        food: [
            { name: "和平饭店中餐厅", desc: "本帮菜老字号，江景观景位", price: "人均300元", distance: "外滩内" },
            { name: "南京路小吃", desc: "生煎、小笼包等沪味", price: "人均40元", distance: "距外滩500米" },
            { name: "外滩露台酒吧", desc: "江景鸡尾酒", price: "人均150元", distance: "外滩沿线" }
        ],
        hotel: [
            { name: "上海和平饭店", level: "百年奢华五星", price: "2500元/晚起", distance: "外滩内" },
            { name: "外滩华尔道夫酒店", level: "顶级奢华", price: "3000元/晚起", distance: "外滩内" },
            { name: "南京东路连锁酒店", level: "中端", price: "400元/晚起", distance: "距外滩约1km" }
        ],
        plan: "【经典夜游路线】\n18:30 南京路步行街逛吃→19:30 外滩看万国建筑博览群→20:00 陆家嘴灯光秀→21:00 可选黄浦江游船\n白天可搭配豫园、城隍庙游览",
        tips: "1. 节假日人流极大，注意看管随身物品\n2. 灯光秀整点上演，最佳观赏点在外滩观景平台\n3. 2元轮渡可过江，性价比远超游船"
    },
    {
        id: "shanghai-disney",
        name: "上海迪士尼度假区",
        province: "上海",
        city: "上海",
        address: "上海市浦东新区川沙镇黄赵路310号",
        level: "国家5A级旅游景区",
        lng: 121.6778,
        lat: 31.1433,
        tags: ["lively", "social", "adventure", "romance"],
        ticket: "平日435元，高峰599元，假期719元",
        openTime: "08:30-21:30（随季节调整）",
        duration: "1-2天",
        bestSeason: "春秋季，避开寒暑假节假日",
        food: [
            { name: "园区主题餐厅", desc: "米奇造型餐、火鸡腿", price: "人均120元", distance: "园区内" },
            { name: "迪士尼小镇餐饮", desc: "各类连锁品牌餐饮", price: "人均80元", distance: "园区外小镇" },
            { name: "酒店角色自助餐", desc: "迪士尼人物互动用餐", price: "人均300元", distance: "度假区酒店内" }
        ],
        hotel: [
            { name: "迪士尼乐园酒店", level: "主题奢华", price: "3000元/晚起", distance: "度假区内步行可达" },
            { name: "玩具总动员酒店", level: "主题四星", price: "1500元/晚起", distance: "度假区内接驳接送" },
            { name: "川沙镇连锁酒店", level: "经济", price: "300元/晚起", distance: "距园区约10km" }
        ],
        plan: "【一日精华路线】\n08:00 入园→飞跃地平线→七个小矮人矿山车→加勒比海盗→中午花车巡游→下午创极速光轮→巴斯光年→晚上城堡烟花秀\n\n【两日悠闲路线】\n首日刷热门项目，次日逛主题园区、拍照、看演出",
        tips: "1. 提前下载官方APP，查看排队时间和预约等候卡\n2. 早享卡可提前1小时入园，优先刷热门项目\n3. 可带未开封水和小零食，园区物价较高"
    },
    {
        id: "yuyuan",
        name: "豫园",
        province: "上海",
        city: "上海",
        address: "上海市黄浦区福佑路168号",
        level: "国家4A级旅游景区",
        lng: 121.4925,
        lat: 31.2271,
        tags: ["culture", "history", "food", "slow"],
        ticket: "旺季40元/人，淡季30元/人",
        openTime: "09:00-16:45，周一闭馆",
        duration: "2小时",
        bestSeason: "四季皆宜",
        food: [
            { name: "南翔馒头店", desc: "上海老字号小笼包", price: "人均60元", distance: "豫园商城内" },
            { name: "城隍庙小吃广场", desc: "生煎、海棠糕等沪味", price: "人均40元", distance: "周边" },
            { name: "绿波廊酒楼", desc: "本帮菜老字号", price: "人均200元", distance: "豫园旁" }
        ],
        hotel: [
            { name: "豫园万丽酒店", level: "四星", price: "800元/晚起", distance: "距景区500米" },
            { name: "石库门特色民宿", level: "老上海民宿", price: "400元/晚起", distance: "周边弄堂" },
            { name: "人民广场快捷酒店", level: "经济", price: "250元/晚起", distance: "距景区约2km" }
        ],
        plan: "【游览路线】\n豫园园林游览（三穗堂→大假山→万花楼→点春堂→玉玲珑）→豫园商城逛吃→城隍庙参观→傍晚逛外滩\n全程约半天时间",
        tips: "1. 园林精致小巧，建议请讲解了解江南园林文化\n2. 节假日商城人流密集，注意保管财物\n3. 城隍庙可自愿参拜，香火旺盛"
    },

    // 重庆市
    {
        id: "hongyadong",
        name: "洪崖洞民俗风貌区",
        province: "重庆",
        city: "重庆",
        address: "重庆市渝中区嘉陵江滨江路88号",
        level: "国家4A级旅游景区",
        lng: 106.5821,
        lat: 29.5630,
        tags: ["scenery", "culture", "food", "lively"],
        ticket: "免费",
        openTime: "全天开放，灯光19:30-23:00",
        duration: "2-3小时",
        bestSeason: "四季皆宜，夜晚最佳",
        food: [
            { name: "重庆老火锅", desc: "牛油锅底，本地特色", price: "人均100元", distance: "景区周边" },
            { name: "小面、酸辣粉", desc: "重庆街头经典小吃", price: "人均15元", distance: "景区各层" },
            { name: "江湖菜", desc: "辣子鸡、毛血旺", price: "人均70元", distance: "解放碑周边" }
        ],
        hotel: [
            { name: "解放碑威斯汀酒店", level: "五星", price: "1200元/晚起", distance: "距景区约1km" },
            { name: "洪崖洞江景酒店", level: "精品江景", price: "400元/晚起", distance: "景区周边" },
            { name: "解放碑快捷酒店", level: "经济", price: "200元/晚起", distance: "距景区约1km" }
        ],
        plan: "【夜游路线】\n18:00 解放碑逛吃→19:30 洪崖洞亮灯，从11层往下逛→21:00 千厮门大桥拍全景→22:00 滨江路散步\n白天可搭配长江索道、解放碑游览",
        tips: "1. 节假日人流极多，建议错峰，勿自驾前往\n2. 全景最佳拍摄点在千厮门大桥和滨江路，景区内拍不到\n3. 重庆地形复杂，导航可能不准，多问本地人"
    },
    {
        id: "wulong-sanqiao",
        name: "武隆天生三桥",
        province: "重庆",
        city: "重庆",
        address: "重庆市武隆区仙女山镇",
        level: "国家5A级旅游景区、世界自然遗产",
        lng: 107.7963,
        lat: 29.3612,
        tags: ["nature", "scenery", "outdoor", "adventure"],
        ticket: "125元/人（含观光车）",
        openTime: "08:30-16:30",
        duration: "3-4小时",
        bestSeason: "春秋季，夏季避暑",
        food: [
            { name: "武隆碗碗羊肉", desc: "本地特色羊肉", price: "人均50元", distance: "仙女山镇" },
            { name: "农家菜", desc: "腊肉、山野菜", price: "人均60元", distance: "周边农家院" },
            { name: "重庆小面", desc: "简餐主食", price: "人均15元", distance: "景区服务区" }
        ],
        hotel: [
            { name: "仙女山华邦酒店", level: "五星度假", price: "800元/晚起", distance: "仙女山镇" },
            { name: "仙女山民宿", level: "特色民宿", price: "300元/晚起", distance: "仙女山镇" },
            { name: "武隆城区酒店", level: "经济", price: "200元/晚起", distance: "距景区约20km" }
        ],
        plan: "【一日游路线】\n08:00 市区出发→10:30 天生三桥→乘电梯下谷底→天龙桥→青龙桥→黑龙桥→天福官驿→13:00 镇上用餐→14:30 龙水峡地缝→16:30 返程",
        tips: "1. 市区自驾约2.5小时，也可乘火车到武隆转车\n2. 谷底潮湿路滑，穿防滑鞋，带雨具\n3. 台阶较多，穿舒适鞋子，夏季防蚊"
    },

    // ==================== 23个省 ====================
    // 河北省
    {
        id: "chengde-bishushanzhuang",
        name: "承德避暑山庄",
        province: "河北",
        city: "承德",
        address: "河北省承德市双桥区丽正门路20号",
        level: "国家5A级旅游景区、世界文化遗产",
        lng: 117.9387,
        lat: 40.9529,
        tags: ["history", "culture", "scenery", "slow"],
        ticket: "旺季130元/人，淡季90元/人",
        openTime: "07:00-18:00（旺季），08:00-17:30（淡季）",
        duration: "1天",
        bestSeason: "夏季避暑，秋季赏景",
        food: [
            { name: "承德莜面窝子", desc: "河北坝上特色", price: "人均30元", distance: "市区餐馆" },
            { name: "满族八大碗", desc: "满族传统宴席", price: "人均80元", distance: "景区周边" },
            { name: "驴打滚、碗坨", desc: "本地小吃", price: "人均15元", distance: "景区周边" }
        ],
        hotel: [
            { name: "承德行宫大酒店", level: "五星", price: "600元/晚起", distance: "距景区约2km" },
            { name: "山庄周边精品酒店", level: "中端", price: "280元/晚起", distance: "距景区约1km" },
            { name: "承德市区快捷酒店", level: "经济", price: "150元/晚起", distance: "距景区约3km" }
        ],
        plan: "【一日游路线】\n上午：宫殿区→湖区（乘船）→平原区\n中午：景区内用餐\n下午：山区（乘观光车）→外八庙（普陀宗乘之庙）\n傍晚：武烈河沿岸散步",
        tips: "1. 景区面积大，山区建议坐观光车，湖区可乘船\n2. 夏季凉爽，是避暑胜地，早晚带薄外套\n3. 可搭配外八庙联票，性价比更高"
    },
    {
        id: "shanhaiguan",
        name: "山海关景区",
        province: "河北",
        city: "秦皇岛",
        address: "河北省秦皇岛市山海关区",
        level: "国家5A级旅游景区",
        lng: 119.7601,
        lat: 39.9878,
        tags: ["history", "scenery", "culture", "outdoor"],
        ticket: "天下第一关40元，老龙头50元，联票100元",
        openTime: "07:30-17:30",
        duration: "1天",
        bestSeason: "5-10月",
        food: [
            { name: "海鲜大餐", desc: "皮皮虾、梭子蟹", price: "人均120元", distance: "海边餐馆" },
            { name: "四条包子", desc: "山海关老字号", price: "人均20元", distance: "古城内" },
            { name: "桲椤叶饼", desc: "本地特色小吃", price: "人均10元", distance: "古城内" }
        ],
        hotel: [
            { name: "山海关海景酒店", level: "四星", price: "400元/晚起", distance: "老龙头旁" },
            { name: "古城特色民宿", level: "民俗民宿", price: "200元/晚起", distance: "古城内" },
            { name: "秦皇岛市区酒店", level: "经济", price: "180元/晚起", distance: "距景区约20km" }
        ],
        plan: "【一日游路线】\n上午：天下第一关→古城街逛吃\n中午：古城内用餐\n下午：老龙头（长城入海处）→孟姜女庙（可选）\n傍晚：海边看日落",
        tips: "1. 秦皇岛市区乘公交可直达，自驾更方便\n2. 夏季海边人多，注意防晒，带好泳衣\n3. 古城内有很多历史遗迹，可慢慢逛"
    },

    // 山西省
    {
        id: "yungang-shiku",
        name: "云冈石窟",
        province: "山西",
        city: "大同",
        address: "山西省大同市云冈区云冈镇",
        level: "国家5A级旅游景区、世界文化遗产",
        lng: 113.1335,
        lat: 40.1087,
        tags: ["history", "culture", "scenery", "quiet"],
        ticket: "旺季120元/人，淡季100元/人",
        openTime: "08:30-17:30（旺季），08:30-17:00（淡季）",
        duration: "3-4小时",
        bestSeason: "春秋季",
        food: [
            { name: "大同刀削面", desc: "山西招牌面食", price: "人均20元", distance: "市区餐馆" },
            { name: "浑源凉粉", desc: "晋北特色小吃", price: "人均10元", distance: "景区周边" },
            { name: "大同烧麦", desc: "传统名点", price: "人均30元", distance: "市区老字号" }
        ],
        hotel: [
            { name: "大同云冈建国宾馆", level: "五星", price: "500元/晚起", distance: "市区内" },
            { name: "古城内精品酒店", level: "中端", price: "260元/晚起", distance: "大同古城内" },
            { name: "市区快捷酒店", level: "经济", price: "150元/晚起", distance: "市区各处" }
        ],
        plan: "【游览路线】\n景区入口→昙曜广场→佛光大道→第1-20窟依次游览→第20窟露天大佛（标志性景观）→云冈美术馆\n建议请讲解员，了解石窟历史与艺术价值",
        tips: "1. 大同市区有公交直达，车程约40分钟\n2. 石窟内禁止拍照，遵守景区规定\n3. 可搭配大同古城、悬空寺形成2日行程"
    },
    {
        id: "wutaishan",
        name: "五台山风景区",
        province: "山西",
        city: "忻州",
        address: "山西省忻州市五台县台怀镇",
        level: "国家5A级旅游景区、世界文化遗产",
        lng: 113.5997,
        lat: 38.9762,
        tags: ["culture", "history", "nature", "quiet"],
        ticket: "旺季135元/人，淡季118元/人",
        openTime: "全天开放，寺庙06:30-18:00",
        duration: "2天",
        bestSeason: "夏季避暑，冬季雪景",
        food: [
            { name: "五台山素斋", desc: "寺院素斋，清淡养生", price: "人均50元", distance: "台怀镇餐馆" },
            { name: "山西刀削面", desc: "家常面食", price: "人均20元", distance: "台怀镇各处" },
            { name: "台蘑炖鸡", desc: "本地山珍", price: "人均80元", distance: "台怀镇餐馆" }
        ],
        hotel: [
            { name: "五台山万豪酒店", level: "五星度假", price: "800元/晚起", distance: "台怀镇" },
            { name: "台怀镇民宿客栈", level: "中端民宿", price: "200元/晚起", distance: "台怀镇内" },
            { name: "寺院挂单", level: "禅修体验", price: "随喜功德", distance: "部分寺院" }
        ],
        plan: "【两日朝圣路线】\nDay1：黛螺顶→显通寺→塔院寺→五爷庙→菩萨顶\nDay2：东台望海峰看日出→佛光寺→南禅寺\n核心寺庙集中在台怀镇，可步行或乘观光车",
        tips: "1. 山区海拔高，温差大，带厚外套\n2. 五爷庙香火最旺，可早去避开人流\n3. 登东台看日出需早起，注意保暖"
    },
    {
        id: "pingyao-gucheng",
        name: "平遥古城",
        province: "山西",
        city: "晋中",
        address: "山西省晋中市平遥县",
        level: "国家5A级旅游景区、世界文化遗产",
        lng: 112.1531,
        lat: 37.2025,
        tags: ["history", "culture", "slow", "food"],
        ticket: "古城免费，通票125元/人（含22个景点）",
        openTime: "全天开放，景点08:00-18:00",
        duration: "1-2天",
        bestSeason: "春秋季，年味最浓是春节",
        food: [
            { name: "平遥牛肉", desc: "山西名产，肉质鲜嫩", price: "人均60元", distance: "古城内" },
            { name: "平遥碗托", desc: "传统风味小吃", price: "人均10元", distance: "古城内" },
            { name: "山西陈醋宴", desc: "晋商特色宴席", price: "人均80元", distance: "古城内餐馆" }
        ],
        hotel: [
            { name: "平遥锦宅客栈", level: "高端民俗客栈", price: "600元/晚起", distance: "古城内" },
            { name: "古城四合院民宿", level: "特色民宿", price: "200元/晚起", distance: "古城内" },
            { name: "平遥城外酒店", level: "经济", price: "150元/晚起", distance: "古城外" }
        ],
        plan: "【一日精华路线】\n上午：古城墙→县衙→城隍庙\n中午：古城内吃平遥特色餐\n下午：日升昌票号→协同庆钱庄→明清街逛吃\n晚上：看《又见平遥》演出（可选）",
        tips: "1. 古城内石板路多，穿舒适鞋子\n2. 建议住古城内民宿，体验晋商大院氛围\n3. 《又见平遥》演出很震撼，建议提前购票"
    },

    // 辽宁省
    {
        id: "shenyang-gugong",
        name: "沈阳故宫",
        province: "辽宁",
        city: "沈阳",
        address: "辽宁省沈阳市沈河区沈阳路171号",
        level: "国家4A级旅游景区、世界文化遗产",
        lng: 123.4501,
        lat: 41.7968,
        tags: ["history", "culture", "scenery", "slow"],
        ticket: "50元/人",
        openTime: "08:30-17:30，周一闭馆",
        duration: "2-3小时",
        bestSeason: "四季皆宜",
        food: [
            { name: "老边饺子", desc: "沈阳老字号饺子", price: "人均50元", distance: "中街附近" },
            { name: "东北锅包肉", desc: "东北经典菜", price: "人均40元", distance: "市区餐馆" },
            { name: "沈阳鸡架", desc: "本地特色小吃", price: "人均15元", distance: "街头小店" }
        ],
        hotel: [
            { name: "沈阳康莱德酒店", level: "五星", price: "1000元/晚起", distance: "中街商圈" },
            { name: "中街精品酒店", level: "中端", price: "300元/晚起", distance: "距景区约1km" },
            { name: "沈河区快捷酒店", level: "经济", price: "150元/晚起", distance: "周边" }
        ],
        plan: "【游览路线】\n大清门→崇政殿→凤凰楼→清宁宫→文溯阁→西路戏台\n了解清初满族宫廷建筑特色，可搭配张氏帅府一同游览",
        tips: "1. 沈阳地铁可直达，交通便利\n2. 建议请讲解了解满清历史\n3. 可与张氏帅府买联票，性价比更高"
    },
    {
        id: "dalian-laohutan",
        name: "大连老虎滩海洋公园",
        province: "辽宁",
        city: "大连",
        address: "辽宁省大连市中山区滨海中路9号",
        level: "国家5A级旅游景区",
        lng: 121.6731,
        lat: 38.8708,
        tags: ["scenery", "lively", "social", "adventure"],
        ticket: "198元/人（通票）",
        openTime: "08:30-17:00",
        duration: "1天",
        bestSeason: "5-10月",
        food: [
            { name: "大连海鲜", desc: "鲍鱼、海参、大虾", price: "人均150元", distance: "老虎滩周边" },
            { name: "烤鱿鱼、铁板烧", desc: "海边小吃", price: "人均30元", distance: "景区内" },
            { name: "大连老菜", desc: "本地家常菜", price: "人均60元", distance: "市区餐馆" }
        ],
        hotel: [
            { name: "大连老虎滩渔人码头酒店", level: "四星海景", price: "500元/晚起", distance: "景区周边" },
            { name: "中山区海景民宿", level: "精品民宿", price: "300元/晚起", distance: "滨海路沿线" },
            { name: "市区连锁酒店", level: "经济", price: "200元/晚起", distance: "距景区约5km" }
        ],
        plan: "【一日游路线】\n09:00 入园→极地馆→海兽馆→珊瑚馆\n12:00 景区内用餐\n13:30 欢乐剧场表演→鸟语林→跨海索道\n16:30 滨海路散步，看海景",
        tips: "1. 各场馆表演时间固定，提前看好时间表\n2. 夏季海边日晒强，做好防晒\n3. 可乘观光巴士沿滨海路游览"
    },

    // 吉林省
    {
        id: "changbaishan",
        name: "长白山风景区",
        province: "吉林",
        city: "延边",
        address: "吉林省延边朝鲜族自治州安图县",
        level: "国家5A级旅游景区",
        lng: 128.0567,
        lat: 42.0128,
        tags: ["nature", "scenery", "outdoor", "quiet"],
        ticket: "105元/人（5天有效），环保车85元",
        openTime: "07:00-17:00",
        duration: "2天",
        bestSeason: "6-9月避暑观天池，12-2月滑雪看雾凇",
        food: [
            { name: "朝鲜族冷面", desc: "延边特色美食", price: "人均25元", distance: "二道白河镇" },
            { name: "长白山温泉蛋", desc: "温泉煮鸡蛋", price: "10元/3个", distance: "景区内" },
            { name: "铁锅炖", desc: "东北特色炖菜", price: "人均70元", distance: "镇上餐馆" }
        ],
        hotel: [
            { name: "长白山万达度假区酒店", level: "五星度假", price: "1200元/晚起", distance: "松江河镇" },
            { name: "二道白河温泉酒店", level: "中端温泉", price: "400元/晚起", distance: "二道白河镇" },
            { name: "镇上民宿客栈", level: "经济", price: "150元/晚起", distance: "二道白河镇" }
        ],
        plan: "【北坡经典两日游】\nDay1：抵达二道白河→小镇休整→美人松公园\nDay2：早起进山→天池→长白瀑布→聚龙温泉→绿渊潭→地下森林\n\n提示：北坡景点多，看到天池概率高；西坡视野开阔",
        tips: "1. 天池天气多变，能否看到全凭运气，提前查天气\n2. 山上温度低，即使夏天也要带厚外套\n3. 可乘高铁到长白山站，再转景区大巴"
    },

    // 黑龙江省
    {
        id: "zhongyang-dajie",
        name: "哈尔滨中央大街",
        province: "黑龙江",
        city: "哈尔滨",
        address: "黑龙江省哈尔滨市道里区",
        level: "国家4A级旅游景区",
        lng: 126.6233,
        lat: 45.7721,
        tags: ["culture", "food", "lively", "scenery"],
        ticket: "免费",
        openTime: "全天开放",
        duration: "2-3小时",
        bestSeason: "冬季冰雪季，夏季避暑",
        food: [
            { name: "马迭尔冰棍", desc: "哈尔滨百年老字号", price: "5元/支", distance: "大街上" },
            { name: "俄式西餐", desc: "红菜汤、罐焖牛肉", price: "人均120元", distance: "大街内餐厅" },
            { name: "东北锅包肉", desc: "哈尔滨始创", price: "人均50元", distance: "周边餐馆" }
        ],
        hotel: [
            { name: "哈尔滨马迭尔宾馆", level: "百年老店四星", price: "500元/晚起", distance: "中央大街内" },
            { name: "松花江畔酒店", level: "中端", price: "280元/晚起", distance: "距大街约1km" },
            { name: "道里区快捷酒店", level: "经济", price: "150元/晚起", distance: "周边" }
        ],
        plan: "【漫步路线】\n防洪纪念塔→中央大街步行街→圣索菲亚大教堂→兆麟街\n冬季可搭配冰雪大世界、太阳岛雪博会\n夏季可松花江乘船、太阳岛避暑",
        tips: "1. 冬季极寒，零下二三十度，做好全套保暖\n2. 俄式建筑拍照出片，傍晚灯光亮起最美\n3. 冰雪大世界建议下午去，白天晚上景不同"
    },
    {
        id: "bingxue-dashijie",
        name: "哈尔滨冰雪大世界",
        province: "黑龙江",
        city: "哈尔滨",
        address: "黑龙江省哈尔滨市松北区松北大道",
        level: "国家4A级旅游景区",
        lng: 126.5789,
        lat: 45.7912,
        tags: ["scenery", "lively", "adventure", "social"],
        ticket: "298元/人（平日），338元/人（节假日）",
        openTime: "11:00-22:00（每年12月下旬-次年2月）",
        duration: "4-5小时",
        bestSeason: "12月下旬-2月中旬",
        food: [
            { name: "园区热饮简餐", desc: "泡面、热奶茶", price: "人均40元", distance: "园区内" },
            { name: "东北铁锅炖", desc: "暖身正餐", price: "人均80元", distance: "园区周边" },
            { name: "冻梨、冻柿子", desc: "东北特色冻果", price: "人均10元", distance: "园区内" }
        ],
        hotel: [
            { name: "哈尔滨松北香格里拉", level: "五星", price: "900元/晚起", distance: "松北区" },
            { name: "冰雪大世界周边酒店", level: "中端", price: "300元/晚起", distance: "周边" },
            { name: "市区连锁酒店", level: "经济", price: "200元/晚起", distance: "距景区约10km" }
        ],
        plan: "【游玩路线】\n15:00 入园→白天看冰雕建筑→玩大滑梯、雪圈\n17:00 亮灯，看彩色冰雕夜景\n19:00 看冰雪演出、哈冰秀\n20:30 返程\n\n提示：大滑梯很热门，入园先预约",
        tips: "1. 极寒天气，贴暖宝宝，穿防滑鞋，手机注意保暖\n2. 下午入园可看白天+夜景双重景观\n3. 热门项目排队久，提前做好攻略"
    },

    // 江苏省
    {
        id: "zhuozhengyuan",
        name: "苏州拙政园",
        province: "江苏",
        city: "苏州",
        address: "江苏省苏州市姑苏区东北街178号",
        level: "国家5A级旅游景区、世界文化遗产",
        lng: 120.6302,
        lat: 31.3246,
        tags: ["culture", "history", "scenery", "quiet"],
        ticket: "旺季70元/人，淡季50元/人",
        openTime: "07:30-17:30",
        duration: "2-3小时",
        bestSeason: "春秋季，四季皆有景",
        food: [
            { name: "松鼠桂鱼", desc: "苏帮菜招牌", price: "人均150元", distance: "观前街餐馆" },
            { name: "苏式汤面", desc: "奥灶面、焖肉面", price: "人均20元", distance: "街边面馆" },
            { name: "苏州糕点", desc: "桂花糕、芡实糕", price: "人均15元", distance: "平江路" }
        ],
        hotel: [
            { name: "苏州平江路柏悦酒店", level: "五星奢华", price: "1800元/晚起", distance: "姑苏区核心" },
            { name: "平江路园林民宿", level: "特色民宿", price: "350元/晚起", distance: "平江路附近" },
            { name: "观前街连锁酒店", level: "经济", price: "200元/晚起", distance: "距景区约1km" }
        ],
        plan: "【园林游览路线】\n兰雪堂→芙蓉榭→天泉亭→秫香馆→远香堂→小飞虹→卅六鸳鸯馆→与谁同坐轩\n可搭配苏州博物馆、平江路、狮子林一同游览",
        tips: "1. 江南园林一步一景，建议请讲解了解造园艺术\n2. 节假日人多，建议早上去\n3. 苏州博物馆免费，需提前预约"
    },
    {
        id: "zhongshanling",
        name: "南京中山陵",
        province: "江苏",
        city: "南京",
        address: "江苏省南京市玄武区石象路7号",
        level: "国家5A级旅游景区",
        lng: 118.8444,
        lat: 32.0606,
        tags: ["history", "culture", "scenery", "outdoor"],
        ticket: "免费，需提前预约",
        openTime: "08:30-17:00，周一闭馆",
        duration: "2-3小时",
        bestSeason: "春秋季，11月石象路银杏最美",
        food: [
            { name: "南京盐水鸭", desc: "金陵招牌", price: "人均50元", distance: "市区餐馆" },
            { name: "鸭血粉丝汤", desc: "南京街头小吃", price: "人均15元", distance: "各处小店" },
            { name: "美龄宫下午茶", desc: "民国风体验", price: "人均80元", distance: "美龄宫内" }
        ],
        hotel: [
            { name: "南京紫金山庄", level: "五星度假", price: "1000元/晚起", distance: "钟山风景区内" },
            { name: "新街口精品酒店", level: "中端", price: "350元/晚起", distance: "距景区约5km" },
            { name: "玄武区快捷酒店", level: "经济", price: "180元/晚起", distance: "周边" }
        ],
        plan: "【钟山风景区一日游】\n上午：中山陵→音乐台→美龄宫\n中午：景区内用餐\n下午：明孝陵（石象路）→灵谷寺\n傍晚：玄武湖散步",
        tips: "1. 中山陵需提前在公众号预约，周一闭馆\n2. 景区面积大，可乘观光车串联各景点\n3. 11月中下旬石象路银杏金黄，最佳观赏期"
    },
    {
        id: "shouxihu",
        name: "扬州瘦西湖",
        province: "江苏",
        city: "扬州",
        address: "江苏省扬州市邗江区大虹桥路28号",
        level: "国家5A级旅游景区",
        lng: 119.4193,
        lat: 32.4132,
        tags: ["scenery", "culture", "slow", "romance"],
        ticket: "旺季100元/人，淡季60元/人",
        openTime: "06:30-17:30",
        duration: "3-4小时",
        bestSeason: "3-4月烟花三月，9-10月秋高气爽",
        food: [
            { name: "扬州早茶", desc: "三丁包、烫干丝", price: "人均50元", distance: "冶春、富春茶社" },
            { name: "扬州狮子头", desc: "淮扬菜经典", price: "人均80元", distance: "市区餐馆" },
            { name: "扬州炒饭", desc: "正宗扬州味", price: "人均30元", distance: "各处餐馆" }
        ],
        hotel: [
            { name: "扬州瘦西湖温泉度假村", level: "五星度假", price: "800元/晚起", distance: "景区旁" },
            { name: "东关街民宿", level: "古风民宿", price: "280元/晚起", distance: "东关街内" },
            { name: "市区连锁酒店", level: "经济", price: "200元/晚起", distance: "距景区约2km" }
        ],
        plan: "【一日游路线】\n上午：早起吃早茶→瘦西湖游览（长堤春柳→二十四桥→五亭桥→白塔）\n中午：淮扬菜正餐\n下午：个园/何园→东关街逛吃\n晚上：古运河游船",
        tips: "1. 烟花三月是扬州最美时节，建议3-4月前往\n2. 早茶是扬州特色，一定要体验\n3. 景区可乘船游览，视角更佳"
    },

    // 浙江省
    {
        id: "xihu",
        name: "杭州西湖",
        province: "浙江",
        city: "杭州",
        address: "浙江省杭州市西湖区",
        level: "国家5A级旅游景区、世界文化遗产",
        lng: 120.1451,
        lat: 30.2445,
        tags: ["scenery", "culture", "slow", "romance"],
        ticket: "免费，部分景点单独收费",
        openTime: "全天开放",
        duration: "1-2天",
        bestSeason: "四季皆宜，3-4月桃花、9-10月桂花香",
        food: [
            { name: "西湖醋鱼、东坡肉", desc: "杭帮菜招牌", price: "人均120元", distance: "楼外楼等老字号" },
            { name: "杭州小笼包", desc: "皮薄馅大", price: "人均20元", distance: "街边小店" },
            { name: "西湖龙井", desc: "名茶品茶体验", price: "人均50元", distance: "龙井村茶舍" }
        ],
        hotel: [
            { name: "杭州西湖国宾馆", level: "国宾级度假", price: "2000元/晚起", distance: "西湖畔" },
            { name: "西湖边精品酒店", level: "中端", price: "500元/晚起", distance: "西湖周边" },
            { name: "杭州城区快捷酒店", level: "经济", price: "200元/晚起", distance: "距西湖约3km" }
        ],
        plan: "【经典一日游】\n上午：断桥→白堤→平湖秋月→孤山→岳王庙\n中午：楼外楼吃杭帮菜\n下午：苏堤→三潭印月（乘船）→雷峰塔\n晚上：看音乐喷泉，逛河坊街\n\n【两日悠闲游】\n第二天：灵隐寺→龙井村→九溪烟树",
        tips: "1. 西湖景区大，可租自行车环湖，或乘观光车\n2. 音乐喷泉每晚有，节假日人多提前占位\n3. 灵隐寺需先买飞来峰门票，再买香花券"
    },
    {
        id: "wuzhen",
        name: "乌镇古镇",
        province: "浙江",
        city: "嘉兴",
        address: "浙江省嘉兴市桐乡市乌镇镇",
        level: "国家5A级旅游景区",
        lng: 120.4913,
        lat: 30.7511,
        tags: ["culture", "slow", "quiet", "romance"],
        ticket: "东栅110元，西栅150元，联票190元",
        openTime: "东栅07:00-18:00，西栅09:00-22:00",
        duration: "1-2天",
        bestSeason: "春秋季，夜景最佳",
        food: [
            { name: "乌镇酱鸭", desc: "本地卤味特色", price: "人均40元", distance: "西栅内" },
            { name: "定胜糕、青团", desc: "江南传统糕点", price: "人均10元", distance: "古镇内" },
            { name: "白水鱼", desc: "乌镇特色河鲜", price: "人均80元", distance: "西栅内餐馆" }
        ],
        hotel: [
            { name: "乌镇西栅民宿", level: "景区内官方民宿", price: "600元/晚起", distance: "西栅景区内" },
            { name: "乌镇通安客栈", level: "四星", price: "800元/晚起", distance: "西栅内" },
            { name: "乌镇外连锁酒店", level: "经济", price: "200元/晚起", distance: "景区外" }
        ],
        plan: "【两日深度游】\nDay1：下午入住西栅→逛西栅老街→看夜景→木心美术馆\nDay2：早起逛无人的西栅→东栅游览→返程\n\n提示：住西栅内可看清晨无人的古镇，体验绝佳",
        tips: "1. 建议住西栅景区内，夜景和晨景是精华\n2. 西栅比东栅大且精致，优先逛西栅\n3. 节假日人多，错峰出行体验更好"
    },
    {
        id: "putuoshan",
        name: "普陀山风景区",
        province: "浙江",
        city: "舟山",
        address: "浙江省舟山市普陀区",
        level: "国家5A级旅游景区",
        lng: 122.3951,
        lat: 29.9896,
        tags: ["culture", "nature", "scenery", "quiet"],
        ticket: "旺季160元/人，淡季140元/人，香火券另付",
        openTime: "全天开放，寺庙06:00-18:00",
        duration: "2天",
        bestSeason: "春秋季，观音诞辰香火最盛",
        food: [
            { name: "普陀山素斋", desc: "寺院素斋", price: "人均30元", distance: "各寺斋堂" },
            { name: "舟山海鲜", desc: "新鲜海产", price: "人均120元", distance: "海鲜排档" },
            { name: "观音饼", desc: "普陀山特产糕点", price: "人均20元", distance: "景区商铺" }
        ],
        hotel: [
            { name: "普陀山祥生大酒店", level: "五星度假", price: "1000元/晚起", distance: "岛上" },
            { name: "普陀山农家民宿", level: "中端民宿", price: "300元/晚起", distance: "岛上各村" },
            { name: "朱家尖酒店", level: "经济", price: "200元/晚起", distance: "岛外，乘船往返" }
        ],
        plan: "【两日朝圣路线】\nDay1：朱家尖乘船进山→普济寺→百步沙→紫竹林→不肯去观音院→南海观音\nDay2：法雨寺→佛顶山（慧济寺）→千步沙→返程",
        tips: "1. 需从朱家尖蜈蚣峙码头乘船进山，船程约20分钟\n2. 岛上交通靠公交，各景点间有接驳车\n3. 寺庙内遵守规矩，不随意拍照"
    },

    // 安徽省
    {
        id: "huangshan",
        name: "黄山风景区",
        province: "安徽",
        city: "黄山",
        address: "安徽省黄山市黄山区",
        level: "国家5A级旅游景区、世界文化与自然双重遗产",
        lng: 118.1708,
        lat: 30.1338,
        tags: ["nature", "scenery", "outdoor", "adventure"],
        ticket: "旺季190元/人，淡季150元/人",
        openTime: "06:00-17:30",
        duration: "2天",
        bestSeason: "4-5月春花、9-11月秋景、冬季雪景",
        food: [
            { name: "黄山臭鳜鱼", desc: "徽菜招牌", price: "人均100元", distance: "汤口镇餐馆" },
            { name: "黄山毛豆腐", desc: "徽州特色小吃", price: "人均15元", distance: "屯溪老街" },
            { name: "黄山烧饼", desc: "酥脆可口", price: "人均10元", distance: "各处商铺" }
        ],
        hotel: [
            { name: "黄山山顶酒店", level: "山上住宿", price: "1200元/晚起", distance: "光明顶、白鹅岭等" },
            { name: "汤口镇度假酒店", level: "四星", price: "400元/晚起", distance: "山脚下汤口镇" },
            { name: "宏村民宿", level: "徽派民宿", price: "200元/晚起", distance: "宏村景区内" }
        ],
        plan: "【经典两日游】\nDay1：云谷寺索道上山→白鹅岭→始信峰→北海→光明顶→西海大峡谷→住山顶\nDay2：光明顶看日出→鳌鱼峰→迎客松→玉屏索道下山\n下午可前往宏村游览",
        tips: "1. 山顶住宿贵且紧张，提前预订，想看日出必须住山上\n2. 西海大峡谷是精华，建议走一环二环，体力差可坐地轨\n3. 山上物价高，可自带水和干粮"
    },
    {
        id: "hongcun",
        name: "宏村",
        province: "安徽",
        city: "黄山",
        address: "安徽省黄山市黟县宏村镇",
        level: "国家5A级旅游景区、世界文化遗产",
        lng: 117.9893,
        lat: 30.1104,
        tags: ["culture", "history", "scenery", "quiet"],
        ticket: "94元/人（3天有效）",
        openTime: "07:30-17:30",
        duration: "1天",
        bestSeason: "春秋季，清晨薄雾最美",
        food: [
            { name: "臭鳜鱼、毛豆腐", desc: "徽菜经典", price: "人均80元", distance: "村内餐馆" },
            { name: "黄山烧饼", desc: "便携小吃", price: "人均10元", distance: "村内商铺" },
            { name: "腊八豆腐", desc: "黟县特色", price: "人均15元", distance: "村内" }
        ],
        hotel: [
            { name: "宏村塔川书院", level: "高端民宿", price: "800元/晚起", distance: "宏村周边" },
            { name: "宏村内徽派民宿", level: "特色民宿", price: "250元/晚起", distance: "村内" },
            { name: "黟县县城酒店", level: "经济", price: "150元/晚起", distance: "距景区约10km" }
        ],
        plan: "【游览路线】\n南湖→南湖书院→月沼→承志堂→树人堂→村口古树\n清晨薄雾中的月沼和南湖最美，建议早起\n傍晚可去塔川看秋色（秋季）",
        tips: "1. 建议住村内民宿，清晨无人时拍照最佳\n2. 可请讲解员了解徽派建筑与徽州文化\n3. 秋季可搭配塔川红叶，景色绝美"
    },

    // 福建省
    {
        id: "gulangyu",
        name: "鼓浪屿",
        province: "福建",
        city: "厦门",
        address: "福建省厦门市思明区鼓浪屿",
        level: "国家5A级旅游景区、世界文化遗产",
        lng: 118.0665,
        lat: 24.4467,
        tags: ["scenery", "culture", "slow", "romance"],
        ticket: "免费，船票35元/人往返，核心景点联票90元",
        openTime: "全天开放",
        duration: "1天",
        bestSeason: "春秋季，夏季炎热",
        food: [
            { name: "沙茶面、海蛎煎", desc: "闽南特色小吃", price: "人均20元", distance: "岛上各处" },
            { name: "张三疯奶茶", desc: "网红文创奶茶", price: "人均30元", distance: "龙头路" },
            { name: "厦门海鲜", desc: "新鲜海产", price: "人均100元", distance: "岛上餐馆" }
        ],
        hotel: [
            { name: "鼓浪屿老别墅酒店", level: "高端民宿", price: "800元/晚起", distance: "岛上老别墅" },
            { name: "鼓浪屿特色民宿", level: "中端民宿", price: "300元/晚起", distance: "岛上各处" },
            { name: "厦门本岛酒店", level: "经济", price: "200元/晚起", distance: "轮渡周边" }
        ],
        plan: "【一日游路线】\n上午：轮渡上岛→日光岩→菽庄花园→钢琴博物馆\n中午：龙头路逛吃\n下午：皓月园→最美转角→万国建筑漫步\n傍晚：轮渡返回，逛中山路",
        tips: "1. 船票提前在「厦门轮渡」公众号购买，节假日紧张\n2. 岛上无机动车，全程步行，穿舒适鞋子\n3. 网红打卡点人多，建议早上去人少"
    },
    {
        id: "wuyishan",
        name: "武夷山风景区",
        province: "福建",
        city: "南平",
        address: "福建省南平市武夷山市",
        level: "国家5A级旅游景区、世界文化与自然双重遗产",
        lng: 117.9812,
        lat: 27.6789,
        tags: ["nature", "scenery", "culture", "outdoor"],
        ticket: "三日联票140元/人，九曲溪漂流130元",
        openTime: "07:00-17:00",
        duration: "2天",
        bestSeason: "4-10月",
        food: [
            { name: "武夷熏鹅", desc: "闽北特色", price: "人均50元", distance: "三姑度假区" },
            { name: "武夷山岩茶", desc: "大红袍品茶", price: "人均60元", distance: "茶舍" },
            { name: "笋宴、野菜", desc: "山珍野味", price: "人均70元", distance: "当地餐馆" }
        ],
        hotel: [
            { name: "武夷山悦华酒店", level: "五星度假", price: "800元/晚起", distance: "三姑度假区" },
            { name: "武夷山茶主题民宿", level: "特色民宿", price: "300元/晚起", distance: "度假区内" },
            { name: "武夷山市区酒店", level: "经济", price: "180元/晚起", distance: "市区" }
        ],
        plan: "【经典两日游】\nDay1：天游峰→九曲溪竹筏漂流→武夷宫→晚上看《印象大红袍》\nDay2：虎啸岩→一线天→大红袍景区→水帘洞\n\n提示：九曲溪漂流是精华，必体验",
        tips: "1. 九曲溪竹筏票紧张，提前预订，给艄公小费会讲解\n2. 《印象大红袍》演出震撼，建议观看\n3. 山区多蚊虫，带好防蚊用品"
    },

    // 江西省
    {
        id: "lushan",
        name: "庐山风景区",
        province: "江西",
        city: "九江",
        address: "江西省九江市庐山市",
        level: "国家5A级旅游景区、世界文化遗产",
        lng: 115.9087,
        lat: 29.5823,
        tags: ["nature", "scenery", "culture", "outdoor"],
        ticket: "旺季160元/人，淡季130元/人，观光车90元",
        openTime: "全天开放",
        duration: "2天",
        bestSeason: "夏季避暑，冬季雪景",
        food: [
            { name: "庐山石鸡、石耳", desc: "庐山三石", price: "人均100元", distance: "牯岭镇餐馆" },
            { name: "庐山云雾茶", desc: "中国名茶", price: "人均40元", distance: "茶舍" },
            { name: "九江炒粉", desc: "江西米粉", price: "人均15元", distance: "镇上小店" }
        ],
        hotel: [
            { name: "庐山美庐山庄", level: "历史别墅酒店", price: "800元/晚起", distance: "牯岭镇内" },
            { name: "牯岭镇酒店民宿", level: "中端", price: "300元/晚起", distance: "牯岭镇各处" },
            { name: "九江市区酒店", level: "经济", price: "180元/晚起", distance: "山脚下" }
        ],
        plan: "【两日游路线】\nDay1：牯岭镇→如琴湖→花径→仙人洞→大天池→龙首崖→牯岭镇夜景\nDay2：含鄱口看日出→五老峰→三叠泉→返程\n\n提示：三叠泉需徒步上下，体力消耗大",
        tips: "1. 山上有牯岭镇，吃住方便，夏季是避暑胜地\n2. 景区观光车7天有效，各景点都能到\n3. 庐山多云雾，天气多变，带雨具"
    },
    {
        id: "wuyuan",
        name: "婺源风景区",
        province: "江西",
        city: "上饶",
        address: "江西省上饶市婺源县",
        level: "国家5A级旅游景区",
        lng: 117.8567,
        lat: 29.2511,
        tags: ["scenery", "culture", "quiet", "slow"],
        ticket: "通票210元/人（5天有效）",
        openTime: "07:30-17:30",
        duration: "2天",
        bestSeason: "3-4月油菜花，11-12月晒秋红叶",
        food: [
            { name: "婺源粉蒸肉", desc: "徽赣融合菜", price: "人均50元", distance: "县城餐馆" },
            { name: "清明粿、汽糕", desc: "本地小吃", price: "人均10元", distance: "各村镇" },
            { name: "荷包红鲤鱼", desc: "婺源特产", price: "人均60元", distance: "农家菜" }
        ],
        hotel: [
            { name: "婺源篁岭晒秋美宿", level: "高端民宿", price: "700元/晚起", distance: "篁岭景区内" },
            { name: "婺源古村民宿", level: "徽派民宿", price: "250元/晚起", distance: "各古村内" },
            { name: "婺源县城酒店", level: "经济", price: "180元/晚起", distance: "县城" }
        ],
        plan: "【两日精华游】\nDay1：篁岭（晒秋、梯田花海）→李坑\nDay2：江岭（油菜花）→晓起→江湾\n\n提示：春季江岭油菜花、秋季篁岭晒秋是两大王牌",
        tips: "1. 景点分散，建议自驾或包车游玩\n2. 篁岭单独收费，景色最精华，优先前往\n3. 旺季住宿紧张，提前预订"
    },

    // 山东省
    {
        id: "taishan",
        name: "泰山风景区",
        province: "山东",
        city: "泰安",
        address: "山东省泰安市泰山区",
        level: "国家5A级旅游景区、世界自然与文化双重遗产",
        lng: 117.1042,
        lat: 36.2562,
        tags: ["nature", "history", "culture", "outdoor"],
        ticket: "旺季115元/人，淡季100元/人",
        openTime: "全天开放",
        duration: "1-2天",
        bestSeason: "春秋季，日出最佳",
        food: [
            { name: "泰山煎饼", desc: "山东特色主食", price: "人均10元", distance: "登山沿途" },
            { name: "泰山三美", desc: "白菜、豆腐、水", price: "人均40元", distance: "山顶餐馆" },
            { name: "鲁菜正餐", desc: "糖醋鲤鱼等", price: "人均80元", distance: "泰安市内" }
        ],
        hotel: [
            { name: "泰山顶酒店", level: "山顶住宿", price: "800元/晚起", distance: "南天门附近" },
            { name: "泰山脚下度假酒店", level: "四星", price: "400元/晚起", distance: "红门附近" },
            { name: "泰安市区酒店", level: "经济", price: "180元/晚起", distance: "市区" }
        ],
        plan: "【夜爬看日出路线】\n22:00 红门出发→中天门→十八盘→南天门→玉皇顶\n05:00 看日出→山顶游览→乘索道下山\n\n【休闲路线】\n天外村乘观光车到中天门→索道到南天门→山顶游览→步行下山",
        tips: "1. 夜爬带手电筒、厚外套，山顶温度低很多\n2. 十八盘最陡，注意安全，量力而行\n3. 下山伤膝盖，建议坐索道"
    },
    {
        id: "qufu-sankong",
        name: "曲阜三孔景区",
        province: "山东",
        city: "济宁",
        address: "山东省济宁市曲阜市",
        level: "国家5A级旅游景区、世界文化遗产",
        lng: 116.9876,
        lat: 35.5923,
        tags: ["history", "culture", "quiet", "slow"],
        ticket: "三孔联票140元/人",
        openTime: "08:00-17:30",
        duration: "1天",
        bestSeason: "四季皆宜",
        food: [
            { name: "孔府宴", desc: "官府菜代表", price: "人均200元", distance: "曲阜市区" },
            { name: "煎饼卷大葱", desc: "山东家常味", price: "人均15元", distance: "街边小店" },
            { name: "孔府糕点", desc: "传统糕点", price: "人均20元", distance: "景区周边" }
        ],
        hotel: [
            { name: "曲阜香格里拉大酒店", level: "五星", price: "700元/晚起", distance: "市区" },
            { name: "曲阜古城民宿", level: "古风民宿", price: "250元/晚起", distance: "古城内" },
            { name: "曲阜市区快捷酒店", level: "经济", price: "150元/晚起", distance: "市区" }
        ],
        plan: "【一日游路线】\n上午：孔庙（祭祀孔子）→孔府（衍圣公府）\n中午：市区吃孔府菜\n下午：孔林（孔子及后裔墓地）\n可观看《金声玉振》演出",
        tips: "1. 建议请讲解员，深入了解儒家文化\n2. 三孔距离不远，可步行或乘观光车\n3. 孔林面积大，可乘电瓶车游览"
    },

    // 河南省
    {
        id: "longmen-shiku",
        name: "龙门石窟",
        province: "河南",
        city: "洛阳",
        address: "河南省洛阳市洛龙区龙门镇",
        level: "国家5A级旅游景区、世界文化遗产",
        lng: 112.4723,
        lat: 34.5617,
        tags: ["history", "culture", "scenery", "quiet"],
        ticket: "90元/人",
        openTime: "08:00-18:30",
        duration: "3-4小时",
        bestSeason: "春秋季",
        food: [
            { name: "洛阳水席", desc: "豫菜名宴", price: "人均80元", distance: "市区老字号" },
            { name: "洛阳牛肉汤", desc: "本地早餐标配", price: "人均15元", distance: "街头汤馆" },
            { name: "牡丹燕菜", desc: "水席头牌", price: "人均50元", distance: "市区餐馆" }
        ],
        hotel: [
            { name: "洛阳钼都利豪国际饭店", level: "五星", price: "600元/晚起", distance: "市区" },
            { name: "洛邑古城周边酒店", level: "中端", price: "280元/晚起", distance: "老城区" },
            { name: "洛阳快捷酒店", level: "经济", price: "150元/晚起", distance: "市区各处" }
        ],
        plan: "【游览路线】\n西山石窟（精华，卢舍那大佛）→东山石窟→香山寺→白园\n建议下午游览，夕阳照在卢舍那大佛上最美\n可搭配白马寺、洛邑古城一日游",
        tips: "1. 西山石窟是精华，重点游览\n2. 建议请讲解了解石窟历史与佛像艺术\n3. 4月洛阳牡丹节，景色最佳"
    },
    {
        id: "shaolinsi",
        name: "嵩山少林寺",
        province: "河南",
        city: "郑州",
        address: "河南省郑州市登封市嵩山",
        level: "国家5A级旅游景区、世界文化遗产",
        lng: 112.9457,
        lat: 34.5112,
        tags: ["culture", "history", "outdoor", "scenery"],
        ticket: "80元/人",
        openTime: "07:30-18:00",
        duration: "1天",
        bestSeason: "春秋季",
        food: [
            { name: "少林寺素斋", desc: "寺院素餐", price: "人均50元", distance: "寺内" },
            { name: "河南烩面", desc: "河南招牌面食", price: "人均20元", distance: "登封市区" },
            { name: "嵩山野菜", desc: "山珍野味", price: "人均40元", distance: "景区周边" }
        ],
        hotel: [
            { name: "嵩山少林武术馆酒店", level: "四星", price: "400元/晚起", distance: "景区周边" },
            { name: "登封市区酒店", level: "中端", price: "200元/晚起", distance: "登封市区" },
            { name: "郑州城区酒店", level: "经济", price: "180元/晚起", distance: "距景区约80km" }
        ],
        plan: "【一日游路线】\n上午：少林寺常住院→塔林→武术表演\n中午：寺内素斋\n下午：三皇寨（乘索道，嵩山自然景观）\n傍晚返程",
        tips: "1. 武术表演有固定场次，提前看好时间\n2. 三皇寨悬空栈道景色震撼，建议前往\n3. 郑州自驾约1.5小时，也可乘大巴"
    },
    {
        id: "laojunshan",
        name: "老君山风景区",
        province: "河南",
        city: "洛阳",
        address: "河南省洛阳市栾川县",
        level: "国家5A级旅游景区",
        lng: 111.6234,
        lat: 33.7489,
        tags: ["nature", "scenery", "culture", "outdoor"],
        ticket: "100元/人，中灵索道130元往返",
        openTime: "08:00-18:00",
        duration: "1天",
        bestSeason: "冬季雪景、秋季云海",
        food: [
            { name: "栾川豆腐", desc: "本地特色", price: "人均20元", distance: "山下餐馆" },
            { name: "老君山泡面", desc: "山顶网红泡面", price: "15元/桶", distance: "山顶服务区" },
            { name: "洛阳水席", desc: "正餐", price: "人均70元", distance: "栾川县城" }
        ],
        hotel: [
            { name: "老君山山顶客栈", level: "山顶住宿", price: "500元/晚起", distance: "山顶" },
            { name: "栾川县城酒店", level: "中端", price: "250元/晚起", distance: "县城" },
            { name: "山下民宿", level: "经济", price: "150元/晚起", distance: "景区门口" }
        ],
        plan: "【一日游路线】\n08:00 景区入口→中灵索道上山→中天门→峰林索道→十里画屏→金顶道观群\n12:00 山顶用餐\n13:30 追梦谷→返程\n冬季雪景绝美，是网红打卡地",
        tips: "1. 山顶温度低，带厚外套，风大\n2. 金顶道观群拍照出片，云海天气最佳\n3. 建议坐第一段索道，节省体力"
    },

    // 湖北省
    {
        id: "huanghelou",
        name: "黄鹤楼",
        province: "湖北",
        city: "武汉",
        address: "湖北省武汉市武昌区蛇山西坡特1号",
        level: "国家5A级旅游景区",
        lng: 114.3073,
        lat: 30.5466,
        tags: ["history", "culture", "scenery", "lively"],
        ticket: "70元/人",
        openTime: "08:30-17:30",
        duration: "2小时",
        bestSeason: "四季皆宜",
        food: 

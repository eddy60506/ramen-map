// 台北拉麵店家資料
// 注意：座標 (lat/lng) 為近似值，實際使用時建議用 Google Maps 確認後修正。
// Google Maps 連結會優先使用 plusCode，其次用「店名 + 地址」搜尋，所以導航不受 lat/lng 影響。
//
// 欄位說明：
//   name      店名
//   rank      評級 T0~T6 / TBD（尚未評價）
//   area      行政區（不需「區」字）
//   address   完整地址
//   soup      湯頭
//   price     價格
//   lat, lng  經緯度（用於地圖標記位置）
//   plusCode  Google Plus Code（可省略，留空字串即可）

const ramenData = [
    {
        "name": "金色不如歸 拉麵",
        "rank": "TBD",
        "area": "信義",
        "address": "台北市信義區忠孝東路四段553巷22號",
        "soup": "鹽味",
        "price": "380 - 520 新台幣",
        "lat": 25.04199,
        "lng": 121.56243,
        "plusCode": "2HQF+CJ 西村里 臺北市信義區"
    },
    {
        "name": "AFURI 阿夫利 微風南山店",
        "rank": "TBD",
        "area": "信義",
        "address": "台北市信義區松智路17號 5F (微風南山)",
        "soup": "柚子鹽 / 醬油",
        "price": "320 - 450 新台幣",
        "lat": 25.03565,
        "lng": 121.56759,
        "plusCode": ""
    },
    {
        "name": "麵屋武藏 武骨相傳",
        "rank": "TBD",
        "area": "信義",
        "address": "台北市信義區松壽路11號 B2 (新光三越A11)",
        "soup": "豚骨 / 沾麵",
        "price": "280 - 420 新台幣",
        "lat": 25.03567,
        "lng": 121.56781,
        "plusCode": ""
    },
    {
        "name": "山頭火拉麵 微風南山店",
        "rank": "TBD",
        "area": "信義",
        "address": "台北市信義區松智路17號 5F (微風南山)",
        "soup": "鹽味豚骨",
        "price": "260 - 380 新台幣",
        "lat": 25.03565,
        "lng": 121.56759,
        "plusCode": ""
    },
    {
        "name": "花月嵐拉麵 統一時代店",
        "rank": "TBD",
        "area": "信義",
        "address": "台北市信義區忠孝東路五段8號 B2 (統一時代)",
        "soup": "豚骨",
        "price": "230 - 320 新台幣",
        "lat": 25.04101,
        "lng": 121.56524,
        "plusCode": ""
    },
    {
        "name": "三田製麵所 ATT 4 FUN店",
        "rank": "TBD",
        "area": "信義",
        "address": "台北市信義區松壽路12號 5F (ATT 4 FUN)",
        "soup": "沾麵",
        "price": "260 - 380 新台幣",
        "lat": 25.03629,
        "lng": 121.56828,
        "plusCode": ""
    },
    {
        "name": "麵屋三士",
        "rank": "TBD",
        "area": "信義",
        "address": "台北市信義區光復南路419號",
        "soup": "沾麵 / 豚骨",
        "price": "260 - 360 新台幣",
        "lat": 25.0405,
        "lng": 121.55726,
        "plusCode": ""
    },
    {
        "name": "凪 Nagi 拉麵 微風南山店",
        "rank": "TBD",
        "area": "信義",
        "address": "台北市信義區松智路17號 5F (微風南山)",
        "soup": "豚王 / 煮干",
        "price": "320 - 450 新台幣",
        "lat": 25.03565,
        "lng": 121.56759,
        "plusCode": ""
    },
    {
        "name": "咲拉麵",
        "rank": "TBD",
        "area": "大安",
        "address": "台北市大安區安和路一段49巷10號",
        "soup": "雞白湯",
        "price": "260 - 380 新台幣",
        "lat": 25.0427,
        "lng": 121.55189,
        "plusCode": ""
    },
    {
        "name": "麵屋雞金",
        "rank": "TBD",
        "area": "大安",
        "address": "台北市大安區大安路一段51巷33-1號",
        "soup": "雞白湯",
        "price": "260 - 380 新台幣",
        "lat": 25.0445,
        "lng": 121.53401,
        "plusCode": ""
    },
    {
        "name": "暖暖鷲拉麵",
        "rank": "TBD",
        "area": "大安",
        "address": "台北市大安區延吉街70號",
        "soup": "豚骨 / 鹽味",
        "price": "260 - 360 新台幣",
        "lat": 25.0427,
        "lng": 121.556,
        "plusCode": ""
    },
    {
        "name": "拉麵公子 條通本店",
        "rank": "TBD",
        "area": "中山",
        "address": "台北市中山區中山北路二段60巷9號",
        "soup": "豚骨",
        "price": "260 - 380 新台幣",
        "lat": 25.05731,
        "lng": 121.52242,
        "plusCode": ""
    },
    {
        "name": "麵屋一燈 台北本店",
        "rank": "TBD",
        "area": "中山",
        "address": "台北市中山區建國北路二段66號",
        "soup": "雞白湯魚介",
        "price": "320 - 450 新台幣",
        "lat": 25.05661,
        "lng": 121.53803,
        "plusCode": ""
    },
    {
        "name": "鷹流東京醬油拉麵 黑帶",
        "rank": "TBD",
        "area": "中山",
        "address": "台北市中山區中山北路二段26巷9號",
        "soup": "醬油",
        "price": "260 - 380 新台幣",
        "lat": 25.05399,
        "lng": 121.52303,
        "plusCode": ""
    },
    {
        "name": "麵屋輝",
        "rank": "TBD",
        "area": "中山",
        "address": "台北市中山區興安街179號",
        "soup": "豚骨魚介",
        "price": "280 - 380 新台幣",
        "lat": 25.05772,
        "lng": 121.54134,
        "plusCode": ""
    },
    {
        "name": "一蘭拉麵 台北本店",
        "rank": "TBD",
        "area": "中山",
        "address": "台北市中山區中山北路一段105巷9號",
        "soup": "豚骨",
        "price": "320 - 450 新台幣",
        "lat": 25.05295,
        "lng": 121.5226,
        "plusCode": ""
    },
    {
        "name": "屯京拉麵 民生本店",
        "rank": "TBD",
        "area": "松山",
        "address": "台北市松山區民生東路四段97巷6弄17號",
        "soup": "豚骨魚介",
        "price": "280 - 400 新台幣",
        "lat": 25.05779,
        "lng": 121.55003,
        "plusCode": ""
    },
    {
        "name": "鳥人拉麵 松江南京店",
        "rank": "TBD",
        "area": "中山",
        "address": "台北市中山區松江路131-1號",
        "soup": "雞白湯",
        "price": "260 - 380 新台幣",
        "lat": 25.05176,
        "lng": 121.5331,
        "plusCode": ""
    }
];

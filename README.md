# 台北拉麵地圖 🍜

台北市拉麵店家排名地圖，依好吃程度分級（T0 ~ T6），支援行政區篩選與 Google Maps 導航。

線上版：<https://eddy60506.github.io/ramen-map/>

## 評級

| 等級 | 說明 | 參考連鎖店 |
|------|------|-----------|
| T0 | 神級必吃 | 麵屋一燈 |
| T1 | 相當好吃 | 一蘭 |
| T2 | 普通好吃 | 山頭火 |
| T3 | 尚可一試 | 屯京拉麵 |
| T4 | 將就果腹 | 花月嵐 |
| T5 | 難以吞嚥 | 樂麵屋 |
| T6 | 再也不去 | 味千 |

## 技術

純前端，零依賴：

- HTML / CSS / Vanilla JS
- [Leaflet](https://leafletjs.com/) 地圖
- [CARTO](https://carto.com/) 暗色底圖
- GitHub Pages 託管

## 新增店家

編輯 `data.js`，在 `ramenData` 陣列中加入：

```js
{
    "name": "店名",
    "rank": "T0",
    "area": "信義",
    "address": "台北市信義區松壽路 12 號",
    "soup": "豚骨",
    "price": "300 - 400 新台幣",
    "lat": 25.03680,
    "lng": 121.56680,
    "plusCode": "2HM8+XX 西村里 臺北市信義區"
}
```

## 致謝

UI 與架構基於 [hsieh-george/taipei-burger-map](https://github.com/hsieh-george/taipei-burger-map)。

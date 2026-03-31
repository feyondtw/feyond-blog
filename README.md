# 飛揚細籽 FEYOND

根本芳療 Dhyana Aromatherapy 的25年芳療文章匯集，由 Feyond 老師主筆。

## 網站結構

```
feyond-blog/
├── index.html              # 首頁（文章列表）
├── css/
│   └── style.css           # 共用樣式 + 色彩系統
├── articles/
│   ├── blue-spruce.html    # 藍雲杉（D 靛藍）
│   ├── helichrysum.html    # 永久花（F 琥珀）
│   ├── desert-spirit.html  # 漠地（J 蒼白）
│   └── rosewood.html       # 花梨木（C 森綠）
└── images/                 # 圖片資料夾（可選）
```

## 色彩系統

使用 `data-theme` 屬性切換文章主題色：

| 代號 | 名稱 | CSS 值 | 適用 |
|------|------|--------|------|
| A | 暖駝 | `taupe` | 檀香、沉香 |
| B | 赭陶 | `terracotta` | 薑、肉桂 |
| C | 森綠 | `forest` | 雨林、花梨木 |
| D | 靛藍 | `indigo` | 藍雲杉、杜松 |
| E | 紫藤 | `wisteria` | 薰衣草 |
| F | 琥珀 | `amber` | 永久花 |
| G | 玫瑰 | `rose` | 奧圖玫瑰 |
| H | 青瓷 | `celadon` | 白茶、茉莉 |
| J | 蒼白 | `bone` | 艾草、漠地 |
| K | 鼠尾 | `sage` | 鼠尾草 |

### 使用方式

在 `<body>` 標籤加上 `data-theme` 屬性：

```html
<body data-theme="indigo">  <!-- 藍雲杉用靛藍 -->
<body data-theme="amber">   <!-- 永久花用琥珀 -->
<body data-theme="bone">    <!-- 漠地用蒼白 -->
```

## 三大主題

- **心覺**｜心靈在香氣中的覺醒
- **身覺**｜身體在不同階段隨著身份的改變
- **香旅**｜在全球尋香的旅程所見所知所想

## 部署到 GitHub Pages

1. 建立 GitHub Repository
2. 上傳所有檔案
3. Settings → Pages → Source: main branch
4. 網址：`https://[username].github.io/feyond-blog/`

## 新增文章

1. 複製 `articles/` 裡的任一 HTML 檔案
2. 修改 `data-theme` 為合適的色系
3. 替換內容
4. 在 `index.html` 新增文章卡片

## 授權

© 2024 Feyond. All rights reserved.

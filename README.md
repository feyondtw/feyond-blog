
All projects
Feyon - Blog 飛揚細籽部落格
# FEYOND 部落格專案 ## 品牌背景 FEYOND（飛揚細籽）是根本芳療創辦人的個人芳療部落格，網址 feyond.muzen.store。採用 Aesop Library 風格設計——奶油色背景、文字為主、雙欄結構。 ## 部落格架構 - 四大分類：植物學 / 香氣哲思 / 產地旅行 / 調香手記 - 定案模板：feyond-article-twocol.html - 每篇文章以該主題植物作為 Hero 背景 ## 技術規範 - 部署：GitHub Pages（feyondtw/feyond-blog）→ feyond.muzen.store - 平面 HTML 結構（根目錄，不用子資料夾） - 圖片來源：直接使用 CYBERBIZ CDN（cdn-next.cybassets.com） - 照片後製參數：飽和度 -25、對比 -10 ## 色彩基因 13 種主題色透過 data-theme 切換，參見 feyondblog_色彩基因.jpg ## 字體系統 - 中文標題：FangSong / 仿宋 - 英文裝飾標題：Cormorant Garamond - 內文：Barlow 300/400/500、Noto Serif TC - 拉丁學名：Times New Roman italic ## 工作模式 - 新文章：提供原始素材 → Claude 套用 twocol 模板產出 HTML - 修改：指定具體元素與文字，精準修正不動其他部分 - 視覺確認後再產出完整檔案
Show more


How can I help you today?

Feyond 部落格 待辦清單接續
Last message 2 minutes ago
部落格首頁改版規劃
Last message 5 hours ago
芳療部落格改版設計方向
Last message 22 hours ago
Feyond-blog 首頁改版計畫
Last message 22 hours ago
FEYOND部落格改版與知識付費功能
Last message 22 hours ago
部落格改版優化計畫
Last message 22 hours ago
Memory
Only you
Project memory will show here after a few chats.
Instructions
Add instructions to tailor Claude’s responses
Files
10% of project capacity used
Indexing

index
911 lines
TEXT



about
774 lines
TEXT



Feyond 個人簡歷
84 lines
TEXT



Feyond-Blog-SPEC規範說明
556 lines
TEXT



新舊文範例格式
14 lines
TEXT



新舊文提供規範
17 lines
TEXT



部落格樣版II
601 lines
TEXT



部落格樣版1
938 lines
TEXT



部落格內頁_-_玫瑰範本
292 lines
TEXT



feyond-paywall-cta.html
383 lines
HTML



feyond-article-twocol.html
391 lines
HTML



feyond-article-template.html
730 lines
HTML


feyondblog_色彩基因.jpg


blog_特別色彩基因.jpg


Feyond-Blog-SPEC規範說明
26.16 KB •556 lines
•
Formatting may be inconsistent from source

# FEYOND 部落格 V2 完整規範
**飛揚細籽 · 知識付費部落格系統**

*版本：2.0 | 更新日期：2026-04-01*

---

## 目錄

1. [系統定位與架構](#1-系統定位與架構)
2. [三平台分工與用戶旅程](#2-三平台分工與用戶旅程)
3. [會員付費機制](#3-會員付費機制)
4. [首頁設計規範](#4-首頁設計規範)
5. [四大分類與配色系統](#5-四大分類與配色系統)
6. [文章頁規範](#6-文章頁規範)
7. [色彩基因總表](#7-色彩基因總表)
8. [字體系統](#8-字體系統)
9. [檔案結構與部署](#9-檔案結構與部署)
10. [操作流程](#10-操作流程)

---

## 1. 系統定位與架構

### 核心理念

**不建立獨立付費系統**，讓現有平台各司其職，形成完整的內容漏斗：
- CYBERBIZ 負責金流、會員、SEO
- Feyond-blog 負責品牌質感與深度內容
- 兩者互補，無需第三方付費系統

### 網址對照

| 用途 | 網址 |
|------|------|
| **新精美部落格** | https://feyond.muzen.store |
| **GitHub Repo** | https://github.com/feyondtw/feyond-blog |
| **CYB 主站** | https://dhyana.store |
| **CYB 舊部落格** | https://www.dhyana.store/zh-TW/blogs/feyond |

---

## 2. 三平台分工與用戶旅程

### 平台職責

| 平台 | 負責內容 | 備註 |
|------|---------|------|
| **CYBERBIZ 部落格** | 免費摘要/綱要、SEO 累積 | 保留舊文章，維持搜尋排名 |
| **Feyond-blog** | 完整全文、品牌質感、付費牆 | GitHub Pages 靜態站 |
| **CYBERBIZ 產品頁** | 精油購買、會員資格商品、金流 | 訂單與會員管理 |

### 完整用戶流程圖

```
┌─────────────────────────────────────────────────────────────────┐
│                      用戶旅程 User Journey                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│   Google 搜尋                                                     │
│        ↓                                                          │
│   CYBERBIZ 部落格（免費摘要，保留 SEO）                            │
│        ↓                                                          │
│   「閱讀全文」按鈕                                                 │
│        ↓                                                          │
│   Feyond-blog 精美部落格                                          │
│        ↓                                                          │
│   ┌─────────────┬─────────────┐                                  │
│   │   已是會員   │    非會員    │                                  │
│   └─────────────┴─────────────┘                                  │
│        ↓                ↓                                         │
│   直接閱讀全文      顯示付費牆 CTA                                 │
│        │                ↓                                         │
│        │         訂閱引導 → CYBERBIZ 購買會員資格                  │
│        │                ↓                                         │
│        │         取得專屬密碼                                      │
│        │                ↓                                         │
│        │         輸入密碼進入                                      │
│        ↓                ↓                                         │
│   ┌─────────────────────────────┐                                │
│   │    閱讀完整深度內容          │                                │
│   │         ↓                   │                                │
│   │    文章內精油產品連結        │                                │
│   │         ↓                   │                                │
│   │    CYBERBIZ 產品頁購買       │                                │
│   └─────────────────────────────┘                                │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘
```

### 新舊內容策略

| 內容類型 | 存放位置 | 說明 |
|---------|---------|------|
| **舊文章** | CYB 部落格原址 | 保留 SEO，加「閱讀全文」按鈕導向新站 |
| **新文章完整版** | Feyond-blog | 全新精美排版，付費牆保護 |
| **未來所有新文** | 僅在 Feyond-blog | CYB 只放摘要/綱要 |

---

## 3. 會員付費機制

### 運作原理（無需後端）

```
┌────────────────────────────────────────────────────┐
│  訪客進入文章頁面                                    │
├────────────────────────────────────────────────────┤
│                                                      │
│  檢查 localStorage.getItem('feyondMember')          │
│                                                      │
│        ↓ true              ↓ false/null             │
│                                                      │
│   顯示完整文章           檢查 URL 參數               │
│                                                      │
│                    ↓ ?paywall=true    ↓ 無參數      │
│                                                      │
│                   顯示付費牆         顯示完整文章    │
│                   （Premium 文章）   （免費文章）    │
│                                                      │
└────────────────────────────────────────────────────┘
```

### 技術實作

```javascript
// 驗證成功後存入
localStorage.setItem('feyondMember', 'true');

// 檢查會員狀態
const isMember = localStorage.getItem('feyondMember') === 'true';

// 密碼設定（在文章 HTML 底部）
const correctPassword = 'FEYOND2024'; // 由 CYBERBIZ 發送給會員
```

### 付費牆 CTA 元件

**檔案參照**：`feyond-paywall-cta.html`

**關鍵功能**：
- 模糊預覽區（blur 效果暗示付費內容）
- 會員權益說明
- 「立即訂閱」按鈕 → 連至 CYBERBIZ
- 「已是會員？輸入專屬密碼」→ 密碼驗證

---

## 4. 首頁設計規範

### 設計風格：Aesop Library

**特徵**：
- 奶油色背景 `#FFFEF8`
- 文字為主，留白充足
- 雙欄結構（左側導覽/分類，右側文章列表）
- 極簡 Hero（純文字，無圖）
- 照片處理：**飽和度 -25、對比 -10**

### 首頁結構

```
┌─────────────────────────────────────────────────────┐
│  NAV：FEYOND 品牌標誌                    會員入口    │
├─────────────────────────────────────────────────────┤
│                                                       │
│  HERO（純文字）                                       │
│  ───────────────                                      │
│  飛揚細籽                                             │
│  FEYOND                                               │
│  香氣是記憶的容器，文字是旅程的地圖                    │
│                                                       │
├─────────────────────────────────────────────────────┤
│                                                       │
│  ┌──────────┬────────────────────────────────┐      │
│  │          │                                  │      │
│  │  左側     │       文章列表                   │      │
│  │  ───      │       ─────────                  │      │
│  │  分類篩選  │                                  │      │
│  │           │  [植物學] 台灣紅檜               │      │
│  │  ○ 全部   │  千年巨木的沉靜之香...           │      │
│  │  ● 植物學 │                                  │      │
│  │  ○ 香氣哲思│  [香氣哲思] 沉香與時間           │      │
│  │  ○ 產地旅行│  在越南的雨林深處...            │      │
│  │  ○ 調香手記│                                  │      │
│  │           │  [產地旅行] 大馬士革玫瑰         │      │
│  │           │  清晨四點的採收...               │      │
│  │           │                                  │      │
│  └──────────┴────────────────────────────────┘      │
│                                                       │
├─────────────────────────────────────────────────────┤
│  FOOTER：© Dhyana Aromatherapy                       │
└─────────────────────────────────────────────────────┘
```

---

## 5. 四大分類與配色系統

### 主分類配色

| 分類 | 中文 | 主色 | 色碼 | 適用主題 |
|------|------|------|------|---------|
| `botany` | 植物學 | 深綠森林 | `#2D4A3E` | 植物學知識、品種解析、萃取方式 |
| `philosophy` | 香氣哲思 | 琥珀金調 | `#B8965A` | 心靈書寫、香氣與情緒、芳療哲學 |
| `journey` | 產地旅行 | 大地赭紅 | `#8B5A3C` | 產地紀行、農場探訪、全球尋香 |
| `blending` | 調香手記 | 靛藍深邃 | `#3D4A6B` | 配方設計、調香筆記、創作過程 |

### 分類在首頁的應用

```css
/* 分類標籤顏色 */
.category-botany { color: #2D4A3E; }
.category-philosophy { color: #B8965A; }
.category-journey { color: #8B5A3C; }
.category-blending { color: #3D4A6B; }

/* 分類 hover 強調 */
.article-card[data-category="botany"]:hover { border-left-color: #2D4A3E; }
.article-card[data-category="philosophy"]:hover { border-left-color: #B8965A; }
.article-card[data-category="journey"]:hover { border-left-color: #8B5A3C; }
.article-card[data-category="blending"]:hover { border-left-color: #3D4A6B; }
```

### 文章卡片 HTML 範例

```html
<a href="articles/hinoki.html?paywall=true" class="article-card" data-category="botany">
  <span class="article-card-category category-botany">植物學</span>
  <h2 class="article-card-title">台灣紅檜</h2>
  <p class="article-card-excerpt">千年巨木的沉靜之香，檜木醇的療癒秘密...</p>
  <div class="article-card-meta">
    <span>2026</span>
    <span class="article-card-read">Read →</span>
  </div>
</a>
```

---

## 6. 文章頁規範

### 定案模板

**檔案**：`feyond-article-twocol.html`

### 頁面結構

```
┌─────────────────────────────────────────────────────┐
│  NAV：← 返回                        飛揚細籽 FEYOND  │
├─────────────────────────────────────────────────────┤
│                                                       │
│  ARTICLE HEADER（置中）                              │
│  ─────────────────────                               │
│  [分類標籤] 產地旅行                                  │
│                                                       │
│  大馬士革玫瑰                                         │
│  Damascus Rose                                        │
│                                                       │
│  千年絲路上的芬芳記憶                                 │
│  2026 · FEYOND                                        │
│                                                       │
├─────────────────────────────────────────────────────┤
│                                                       │
│  HERO IMAGE（16:10 橫幅）                            │
│  ┌────────────────────────────────────────────┐     │
│  │                                              │     │
│  │              [主題照片]                       │     │
│  │                                              │     │
│  └────────────────────────────────────────────┘     │
│  圖說：土耳其伊斯帕爾塔，清晨採收的大馬士革玫瑰       │
│                                                       │
├─────────────────────────────────────────────────────┤
│                                                       │
│  INTRO SECTION（單欄，首字放大）                     │
│  ────────────────────────────                        │
│  凌晨四點，伊斯帕爾塔的玫瑰田還籠罩在薄霧中...       │
│                                                       │
├─────────────────────────────────────────────────────┤
│                                                       │
│  ══════════════════════════════════════              │
│  PAYWALL SECTION（非會員顯示）                       │
│  ══════════════════════════════════════              │
│                                                       │
│  [模糊預覽文字 + 漸層遮罩]                            │
│                                                       │
│  ┌─ 付費牆 CTA ────────────────────────────┐        │
│  │                                          │        │
│  │  FEYOND MEMBERSHIP                       │        │
│  │  解鎖完整文章                             │        │
│  │  Unlock the full story                   │        │
│  │                                          │        │
│  │  ✓ 全站文章完整閱讀                       │        │
│  │  ✓ 每月新文章更新                         │        │
│  │  ✓ 會員專屬優惠                           │        │
│  │                                          │        │
│  │  [立即訂閱]                               │        │
│  │                                          │        │
│  │  已是會員？輸入專屬密碼                    │        │
│  │  [密碼輸入框] [進入]                       │        │
│  │                                          │        │
│  └──────────────────────────────────────────┘        │
│                                                       │
├─────────────────────────────────────────────────────┤
│                                                       │
│  ══════════════════════════════════════              │
│  FULL CONTENT（會員顯示）                            │
│  ══════════════════════════════════════              │
│                                                       │
│  TWO-COLUMN LAYOUT（Aesop 風格）                     │
│                                                       │
│  ┌────────────┬──────────────────────────────┐      │
│  │            │                                │      │
│  │  左欄       │        右欄（主內文）          │      │
│  │  ─────     │        ───────────            │      │
│  │            │                                │      │
│  │  凌晨的採收  │  在產區待了一週，我學會了     │      │
│  │            │  用手指輕輕托住花苞底部...     │      │
│  │  （小標題）  │                                │      │
│  │  與時間賽跑  │  採下的玫瑰必須在幾小時內     │      │
│  │  的清晨...   │  送進蒸餾廠...                 │      │
│  │            │                                │      │
│  │  （sticky） │  ┌───────────────────┐       │      │
│  │            │  │ 引言 blockquote    │       │      │
│  │            │  │ 一公斤玫瑰精油     │       │      │
│  │            │  │ 需要三到五噸花瓣... │       │      │
│  │            │  └───────────────────┘       │      │
│  │            │                                │      │
│  └────────────┴──────────────────────────────┘      │
│  ─────────────────────────────────────────────      │
│  ┌────────────┬──────────────────────────────┐      │
│  │  蒸餾的藝術  │  傳統的銅製蒸餾器在土耳其     │      │
│  │            │  已經使用了數百年...           │      │
│  └────────────┴──────────────────────────────┘      │
│                                                       │
├─────────────────────────────────────────────────────┤
│  ARTICLE FOOTER                                      │
│  感謝閱讀                                             │
│  [返回文章列表]                                       │
├─────────────────────────────────────────────────────┤
│  SITE FOOTER（深色底）                               │
│  飛揚細籽 · FEYOND                                   │
│  © 2026 Dhyana Aromatherapy                          │
└─────────────────────────────────────────────────────┘
```

### 內文編排特色

| 元素 | 規格 |
|------|------|
| **首字放大** | `font-size: 4em; float: left;` |
| **雙欄佈局** | 左 280px sticky / 右 1fr |
| **引言區塊** | `border-left: 3px solid var(--gold);` 背景 `#F5F0E3` |
| **段落間距** | `line-height: 2.2; margin-bottom: 1.8em;` |

---

## 7. 色彩基因總表

### 基礎色彩變數

```css
:root {
  /* 背景系統 */
  --cream: #FFFEF8;      /* 主背景 */
  --sand: #EDE6D6;       /* 分隔線/次背景 */
  --parchment: #F5F0E3;  /* 引言背景 */
  
  /* 文字系統 */
  --ink: #252220;        /* 主要文字 */
  --ink-soft: #4A4540;   /* 次要文字 */
  --ink-muted: #7A756D;  /* 輔助文字 */
  --ink-faint: #A8A29A;  /* 淡色文字 */
  
  /* 強調色 */
  --gold: #B8965A;       /* 品牌金 */
  --gold-light: #D4B87A; /* 淺金 */
}
```

### 植物主題色系（A-H）

| 代號 | 名稱 | 調性 | 適合植物/主題 |
|------|------|------|--------------|
| A | 暖駝 Taupe | 沉穩內斂 | 檀香、沉香、琥珀 |
| B | 赭陶 Terracotta | 溫暖療癒 | 薑、肉桂、岩蘭草 |
| C | 森綠 Forest | 探索生命 | 雨林、雪松、花梨木 |
| D | 靛藍 Indigo | 深邃寧靜 | 藍雲杉、杜松、絲柏 |
| E | 紫藤 Wisteria | 神秘靈性 | 薰衣草、鼠尾草 |
| F | 琥珀 Amber | 溫暖明亮 | 永久花、金盞花 |
| G | 玫瑰 Rose | 柔美浪漫 | 奧圖玫瑰、天竺葵 |
| H | 青瓷 Celadon | 清新雅致 | 白茶、茉莉、綠茶 |

### 漠地特別色系（I-M）

| 代號 | 名稱 | 調性 | 適合主題 |
|------|------|------|---------|
| I | 漠岩 Desert | 乾燥、暖調、紅岩 | 亞利桑那峽谷 |
| J | 蒼白 Bone | 極簡、空無、純白 | 歐姬芙白骨畫作 |
| K | 鼠尾 Sage | 銀綠、草本、靈性 | 艾草、鼠尾草淨化 |
| L | 漠霧 Dust | 中性、蒼茫、灰調 | 遼闊荒野的空曠感 |
| M | 赭霞 Adobe | 泥磚、西南、暖橘 | 聖塔非建築風格 |

### 色系應用範例

```css
/* D 靛藍（藍雲杉文章）*/
[data-theme="indigo"] {
  --quote-bg: #E0E8F0;     /* 冷靜藍灰 */
  --quote-text: #1A3A5C;   /* 深邃靛藍 */
}

/* F 琥珀（永久花文章）*/
[data-theme="amber"] {
  --quote-bg: #F8F0D8;     /* 溫暖麥穗 */
  --quote-text: #5C4A18;   /* 琥珀深棕 */
}

/* J 蒼白（漠地系列）*/
[data-theme="bone"] {
  --quote-bg: #F5F4F0;     /* 近白 */
  --quote-text: #58524A;   /* 深灰褐 */
}
```

---

## 8. 字體系統

### 字體家族

| 用途 | 字體 | 備註 |
|------|------|------|
| **英文標題/裝飾** | Cormorant Garamond | 300/400/500, italic |
| **中文標題** | FangSong / 仿宋 / Noto Serif TC | 復古雅緻 |
| **中文內文** | Noto Serif TC | 300/400/500 |
| **輔助文字** | Noto Sans TC | 無襯線清晰 |
| **拉丁學名** | Times New Roman Italic | 標準植物命名格式 |
| **標籤/按鈕** | Barlow | 300/400/500 |

### CSS 字體堆疊

```css
:root {
  --font-display: 'Cormorant Garamond', 'Noto Serif TC', Georgia, serif;
  --font-body: 'Noto Serif TC', Georgia, serif;
  --font-sans: 'Noto Sans TC', sans-serif;
}
```

### Google Fonts 載入

```html
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Noto+Serif+TC:wght@300;400;500&family=Noto+Sans+TC:wght@300;400&display=swap" rel="stylesheet">
```

---

## 9. 檔案結構與部署

### 目錄結構

```
feyond-blog/
├── index.html              ← 首頁（Aesop Library 風格）
├── style.css               ← 共用樣式（若有分離）
├── articles/
│   ├── rose.html           ← 大馬士革玫瑰
│   ├── hinoki.html         ← 台灣紅檜
│   ├── helichrysum.html    ← 永久花
│   ├── blue-spruce.html    ← 藍雲杉
│   └── ...
├── README.md               ← 操作說明（即 read me 設定）
└── FEYOND-BLOG-V2-SPEC.md  ← 本規範文件
```

> ⚠️ **注意**：GitHub 上傳時會扁平化資料夾結構，若 `articles/` 資料夾沒有自動建立，將 HTML 檔放在根目錄即可。

### 圖片管理

- 圖片統一上傳至 **CYBERBIZ 後台**
- 複製 CDN 網址（格式：`https://cdn-next.cybassets.com/s/files/...`）
- 貼入 HTML 使用
- **不需要額外圖床**

### 照片處理標準

| 用途 | 建議尺寸 | 處理參數 |
|------|---------|---------|
| Hero 主圖 | 1600×900 px (16:9) | 飽和度 -25、對比 -10 |
| 文章內圖 | 1200×800 px | 同上 |
| 首頁卡片 | 800×600 px (4:3) | 同上 |

---

## 10. 操作流程

### 新增文章流程

**Step 1：準備內容**
- 文章標題（中/英）
- 分類（植物學/香氣哲思/產地旅行/調香手記）
- 主題照片（上傳至 CYB，取得 CDN 網址）
- 文章內文

**Step 2：複製模板**
```bash
cp feyond-article-twocol.html articles/新文章名稱.html
```

**Step 3：修改內容**
- `<title>` 標籤
- Header 區塊（分類、標題、副標）
- Hero 圖片 CDN 網址
- 內文各 section

**Step 4：設定付費牆**
- Premium 文章：首頁連結加 `?paywall=true`
- Free 文章：不加參數

**Step 5：更新首頁**
- 在 `index.html` 新增文章卡片

**Step 6：上傳 GitHub**
- 方法 A：網頁介面直接編輯
- 方法 B：Upload files
- 方法 C：本機 git push

### 部署時間

GitHub Pages 自動部署，通常 1-2 分鐘生效。

---

## 附錄：關鍵元件清單

| 元件 | 檔案 | 用途 |
|------|------|------|
| 付費牆 CTA | `feyond-paywall-cta.html` | 訂閱引導元件 |
| 文章模板 | `feyond-article-twocol.html` | 雙欄文章頁定案版 |
| 操作手冊 | `feyond_blog__read_me_的設定` | 完整操作說明 |
| 架構定義 | `feyond-blog-architecture.md` | 知識付費架構規劃 |

---

## 版本歷史

| 版本 | 日期 | 變更 |
|------|------|------|
| v2.0 | 2026-04-01 | 整合所有對話群定義，統一規範 |
| v1.0 | 2026-03-31 | 初版架構 |

---

*© 2026 Feyond · 飛揚細籽 · Dhyana Aromatherapy*

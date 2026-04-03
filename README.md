# 飛揚細籽 FEYOND

**芳療師的知識部落格 · 知識付費系統**

🌐 https://feyond.muzen.store

---

## 網址對照

| 用途 | 網址 |
|------|------|
| 精美部落格 | https://feyond.muzen.store |
| GitHub Repo | https://github.com/feyondtw/feyond-blog |
| CYB 主站 | https://dhyana.store |
| CYB 舊部落格 | https://www.dhyana.store/zh-TW/blogs/feyond |

---

## 三平台分工

| 平台 | 負責內容 |
|------|---------|
| CYBERBIZ 部落格 | 免費摘要、SEO 累積 |
| Feyond-blog | 完整全文、品牌質感、付費牆 |
| CYBERBIZ 產品頁 | 精油購買、會員資格、金流 |

---

## ⚠️ Claude 操作原則（每次修改前必讀）

**新增功能時，絕對不能改動原有版面佈局與結構。**

- 圖片尺寸、欄位比例、間距、字型大小，一律不動
- 只能在原有 HTML 元素上新增 attribute（如 `data-category`、`data-date`、`id`、`class`）
- 只能在 CSS 區塊末尾新增新的 class，不修改已有的 class
- 只能在 JS 中擴充邏輯，不刪除既有的 event listener
- 如需確認現有結構，先用 view tool 讀取原始檔，再動手

---

## 首頁功能規範（index.html）

### 首頁佈局結構（固定，不得更動）

```
NAV（sticky，含品牌標誌 + 訂閱按鈕）
HERO（純文字，中央對齊）
AUTHOR SECTION（作者名片 + 訂閱 CTA）
CATEGORY TABS（水平 tab，4大分類 + 全部）
  └── 子分類 chips（植物誌 / 產區尋香 各有子分類，點 tab 才展開）
最新文章 section（大卡片，左圖右文 1:1 欄位）
精選文章 section（3欄 grid，有圖）
所有文章 section（純文字列表，無圖）
FOOTER
```

### 新增文章的 SOP（v2.4 起改為 JSON 驅動）

**只需動兩個檔案，`index.html` 不用碰：**

**Step 1：上傳文章 HTML**（放根目錄）

**Step 2：在 `index.html` 的 `ARTICLES` 陣列最頂端加一筆**

```js
{
  title: "主標題",
  subtitle: "副標題（選填）",
  file: "檔名.html",
  category: "blending",       // 四大分類之一
  date: "2026-04-03",         // 控制排序，最大日期 = 最新文章
  excerpt: "摘要文字...",
  image: "照片檔名.jpg",       // 空字串 "" 則顯示純色佔位
  premium: false               // true = 加 ?paywall=true + Premium badge
},
```

> ⚠️ `date` 欄位控制顯示順序，不一定要是真實發布日。  
> 想讓某篇排第一，就給它最大的日期值。

**自動處理項目（不需手動）：**
- 第 1 篇 → 最新文章大卡
- 第 2–4 篇 → 精選文章三欄
- 全部 → 所有文章列表
- 30 天內自動顯示 NEW 標籤
- Tab 篩選同步生效

### NEW 標籤自動化機制

- 文章元素只需加上 `data-date="YYYY-MM-DD"`
- JS 自動計算距今天數，30天內自動顯示金色 NEW 標籤
- 超過 30 天自動消失，無需手動管理
- 適用於：最新文章卡片、精選文章卡片、所有文章列表

### Tab 篩選功能

- 點任一分類 Tab，三個 section（最新 / 精選 / 所有文章）同步過濾
- 某 section 若篩選後完全沒有文章，整個 section 連 section-header 一起隱藏
- 全部 Tab 恢復顯示所有文章

### Premium 視覺規範

**Badge 樣式（所有文章類型通用）：**
- Premium badge：金色邊框 + 金色文字 + 小鎖頭圖示
- Free 文章：不加 badge，維持乾淨

**Premium 文章加到所有文章列表時：**
- `<a>` 元素加上 class `is-premium`
- 效果：左側金色細邊 + 極淡暖色漸層底，低調有層次

```html
<!-- Premium 文章列表範例 -->
<a href="article.html?paywall=true" class="article-list-item is-premium"
   data-category="botany" data-date="2026-04-01">
  ...
  <span class="badge badge-premium">Premium</span>
  ...
</a>

<!-- Free 文章列表範例 -->
<a href="article.html" class="article-list-item"
   data-category="journey" data-date="2026-04-01">
  ...
</a>
```

---

## 會員付費機制

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

## 製作流程

```
1. 選好照片 → 用自己習慣的命名上傳到 /images/
2. 告訴 Claude 檔名清單
3. Claude 根據檔名配圖，產出 HTML
4. 下載 HTML 上傳到 GitHub
```

**原則：你命名，Claude 配合修改 HTML。**

---

## 照片規範

| 項目 | 規範 |
|------|------|
| 路徑 | `https://feyond.muzen.store/images/檔名.jpg` |
| 命名 | 中文、英文皆可 |
| 尺寸 | 不需裁切，上傳原圖，CSS 自動適應 |
| 色調 | 飽和度 -25、對比 -10 |

---

## 日期格式

```
YYYY.MM.DD（顯示用）
YYYY-MM-DD（data-date 屬性用）
```

範例顯示：`2013.06.25`
範例屬性：`data-date="2013-06-25"`

---

## 圖片佈局

| 類型 | CSS class | 使用時機 |
|------|-----------|---------|
| 單圖全幅 | `img-full` | 重點大圖 |
| 雙圖並排 | `img-pair` | 對比、系列 |
| 三圖並排 | `img-trio` | 步驟展示 |
| 圖文並排 | `img-pair` + 文字區 | 縮小單圖 |

---

## 網站結構

```
feyond-blog/
├── index.html          ← 首頁
├── about.html          ← 作者簡歷
├── bulgarian-rose.html ← 文章（放根目錄）
├── images/             ← 所有照片
└── README.md
```

---

## 四大分類與配色

| 分類 | 中文 | 色碼 | 適用主題 |
|------|------|------|---------|
| `botany` | 植物誌 | `#2D4A3E` | 植物學知識、品種解析、萃取方式 |
| `journey` | 產區尋香 | `#8B5A3C` | 產地紀行、農場探訪、全球尋香 |
| `philosophy` | 香氣哲思 | `#B8965A` | 心靈書寫、香氣與情緒、芳療哲學 |
| `blending` | 調香手記 | `#3D4A6B` | 配方設計、調香筆記、創作過程 |

---

## 連結格式

| 類型 | 格式 |
|------|------|
| Premium 文章 | `文章名.html?paywall=true` |
| 免費文章 | `文章名.html` |

---

## 文章頁結構

```
NAV（← 返回 / FEYOND logo）
HEADER（分類、標題、日期）
HERO IMAGE（16:9 自動裁切）
開場段落（首字放大）
內文（雙欄：左標題摘要 / 右內文）
圖片區塊（穿插於段落間）
原文連結
FOOTER
```

---

## 色彩系統

### 基礎色

```css
--cream: #FFFEF8;      /* 主背景 */
--sand: #EDE6D6;       /* 分隔線 */
--parchment: #F5F0E3;  /* 引言背景 */
--ink: #252220;        /* 主文字 */
--gold: #B8965A;       /* 品牌金 */
```

### 植物主題色（A-H）

| 代號 | 名稱 | 適合植物 |
|------|------|---------|
| A | 暖駝 | 檀香、沉香 |
| B | 赭陶 | 薑、肉桂 |
| C | 森綠 | 雪松、花梨木 |
| D | 靛藍 | 藍雲杉、杜松 |
| E | 紫藤 | 薰衣草、鼠尾草 |
| F | 琥珀 | 永久花、金盞花 |
| G | 玫瑰 | 奧圖玫瑰、天竺葵 |
| H | 青瓷 | 白茶、茉莉 |

---

## 字體系統

| 用途 | 字體 |
|------|------|
| 英文標題 | Cormorant Garamond |
| 中文標題/內文 | Noto Serif TC |
| 輔助文字 | Noto Sans TC |

---

## 已發布文章

| 文章 | 檔名 | 日期 | 分類 | 類型 |
|------|------|------|------|------|
| 從企業修羅場到東方淨琉璃光 | `vaidurya.html` | 2026-04-03 | blending | 免費 |
| 月光下的華韻香 — 白玉蘭 | `michelia-alba.html` | 2022-08-28 | journey | 免費 |
| 保加利亞玫瑰特輯報導 | `bulgarian-rose.html` | 2013-06-25 | journey | Premium |
| 科西嘉永久花 | `helichrysum.html` | — | botany | Premium |
| 沉香與時間 | `oud-time.html` | — | philosophy | Premium |
| 藍雲杉 | `blue-spruce.html` | — | botany | 免費 |
| 花梨木 | `rosewood.html` | — | botany | 免費 |
| 沙漠之靈 | `desert-spirit.html` | — | philosophy | 免費 |
| 越南芽莊沉香 | `vietnam-oud.html` | — | journey | Premium |
| 阿曼乳香 | `frankincense.html` | — | botany | Premium |

> **注意**：所有文章 HTML 檔案皆放在**根目錄**，不使用 `articles/` 資料夾。  
> Premium 文章連結加 `?paywall=true`，免費文章不加。

---

## 相關連結

- [根本芳療 Dhyana](https://dhyana.store)
- [知識會員訂閱](https://dhyana.store/products/feyond-membership)

---

## 版本歷史

| 版本 | 日期 | 變更 |
|------|------|------|
| v2.4 | 2026-04-03 | 新增薜琉璃文章（調香手記）、首頁改為 JSON 驅動動態生成、新增 articles.json、SOP 更新為只改 ARTICLES 陣列 |
| v2.3 | 2026-04-03 | 加入首頁功能規範、Claude 操作原則、NEW 自動標籤、Tab 篩選、Premium 視覺規範 |
| v2.2 | 2026-04-03 | 新增白玉蘭文章、更新文章連結清單 |
| v2.1 | 2026-04-02 | 新增製作流程、照片規範、會員機制 |
| v2.0 | 2026-04-01 | 整合規範 |

---

© 2026 Feyond · 飛揚細籽 · Dhyana Aromatherapy

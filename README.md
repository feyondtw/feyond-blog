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
YYYY.MM.DD
```

範例：`2013.06.25`

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

| 文章 | 檔名 | 日期 | 類型 |
|------|------|------|------|
| 月光下的華韻香 — 白玉蘭 | `michelia-alba.html` | 2022.08.28 | 免費 |
| 保加利亞玫瑰特輯報導 | `bulgarian-rose.html?paywall=true` | 2013.06.25 | Premium |
| 科西嘉永久花 | `helichrysum.html?paywall=true` | - | Premium |
| 沉香與時間 | `oud-time.html?paywall=true` | - | Premium |
| 藍雲杉 | `blue-spruce.html` | - | 免費 |
| 花梨木 | `rosewood.html` | - | 免費 |
| 沙漠之靈 | `desert-spirit.html` | - | 免費 |
| 越南芽莊沉香 | `vietnam-oud.html?paywall=true` | - | Premium |
| 阿曼乳香 | `frankincense.html?paywall=true` | - | Premium |

> **注意**：所有文章 HTML 檔案皆放在**根目錄**，不使用 `articles/` 資料夾。

---

## 相關連結

- [根本芳療 Dhyana](https://dhyana.store)
- [知識會員訂閱](https://dhyana.store/products/feyond-membership)

---

## 版本歷史

| 版本 | 日期 | 變更 |
|------|------|------|
| v2.2 | 2026-04-03 | 新增白玉蘭文章、更新文章連結清單 |
| v2.1 | 2026-04-02 | 新增製作流程、照片規範、會員機制 |
| v2.0 | 2026-04-01 | 整合規範 |

---

© 2026 Feyond · 飛揚細籽 · Dhyana Aromatherapy

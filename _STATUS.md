# 飛揚細籽 FEYOND · 當前狀態同步檔

**最後更新：** 2026-05-25
**用途：** 任何 Claude 對話或協作者開始工作前，**先讀這個檔案對齊現況**。
---

## 已發布文章（9 篇，按上架日期排序）

| 上架日 | 檔名 | 標題 | 分類 | Premium |
|---|---|---|---|---|
| 2026-05-24 | haridwar-ganga.html | 恆河水流過的聖性 | 香氣哲思 philosophy | ✓（限時免費至 6/5） |
| 2026-05-16 | sirsasana.html | Śīrṣāsana：翻轉，才是回家 | 身覺 embodied | ✓（限時免費已到期 5/23） |
| 2026-04-17 | geranium-bourbon.html | 從銀杏到天竺葵：空不是虛無 | 香氣哲思 philosophy | — |
| 2026-04-10 | pratyahara.html | 收攝 | 香氣哲思 philosophy | — |
| 2026-04-05 | cistus-labdanum.html | 慈悲的淚珠 | 產區尋香 journey | ✓ |
| 2026-04-03 | vaidurya.html | 從企業修羅場到東方淨琉璃光 | 調香手記 blending | — |
| 2026-03-10 | blue-spruce.html | 藍雲杉 | 植物誌 botany | — |
| 2022-08-28 | michelia-alba.html | 月光下的華韻香 — 白玉蘭 | 產區尋香 journey | — |
| 2013-06-25 | bulgarian-rose.html | 保加利亞玫瑰特輯報導 | 產區尋香 journey | ✓ |

---

## 等候解鎖文章（6 篇占位卡，未實際撰寫）

| 規劃日期 | 檔名（未建） | 標題 | 分類 |
|---|---|---|---|
| 2026-03-20 | helichrysum.html | 科西嘉永久花 | 植物誌 botany |
| 2026-03-15 | oud-time.html | 沉香與時間 | 香氣哲思 philosophy |
| 2026-03-05 | rosewood.html | 花梨木 | 植物誌 botany |
| 2026-02-28 | desert-spirit.html | 沙漠之靈 | 香氣哲思 philosophy |
| 2026-02-20 | vietnam-oud.html | 越南芽莊沉香 | 產區尋香 journey |
| 2026-02-15 | frankincense.html | 阿曼乳香 | 植物誌 botany |

**等候解鎖文章規則：**
- 在 articles.json 與 index.html ARTICLES 陣列必須有 `locked: true` 欄位
- 首頁卡片顯示「等候解鎖」標籤
- 不可點擊（沒有實際 .html 檔案）

---

## 分類系統（5 個類別）

| 分類 | 代號 | 主題色 |
|---|---|---|
| 植物誌 | botany | `#2D4A3E` 森綠 |
| 產區尋香 | journey | `#8B5A3C` 木褐 |
| 香氣哲思 | philosophy | `#B8965A` 琥珀金 |
| 調香手記 | blending | `#3D4A6B` 靛藍 |
| 身覺 | embodied | `#4A6358` 鼠尾深綠 |

---

## 核心慣例（修改時務必遵守）

### 1. 雙圖系統（自 sirsasana 確立）
- **首頁卡片 + CYB 部落格** 用設計封面 `xxx-cover.jpg`（含 typography）
- **文章內頁 hero** 用真實照片 `xxx-hero.jpg`

### 2. 限時開放工作流程（自 geranium-bourbon 起）
Premium 文章可先免費開放一週引流。實作：
1. 文章頂部加 `.free-banner` 橫幅
2. JS 加 `FREE_UNTIL = new Date('YYYY-MM-DDTHH:MM:SS+08:00')` 判斷
3. 文末加 `.membership-invite` 區塊

### 3. articles.json 與 index.html ARTICLES 陣列必須同步
**修改任何一邊，另一邊也要改**。檔案分裂是過去最大問題的來源。

### 4. 日期欄位規則
- `date` = 上架日（首頁排序用此）
- `written` = 原始撰寫日（顯示給讀者用）

### 5. 圖片路徑
GitHub `/images/` 資料夾，URL 為 `https://feyond.muzen.store/images/檔名.jpg`

---

## 待補資料 / 未解決事項

- [ ] 「沉香與時間」如果要正式上架，需移除 `locked: true` 並真的建立 .html 檔案

---

## 工作模式建議

**新對話開頭，協作者第一件事應該做：**
1. 讀本檔（`_STATUS.md`）
2. 比對線上 `https://feyond.muzen.store/articles.json` 與本檔是否一致
3. 不一致時：以線上為準，先更新本檔，再開始任何修改

**每次新增/修改文章後：**
1. 同步更新 articles.json 與 index.html
2. 更新本檔的「已發布文章」表格
3. 一起提交到 GitHub

---

**Maintained by:** Feyond Yen
**Repository:** github.com/feyondtw/feyond-blog
**Live site:** https://feyond.muzen.store

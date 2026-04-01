# 飛揚細籽 FEYOND

**根本芳療 Dhyana Aromatherapy 的 25 年芳療文章匯集**

🌿 https://feyond.muzen.store

---

## 關於這個部落格

這是 Feyond 老師累積 25 年的芳療深度文章，以 Aesop Library 風格呈現，採用知識付費模式運營。

**四大主題分類：**
- 🌱 **植物學** — 植物科學、品種介紹
- 💭 **香氣哲思** — 心靈感悟、芳療哲學
- ✈️ **產地旅行** — 產地紀實、農場拜訪
- 🧪 **調香手記** — 調香過程、配方創作

---

## 系統架構

```
CYBERBIZ 部落格（SEO 累積）
        ↓
   「閱讀全文」
        ↓
  Feyond-blog（付費牆）
   ↓              ↓
 會員直接閱讀    非會員 → 訂閱引導 → CYBERBIZ 購買會員資格
        ↓
  文章內產品連結 → CYBERBIZ 產品頁購買
```

| 平台 | 負責內容 |
|------|---------|
| **CYBERBIZ 部落格** | 免費摘要、SEO |
| **Feyond-blog** | 完整全文、品牌質感、付費牆 |
| **CYBERBIZ 產品頁** | 精油購買、會員資格商品 |

---

## 檔案結構

```
feyond-blog/
├── index.html              ← 首頁
├── style.css               ← 共用樣式
├── CNAME                   ← 自訂網域設定
├── .nojekyll               ← 停用 Jekyll
├── member/
│   └── _template/          ← 會員專屬模板
├── blue-spruce.html        ← 藍雲杉（調香手記）
├── helichrysum.html        ← 永久花（香氣哲思）
├── desert-spirit.html      ← 漠地之靈（產地旅行）
├── rosewood.html           ← 花梨木（植物學）
└── README.md
```

---

## 會員系統說明

### 運作原理

使用 **localStorage** 前端驗證，無需後端伺服器。

```javascript
// 會員狀態儲存
localStorage.setItem('feyondMember', 'true');

// 檢查會員
const isMember = localStorage.getItem('feyondMember') === 'true';
```

### 文章付費設定

| 類型 | 連結格式 | 說明 |
|------|---------|------|
| **Premium** | `article.html?paywall=true` | 非會員看到付費牆 |
| **Free** | `article.html` | 所有人可閱讀 |

### 手動測試會員狀態

**設定為會員（瀏覽器 Console）：**
```javascript
localStorage.setItem('feyondMember', 'true');
location.reload();
```

**清除會員資格：**
```javascript
localStorage.removeItem('feyondMember');
location.reload();
```

### 密碼設定位置

在文章 HTML 底部的 `<script>` 區塊：
```javascript
const correctPassword = 'FEYOND2024'; // 修改為實際密碼
```

---

## 部署流程

### GitHub Pages 設定

1. **Settings** → **Pages**
2. Source: **Deploy from a branch**
3. Branch: **main** / **root**
4. 等待 1-2 分鐘部署完成

### 自訂網域

已設定 `CNAME` 檔案指向 `feyond.muzen.store`

GoDaddy DNS 設定：
- Type: `CNAME`
- Name: `feyond`
- Value: `feyondtw.github.io`

### 更新網站

**方法 A：GitHub 網頁介面**
1. 點擊要修改的檔案
2. 點 ✏️ Edit
3. 修改後 Commit changes

**方法 B：上傳檔案**
1. Add file → Upload files
2. 拖曳檔案
3. Commit changes

**方法 C：Git 指令**
```bash
git add .
git commit -m "更新說明"
git push origin main
```

---

## 新增文章

### Step 1：複製模板
```bash
cp helichrysum.html 新文章.html
```

### Step 2：修改內容
- `<title>` 標籤
- 文章標題、分類、日期
- Hero 圖片（使用 CYB CDN 網址）
- 文章內文

### Step 3：更新首頁

在 `index.html` 新增文章卡片：
```html
<a href="新文章.html?paywall=true" class="article-card" data-category="journey">
  <div class="article-card-image-wrap">
    <img src="CYB圖片網址" alt="標題">
    <span class="article-card-category">產地旅行</span>
  </div>
  <div class="article-card-body">
    <h2 class="article-card-title">文章標題</h2>
    <p class="article-card-excerpt">摘要文字...</p>
    <div class="article-card-meta">
      <span>2026</span>
      <span class="article-card-read">Read →</span>
    </div>
  </div>
</a>
```

### 分類對應

| 分類 | `data-category` |
|------|-----------------|
| 植物學 | `botany` |
| 香氣哲思 | `philosophy` |
| 產地旅行 | `journey` |
| 調香手記 | `blending` |

---

## 設計規範

### 字體系統

| 用途 | 字體 |
|------|------|
| 英文標題 | Cormorant Garamond |
| 中文標題 | FangSong / Noto Serif TC |
| 內文 | Barlow / Noto Sans TC |
| 拉丁學名 | Times New Roman Italic |

### 色彩系統

| 變數 | 色碼 | 用途 |
|------|------|------|
| `--cream` | #FFFEF8 | 背景 |
| `--sand` | #EDE6D6 | 分隔線 |
| `--ink` | #252220 | 主要文字 |
| `--gold` | #B8965A | 強調色 |

### 照片處理

- **飽和度**：-25
- **對比**：-10
- **Hero 圖片**：1600×900 px（16:9）
- **首頁卡片**：800×600 px（4:3）

---

## 相關連結

- 🌐 **部落格**：https://feyond.muzen.store
- 🛒 **根本芳療**：https://dhyana.store
- 📦 **GitHub**：https://github.com/feyondtw/feyond-blog

---

*© 2026 Feyond · 飛揚細籽 · Dhyana Aromatherapy*

# Feyond-blog 知識會員系統部署指南

## 📁 新增檔案（上傳到 GitHub）

```
feyond-blog/
├── (現有檔案保持不變)
├── index.html          ← 現有首頁
├── style.css           ← 現有樣式
├── blue-spruce.html    ← 🔒 會員專屬
├── desert-spirit.html  ← ✅ 免費
├── helichrysum.html    ← ✅ 免費
├── rosewood.html       ← ✅ 免費
│
├── (新增以下檔案)
├── library.html        ← 知識學院入口頁
├── members.json        ← 會員資料庫
└── member/
    ├── _template/
    │   └── index.html  ← 會員頁面模板
    └── chang-mei/
        └── index.html  ← 範例會員
```

## 🚀 上傳步驟

### 方法一：GitHub 網頁上傳
1. 進入 https://github.com/feyondtw/feyond-blog
2. 點擊 `Add file` → `Upload files`
3. 拖曳以下檔案：
   - `library.html`
   - `members.json`
4. 點擊 `Add file` → `Create new file`
5. 輸入 `member/_template/index.html`，貼上模板內容
6. 重複建立 `member/chang-mei/index.html`

### 方法二：Git 命令（如有本地 clone）
```bash
cd ~/path/to/feyond-blog
# 複製新檔案到專案目錄
# 然後執行：
git add .
git commit -m "新增知識會員系統"
git push origin main
```

## 🔗 完成後的連結結構

| URL | 說明 |
|-----|------|
| `feyond.muzen.store` | 現有首頁（不變） |
| `feyond.muzen.store/library.html` | 知識學院入口 |
| `feyond.muzen.store/member/chang-mei/` | 會員專屬知識庫 |

## 👥 新增會員流程

### 1. 編輯 members.json
在 GitHub 上直接編輯，新增一筆資料：
```json
{
  "code": "newcode2024",
  "name": "新會員",
  "path": "new-member",
  "email": "new@example.com",
  "active": true,
  "expires": "2025-12-31",
  "joined": "2024-07-01"
}
```

### 2. 建立會員資料夾
1. GitHub → `Add file` → `Create new file`
2. 檔名輸入：`member/new-member/index.html`
3. 內容複製自 `member/_template/index.html`
4. Commit 儲存

### 3. 通知會員
發送專屬連結：`https://feyond.muzen.store/member/new-member/`

## 📝 現有首頁連結更新（建議）

在現有 `index.html` 的導航區加入知識學院連結：
```html
<a href="library.html">知識學院</a>
```

---

## ⚠️ 注意事項

1. **會員專屬文章**：`blue-spruce.html` 在 `library.html` 中已設為會員專屬，點擊會導向登入區
2. **GitHub Pages 需重新部署**：上傳後等待 1-2 分鐘讓 Pages 更新
3. **members.json 是公開的**：因為是靜態網站，會員資料可被查看，但連結不易被猜測

---

*建立於 2024*

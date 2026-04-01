# Feyond-blog 飛揚細籽部落格

**網址**：https://feyond.muzen.store

---

## 快速操作

### 新增文章

1. 複製模板 `feyond-article-twocol.html`
2. 修改標題、分類、Hero 圖片、內文
3. 上傳至 `articles/` 資料夾
4. 更新首頁 `index.html` 加入文章卡片
5. Commit → 等待 1-2 分鐘自動部署

### 付費/免費文章

| 類型 | 首頁連結格式 |
|------|------------|
| **Premium** | `articles/rose.html?paywall=true` |
| **Free** | `articles/rose.html` |

### 四大分類

| 分類 | `data-category` | 主色 |
|------|-----------------|------|
| 植物學 | `botany` | #2D4A3E |
| 香氣哲思 | `philosophy` | #B8965A |
| 產地旅行 | `journey` | #8B5A3C |
| 調香手記 | `blending` | #3D4A6B |

---

## 檔案結構

```
feyond-blog/
├── index.html              ← 首頁
├── feyond-article-twocol.html  ← 文章模板
├── articles/
│   ├── rose.html
│   ├── hinoki.html
│   └── ...
└── README.md
```

---

## 圖片來源

圖片統一上傳至 CYBERBIZ 後台，複製 CDN 網址使用：
```
https://cdn-next.cybassets.com/s/files/...
```

照片處理：**飽和度 -25、對比 -10**

---

## 會員驗證

使用 `localStorage` 前端驗證：
```javascript
// 設定為會員
localStorage.setItem('feyondMember', 'true');

// 清除會員（測試用）
localStorage.removeItem('feyondMember');
```

密碼設定在文章 HTML 底部 `<script>` 區塊。

---

## 相關連結

- **電商主站**：https://dhyana.store
- **舊部落格（SEO）**：https://www.dhyana.store/zh-TW/blogs/feyond
- **完整規範**：見 Claude Project Knowledge

---

*© 2026 Feyond · 飛揚細籽 · Dhyana Aromatherapy*

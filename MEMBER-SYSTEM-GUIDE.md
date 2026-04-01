# Feyond-blog 知識會員系統部署指南

*基於 feyond-blog-architecture.md 架構規劃*

---

## 現有結構（不更動）

```
feyond-blog/
├── index.html              # 首頁（文章列表）
├── CNAME                   # 網域設定
├── README.md
├── css/
│   └── style.css           # 共用樣式 + 13色主題系統
└── articles/（或根目錄）
    ├── blue-spruce.html    # 藍雲杉（D 靛藍）🔒 會員專屬
    ├── helichrysum.html    # 永久花（F 琥珀）✅ 免費
    ├── desert-spirit.html  # 漠地（J 蒼白）✅ 免費
    └── rosewood.html       # 花梨木（C 森綠）✅ 免費
```

---

## 新增檔案（會員系統）

```
feyond-blog/
├── members.json            # 【新增】會員資料庫
└── member/                 # 【新增】會員專屬區
    ├── _template/
    │   └── index.html      # 會員知識庫模板
    └── {會員路徑}/
        └── index.html      # 各會員專屬入口
```

---

## 會員驗證流程

採用**專屬子路徑**方案（您選擇的方式）：

```
會員購買「知識會員資格」（CYBERBIZ）
        ↓
收到專屬連結（自動發信）
例如：https://feyond.muzen.store/member/chang-mei/
        ↓
直接進入專屬知識庫
（無需輸入密碼）
```

---

## members.json 格式

```json
[
  {
    "code": "feyond2024",
    "name": "張小姐",
    "path": "chang-mei",
    "email": "example@gmail.com",
    "active": true,
    "expires": "2025-12-31",
    "joined": "2024-01-15"
  }
]
```

| 欄位 | 說明 |
|------|------|
| `code` | 會員代碼（備用登入方式） |
| `name` | 顯示名稱 |
| `path` | 資料夾名稱，即 URL 路徑 |
| `email` | 會員 Email |
| `active` | 是否啟用（停用則無法訪問） |
| `expires` | 到期日 |
| `joined` | 加入日期 |

---

## 新增會員流程

### 1. 編輯 members.json
在 GitHub 上直接編輯，新增一筆資料。

### 2. 建立會員資料夾
```
GitHub → Add file → Create new file
檔名：member/{新路徑}/index.html
內容：複製自 member/_template/index.html
```

### 3. 發送專屬連結
```
您的飛揚細籽知識會員專屬連結：
https://feyond.muzen.store/member/{路徑}/
```

---

## 會員到期處理

**方式一：停用帳號**
- 編輯 `members.json`
- 將 `"active": true` 改為 `"active": false`

**方式二：刪除資料夾**
- 直接刪除 `/member/{路徑}/` 資料夾
- 會員訪問時出現 404

---

## 文章權限設定

| 文章 | 權限 | 處理方式 |
|------|------|----------|
| blue-spruce.html | 🔒 會員專屬 | 首頁連結指向 `/member/_template/` 或顯示鎖定提示 |
| helichrysum.html | ✅ 免費 | 維持現狀，任何人可直接訪問 |
| desert-spirit.html | ✅ 免費 | 維持現狀 |
| rosewood.html | ✅ 免費 | 維持現狀 |

### 首頁文章卡片標記
在 `index.html` 的文章卡片加入標記：

```html
<!-- 免費文章 -->
<a href="helichrysum.html" class="article-card">
  <span class="badge badge-free">免費閱讀</span>
  ...
</a>

<!-- 會員專屬 -->
<a href="#member-access" class="article-card">
  <span class="badge badge-member">會員專屬</span>
  ...
</a>
```

---

## 首頁新增區塊（選用）

如需在現有 `index.html` 加入會員登入區，可在頁尾前加入：

```html
<!-- MEMBER ACCESS -->
<section class="member-access" id="member-access">
  <h2>已是會員？</h2>
  <p>輸入您的會員代碼，進入專屬知識庫</p>
  <input type="text" id="memberCode" placeholder="請輸入會員代碼">
  <button onclick="validateMember()">進入</button>
</section>

<script>
async function validateMember() {
  const code = document.getElementById('memberCode').value.trim();
  if (!code) return;
  
  try {
    const response = await fetch('members.json');
    const members = await response.json();
    const member = members.find(m => m.code === code && m.active);
    
    if (member) {
      window.location.href = `member/${member.path}/`;
    } else {
      alert('會員代碼無效或已過期');
    }
  } catch (e) {
    window.location.href = `member/${code}/`;
  }
}
</script>
```

---

## CYBERBIZ 整合

### 會員商品設定
1. CYBERBIZ 新增商品「知識會員年費」
2. 定價：NT$ 1,200 / 年
3. 購買後自動發信包含專屬連結

### 自動發信模板
```
親愛的 {{customer_name}}，

感謝您成為飛揚細籽的知識會員！

您的專屬入口：
https://feyond.muzen.store/member/{{member_path}}/

有效期限：{{expires}}

飛揚細籽 FEYOND
gpd@dhyana.com.tw
```

---

## 安全性說明

| 等級 | 說明 |
|------|------|
| 適合 | 信任型會員制、知識分享社群 |
| 不適合 | 高機密內容、需嚴格驗證場景 |

### 提升安全性方法
- 定期更換會員路徑（每季）
- 加入時間戳記：`/member/chang-mei-2024q3/`
- 透過 Google Analytics 監控異常訪問

---

## 維護清單

- [ ] 每月：檢查即將到期的會員
- [ ] 每季：考慮更新會員路徑
- [ ] 持續：新增文章內容
- [ ] 年度：檢視會員價格與方案

---

*依據 feyond-blog-architecture.md 架構規劃建立*
*Last updated: 2024*

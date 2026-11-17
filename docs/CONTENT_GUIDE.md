# 日誌編輯指南

## 新增或修改文章

1. 複製 `docs/POST_TEMPLATE.md` 到 `src/content/journal/`，改成唯一英文檔名，例如 `november-2026.md`。
2. 填寫開頭 `---` 之間的 YAML 欄位和下方英文正文；只列入有證據的工作與參與者。
3. 圖片放入 `public/images/`，Markdown 使用 `![描述](/images/example.png)`。不要使用 `G:/` 路徑，也不要手動加上 GitHub 倉庫名稱。
4. 執行 `npm run check` 和 `npm run build`。`draft: true` 的文章不出現在列表、搜尋或文章路由；檢查前端排版可暫時改成 `false` 在本地預覽，檢查完再決定保留草稿或發布。
5. 提交前核對 `git diff`，只提交相關文章和圖片。修改既有文章時保留檔名，避免網址變更。

草稿只是網站隱藏狀態，不是存取權限；GitHub 倉庫中的檔案仍按倉庫可見性處理。CMS 的欄位檢查與 Astro 建置檢查會共同保障格式，但不能驗證工作內容是否真實。

## 欄位

| 欄位 | 填寫方式 |
| --- | --- |
| title | 英文標題，必填 |
| description | 列表與分享摘要，必填 |
| date | 文章整理日期 `YYYY-MM-DD`，決定列表排序 |
| reportingMonth | 月報月份 `YYYY-MM`；非月報可刪除此欄位 |
| authors | 可多選 `li-shimin`、`chau-chi-chung`、`lam-man-ho`，至少一人 |
| category | `Monthly report`、`Programming`、`Art`、`Level design` 擇一 |
| cover | `/images/` 開頭的封面路徑 |
| coverAlt | 用文字描述封面內容 |
| draft | `true` 為草稿；`false` 才輸出到網站 |

月報顯示月份以 `reportingMonth` 為準；未填時顯示 `date` 的月份。列表分類對應整篇文章，混合程式與美術的月報歸類為 Monthly report。

## 月報正文

保留完成進度、設計決定、遇到問題及處理、個人貢獻、驗證證據、未完成事項、下月計劃與反思。下月計劃列出負責人、預計日期和可驗證成果。使用 `##` 標題可自動生成章節目錄。

程式證據宜用 Unity 遊戲畫面、功能測試及關鍵 Inspector 設定；模型證據應標示 Blender 版本、姿勢、尺寸與是否已驗收。給圖片加上圖說，避免把靜態姿勢當作完整動畫或把編輯器測試當作 Android 真機測試。

## 團隊協作

- 編輯前先同步遠端；兩人同時修改同一篇月報前先約定負責章節。
- LI Shimin 負責程式內容；Chau Chi Chung 負責模型內容。Lam Man Ho 的實際工作由本人補充，現有十月報不代填。
- 網站功能每階段完成後更新 `docs/DEVELOPMENT_PLAN.md`，並建立本地 Git commit。
- CMS 啟用後，在 Development journal 編輯相同欄位；新增文章檔名需唯一且清楚。儲存不等於正式網站已部署。
- 上傳至 CMS 的圖片不會自動加入獨立模型圖集；圖集項目另在 `src/data/gallery.ts` 加入版本、狀態和圖說。

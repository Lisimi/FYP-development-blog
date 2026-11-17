# Bamboo Vanguard 博客開發計劃

建立日期：2026-11-17  
目前階段：S0 已完成，準備進入 S1  
交付位置：`G:/test/HKCT/Final Year Project/Project Showcase`  
技術方向：Astro、TypeScript、Markdown、GitHub Pages；預留 Pages CMS。

## 目標與本次範圍

建立供三位組員維護、老師閱讀的英文開發日誌網站。先完成本地可瀏覽版本，遷移現有十月月報及實際模型圖片，待使用者確認效果後再安排遠端倉庫與正式發布。

- 首頁：項目介紹、熊貓模型、最新月報及工作方向。
- 開發日誌：日期、作者、分類、摘要及文章入口，支援查找文章。
- 月報詳情：完整 Markdown 正文、章節導覽、圖片與驗收狀態。
- 模型圖集：實際渲染圖及準確標示的版本與完成程度。
- 團隊：LI Shimin、Chau Chi Chung、Lam Man Ho；不推測未提供的個人貢獻。
- 協作：新增文章範本、維護說明、Pages CMS 欄位設定及本地 Git 階段提交。
- 部署：準備 GitHub Pages workflow 與專案子路徑支援；本次不發布。

## 內容與設計原則

1. 沿用現有十月月報的英文正文，不將較新的項目進度混入歷史月報。
2. 報告中的射擊／換彈整合、熊貓卷縮與真機驗證仍按原文標示待完成。
3. 模型渲染是 Blender 成果，不當作 Unity 遊戲截圖。
4. 將展示圖片複製到網站資產目錄，改為可部署的站內路徑，不引用本機磁碟。
5. 深綠、米白、襯線大標題與簡潔排版；桌面與手機均可閱讀。
6. 文章資料欄位由型別／schema 驗證；不使用 `any`。
7. 草稿不出現在正式文章列表及輸出頁面。來源說明與內部備註留在開發文件。

## 分階段計劃

| 階段 | 工作內容 | 完成標準 | 狀態 |
| --- | --- | --- | --- |
| S0 規劃與倉庫基線 | 檢查來源、建立計劃與忽略規則、確認本地倉庫 | 範圍和驗收條件可追蹤；建立規劃提交 | 已完成 |
| S1 Astro 與內容基線 | 安裝依賴、建立嚴格型別內容集合、遷移月報與模型圖、完成基本路由 | 型別檢查與建置成功；文章內容和圖片可載入 | 待開始 |
| S2 網站介面與本地驗收 | 首頁、日誌搜尋／分類、文章閱讀、圖集、團隊、手機排版 | 瀏覽器檢查導航、文章、互動、圖片和窄屏；保留本地預覽 | 待開始 |
| S3 協作與部署準備 | Pages CMS 設定、GitHub Pages workflow、維護指南、子路徑檢查 | 本地與專案子路徑均可建置；操作文件齊全；本地 Git 乾淨 | 待開始 |
| S4 使用者確認與上線 | 收集本地效果意見；其後確認遠端倉庫及發布安排 | 使用者確認後再接入遠端與 CMS 授權 | 等待本地效果確認 |

## 每階段維護規則

- 每階段完成後，更新本檔的狀態、變更、驗證結果與未解決事項。
- 每階段建立一個本地 Git commit；將 commit 對應的階段寫入提交訊息，可用 `git log --oneline` 查閱。
- 修改設定前先說明影響；只提交該階段的網站變更，不提交產物、依賴目錄或本地服務日誌。
- 發現驗證失敗時先修復並更新紀錄；不得把檔案存在當作功能或部署成功。
- 本次 S0 至 S3 為本地預覽交付；S4 等待使用者確認效果，不自行建立遠端、推送或發布。

## 執行紀錄

### S0 規劃與倉庫基線

- 已確認目標目錄原為空目錄，使用者已初始化 Git；沿用現有 `master` 分支，不重新初始化。
- 已核對十月英文月報、來源說明與模型渲染路徑。
- 現有月報記錄程式 LI Shimin、模型 Chau Chi Chung；Lam Man Ho 僅列團隊成員，實際月報貢獻未補。
- 本機 Node 為 24.16.0。一般環境連接 npm 遇到 DNS 解析失敗，後續依賴透過核准網絡存取處理。
- 已建立本計劃及 `.gitignore`。下一步：Astro 與內容基線。

## 來源

- 十月正文：`../reports/2026-10/October_2026_Progress_Report_EN.md`
- 來源與發布準備說明：`../reports/2026-10/Report_Preparation_Notes.md`
- 模型原圖：`../class_assets/demo_art/03_角色/CHR-01_Pando/previews/`
- [Astro Content Collections](https://docs.astro.build/en/guides/content-collections/)
- [Astro GitHub Pages](https://docs.astro.build/en/guides/deploy/github/)
- [Pages CMS Configuration](https://pagescms.org/docs/configuration/)

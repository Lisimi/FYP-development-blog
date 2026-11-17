# Bamboo Vanguard — Development Journal

Astro 靜態博客，收錄 FYP 英文月報與 Blender 模型圖片。現階段為本地預覽，尚未發布至 GitHub Pages，Pages CMS 尚未授權接入。

## 本地啟動

使用 Node.js 24 LTS（最低 22.23.4）及 npm。在本目錄執行：

```powershell
$env:ASTRO_TELEMETRY_DISABLED = '1'
npm ci
npm run dev
```

開啟 <http://127.0.0.1:4321/>。停止服務用 `Ctrl+C`。已安裝依賴時只需 `npm run dev`；若 4321 被使用，Astro 會顯示實際使用的埠。

```powershell
npm run check
npm run build
npm run preview
```

`check` 檢查型別；`build` 產生 `dist/`；`preview` 閱讀最近一次建置結果。修改 Markdown／圖片後，開發模式會更新；靜態預覽必須重新建置。

## 內容維護

- 英文文章：`src/content/journal/*.md`
- 圖片：`public/images/`
- 圖集說明：`src/data/gallery.ts`
- 團隊資料：`src/lib/content.ts`
- 版面：`src/pages/`、`src/layouts/`、`src/styles/global.css`
- [編輯指南](docs/CONTENT_GUIDE.md)、[月報範本](docs/POST_TEMPLATE.md)
- [開發計劃與驗證紀錄](docs/DEVELOPMENT_PLAN.md)、[資產來源](docs/ASSET_SOURCES.md)

十月月報屬於歷史進度快照：月份為 October 2026，整理日期為 10 November 2026。後續成果請新增文章，不直接把未完成項目改成後來的完成狀態。

## GitHub Pages 預留

`.github/workflows/deploy.yml` 僅接受手動觸發；本地提交及未來一般 push 均不會自動發布。

確認效果後的接入流程：

1. 將本目錄作為獨立 GitHub 倉庫根目錄，設定遠端並推送本地 `master`。
2. 在倉庫 Settings → Pages 選擇 GitHub Actions 作為來源。
3. 在 Actions 手動執行 `Deploy journal to GitHub Pages`。
4. workflow 讀取實際網站 origin 和 base path，檢查、建置、上傳及發布；不需在程式內填寫 GitHub 使用者名稱。
5. 成功後核對正式文章、圖片及手機版，再決定是否在 workflow 加入 `push: { branches: [master] }`，讓組員修改日誌後自動更新。

若預設分支改名，啟用自動發布時同步使用實際分支名稱。初次遠端部署與權限狀態尚未驗證。

模擬專案子路徑（以下域名只供本地測試）：

```powershell
$env:ASTRO_TELEMETRY_DISABLED = '1'
$env:SITE_URL = 'https://example.github.io'
$env:BASE_PATH = '/bamboo-vanguard'
npm run build
npm run preview
```

然後訪問預覽服務的 `/bamboo-vanguard/`。回到一般本地開發前，在同一終端清除 `SITE_URL`、`BASE_PATH` 並重新啟動服務；例如 `Remove-Item Env:SITE_URL, Env:BASE_PATH`。

## Pages CMS 預留

根目錄 `.pages.yml` 已定義文章欄位、三位作者、分類與媒體路徑。它是配置檔，不是已啟動的管理後台。

待遠端倉庫確定後，由倉庫擁有者在 [Pages CMS](https://app.pagescms.org/) 接入指定倉庫，選擇實際分支，再安排組員權限。CMS 儲存的是 GitHub 中的 Markdown／圖片；網站更新取決於部署 workflow，手動模式下需另外執行發布。首次接入須驗證新草稿、圖片上傳、作者多選與儲存後建置。

配置參考：[Astro GitHub Pages](https://docs.astro.build/en/guides/deploy/github/)、[GitHub Pages workflow](https://github.com/actions/starter-workflows/blob/main/pages/astro.yml)、[Pages CMS content](https://pagescms.org/docs/configuration/content/)、[media](https://pagescms.org/docs/configuration/media/)。

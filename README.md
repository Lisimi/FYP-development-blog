# Bamboo Vanguard — Development Journal

Astro 靜態博客，收錄 FYP 英文月報與 Blender 模型圖片。2026-11-17 使用者確認正式網站可正常開啟，組員已加入同一 Pages CMS 項目並可正常使用。

- 正式網站：[Bamboo Vanguard](https://lisimi.github.io/FYP-development-blog/)
- 倉庫：[Lisimi/FYP-development-blog](https://github.com/Lisimi/FYP-development-blog)
- 網頁編輯：[Pages CMS](https://app.pagescms.org/) → 選擇該倉庫及 `master`

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

## GitHub Pages 部署

`.github/workflows/deploy.yml` 已支援推送到 `master` 自動部署，亦保留手動觸發。本地 commit 不會發布；推送到遠端或 CMS 儲存到該分支才會觸發。

目前部署方式：

1. 本目錄為獨立倉庫根目錄，使用 `master` 分支。
2. 倉庫 Settings → Pages 的來源為 GitHub Actions。
3. 更新推送後，在 Actions 查看 `Deploy journal to GitHub Pages`；亦可使用 Run workflow 手動執行。
4. workflow 讀取實際網站 origin 和 base path，檢查、建置、上傳及發布。
5. 等待部署成功，再核對正式網站的文章與圖片。若部署失敗，查看失敗步驟的日誌，修正後重新提交。

若預設分支改名，同步修改 workflow 的觸發分支和 CMS 選擇的分支。本地開發前先執行 `git pull --ff-only`，同步組員透過 CMS 儲存的內容。

模擬專案子路徑（以下域名只供本地測試）：

```powershell
$env:ASTRO_TELEMETRY_DISABLED = '1'
$env:SITE_URL = 'https://example.github.io'
$env:BASE_PATH = '/bamboo-vanguard'
npm run build
npm run preview
```

然後訪問預覽服務的 `/bamboo-vanguard/`。回到一般本地開發前，在同一終端清除 `SITE_URL`、`BASE_PATH` 並重新啟動服務；例如 `Remove-Item Env:SITE_URL, Env:BASE_PATH`。

## Pages CMS 編輯

根目錄 `.pages.yml` 定義文章欄位、三位作者、分類與媒體路徑。Pages CMS 已由使用者接入，組員透過邀請加入同一項目。

登入後選擇 `FYP-development-blog` 的 `master` 分支，在 Development journal 新增或編輯日誌。CMS 將 Markdown／圖片儲存到 GitHub，觸發自動部署。保留 Draft 開啟可儲存未公開於網站的草稿，準備發布時關閉 Draft 並儲存。作者欄位為署名，不限制組員只能修改自己的文章；同時編輯前先約定負責內容。詳細步驟見[編輯指南](docs/CONTENT_GUIDE.md)。

配置參考：[Astro GitHub Pages](https://docs.astro.build/en/guides/deploy/github/)、[GitHub Pages workflow](https://github.com/actions/starter-workflows/blob/main/pages/astro.yml)、[Pages CMS content](https://pagescms.org/docs/configuration/content/)、[media](https://pagescms.org/docs/configuration/media/)。

# Pages CMS 組員使用指南

適用項目：Bamboo Vanguard / FYP-development-blog  
更新日期：2026-11-17

使用瀏覽器即可新增日誌、上傳圖片及發布，不需要安裝程式或 clone 項目。本文使用網站目前的英文欄位名稱；日誌標題、摘要、正文和圖說請使用英文。

## 1. 登入與開啟項目

1. 首次使用先按照組員邀請郵件完成加入。
2. 開啟 [Pages CMS](https://app.pagescms.org/)，使用已獲邀請的身分登入。
3. 選擇 **Lisimi / FYP-development-blog**。若介面顯示分支選項，使用 **master**。
4. 開啟 **Development journal**，即可查看及編輯日誌。

正式博客：[Bamboo Vanguard](https://lisimi.github.io/FYP-development-blog/)  
部署狀態：[GitHub Actions](https://github.com/Lisimi/FYP-development-blog/actions)

## 2. 新增日誌

在 **Development journal** 列表使用新增文章功能，然後依序填寫以下資料。

| 欄位 | 如何填寫 | 例子 |
| --- | --- | --- |
| 檔名（建立時顯示） | 使用唯一英文小寫名稱，以連字號分隔；確認最終副檔名只有一個 `.md` | `november-2026.md` |
| Title | 英文文章標題 | `November progress report` |
| Short summary | 以一至兩句英文概括進度與未完成事項 | `Progress on combat integration and character deformation, with remaining tests and next steps.` |
| Date prepared | 實際整理文章的日期 | `2026-11-30` |
| Reporting month | 月報所屬月份，格式為 `YYYY-MM`；一般功能日誌可留空 | `2026-11` |
| Contributors | 選擇實際參與該篇工作的組員，可多選，至少一人 | LI Shimin、Chau Chi Chung |
| Category | 選擇最適合的單一類別 | `Monthly report` |
| Cover image | 上傳或選擇一張與內容相關的封面 | 功能測試截圖或模型渲染圖 |
| Cover image description | 用英文描述封面內容，不能留空 | `Pando holding a bamboo-inspired gun in Blender.` |
| Draft (hidden from the website) | 撰寫中保持開啟；準備發布才關閉 | 開啟 = 草稿 |
| Entry content | 撰寫英文正文，加入標題、圖片及圖說 | 見下方正文範例 |

類別的用法：

- **Monthly report**：整個月的綜合進度，可同時包含程式與美術。
- **Programming**：程式功能、整合和測試紀錄。
- **Art**：模型、骨架、動畫及美術製作。
- **Level design**：關卡設計、配置和測試。

文章列表按 **Date prepared** 排序，月報的顯示月份以 **Reporting month** 為準。例如 12 月整理的 11 月月報，兩者分別填寫實際 12 月日期及 `2026-11`。

### 撰寫正文

在 **Entry content** 使用視覺編輯器輸入文字。主要章節使用 **Heading 2**，子章節使用 **Heading 3**；網站會自動為主要章節建立目錄。Title 已經是文章大標題，正文不需要重複加入 Heading 1。

如介面顯示 **Editor / Source** 切換，可在 Source 模式編輯 Markdown；下方範例只貼入正文，不包含文章資料欄位。這兩種編輯模式由 Pages CMS 的 rich-text 編輯器提供。[官方說明](https://pagescms.org/docs/configuration/fields/rich-text/)

```markdown
## 1 Progress overview
Describe the work completed during this reporting period.

## 2 Design decisions
Explain the decisions made and the reasons behind them.

## 3 Work completed and evidence
Describe each feature or asset, its contributor and its test results.

## 4 Problems and remaining work
Explain unresolved issues and what still needs verification.

## 5 Individual contributions
Record each member's confirmed contribution.

## 6 Next month's plan
List the planned work, responsible member, target date and completion evidence.

## 7 Reflection
Explain what was learned and how it will affect the next iteration.
```

以上是撰寫提示，發布前請換成實際內容；完整月報結構亦可參考 [月報範本](POST_TEMPLATE.md)。

## 3. 上傳與插入圖片

### 封面圖片

1. 在文章的 **Cover image** 欄位開啟圖片選擇器。
2. 上傳新圖片，或選擇已上傳的圖片。
3. 確認欄位顯示選中的圖片，並填寫 **Cover image description**。
4. 儲存文章，才會保存這次封面選擇。

### 正文圖片

1. 將游標放在 **Entry content** 中需要插圖的位置。
2. 使用編輯器的插入圖片功能，從圖片選擇器上傳或選取圖片。
3. 在可用的圖片替代文字欄位填寫英文描述；也可在 Source 模式核對 Markdown。
4. 在圖片下方新增一段英文圖說，交代功能、模型版本和測試／完成狀態。
5. 儲存文章。只上傳圖片不代表已把圖片插入正文。

也可以先在媒體管理（Media）中上傳，再回到文章選取。本站接受 **PNG、JPG、JPEG、WebP**；圖片選擇器和正文圖片上傳會使用同一套媒體設定。[Pages CMS 媒體說明](https://pagescms.org/docs/configuration/media/)

建議上傳前使用清楚且不重複的檔名，例如 `2026-11-pando-curl-front-v009.png`。CMS 可能正規化檔名，插入時應使用選擇器產生的實際路徑。

若使用 Source 模式，正文圖片格式如下（先上傳對應圖片，再使用實際檔名）：

```markdown
![Front view of the Pando curl study in Blender](/images/2026-11-pando-curl-front-v009.png)

Figure 1. Front-view curl study, v009. Further deformation checks are required.
```

不要填寫 `C:\`、`G:\` 等本機路徑，也不要自行在 `/images/` 前加上倉庫名稱。請依實際成果修改圖說，不能把 Blender 靜態姿勢寫成已完成的 Unity 動畫。

上傳圖片不會自動更新博客的獨立 **Gallery** 頁面；需要加入圖集時，通知網站維護者。

## 4. 保存草稿

1. 保持 **Draft (hidden from the website)** 開啟。
2. 填妥必填欄位，包括摘要、作者、分類、封面、封面描述及正文。
3. 使用頁面的儲存功能，等候成功提示；有欄位錯誤時先修正再儲存。
4. 回到列表重新開啟文章，確認內容已保存。

草稿儲存後，組員可以繼續編輯，但不會出現在正式博客的文章列表、搜尋或文章頁。儲存草稿仍可能觸發一次部署，這不代表草稿已發布。

**草稿是網站顯示狀態，不是私人文件。** 本項目 GitHub 倉庫公開，草稿原始檔仍可被查看，上傳的圖片也可能被直接存取。CMS 內的編輯畫面亦不等同正式網站的排版預覽。

## 5. 發布日誌

1. 核對標題、日期、月份、作者及分類。
2. 確認正文和圖片齊全，已移除範例提示，清楚區分已完成、測試中和未完成事項。
3. 關閉 **Draft (hidden from the website)**。
4. 儲存文章。此項目的發布方式就是「關閉 Draft 後儲存」。
5. 等候 GitHub Actions 完成 **Deploy journal to GitHub Pages**。可在上方部署狀態連結查看；若組員無法查看，請項目負責人協助確認。
6. 開啟正式博客的 **Journal**，找到新文章，核對文字、圖片和手機閱讀效果。

儲存成功表示內容已保存；部署成功後才會更新正式網站。部署需要時間，請以 Actions 結果為準。部署失敗時網站可能仍顯示上一個成功版本，先保留文章並通知網站維護者查看錯誤。

## 6. 修改已發布文章

在 **Development journal** 開啟原文章修改，保留原檔名和 **Draft 關閉**，儲存後會自動重新部署。

**已發布文章沒有另外一份「待發布修改」：Draft 關閉時，儲存修改就會進入部署流程。** 如果把它改為 Draft 開啟並儲存，下一次成功部署會把整篇文章從網站移除。需要討論的新版本先另存新草稿，或在儲存前與負責組員確認。

不要隨意更改文章檔名，否則原文章網址可能失效。也不要刪除其他文章仍在使用的圖片。

## 7. 常見問題

| 情況 | 處理方式 |
| --- | --- |
| 登入後看不到項目 | 確認使用獲邀請的身分；聯絡項目負責人核對邀請 |
| 不能儲存 | 查看必填欄位及月份格式，補齊資料後重試 |
| 儲存後網站找不到文章 | 確認 Draft 已關閉、分支為 master、部署成功；再刷新網站 |
| 圖片沒有顯示 | 確認已上傳並插入／選取，使用選擇器產生的路徑，且文章已儲存 |
| 網站仍顯示舊內容 | 查看最新部署是否完成；完成後重新整理瀏覽器 |
| 兩人要修改同一篇月報 | 先約定編輯順序；接手前重新開啟最新內容，避免覆蓋他人修改 |
| 找不到發布按鈕 | 本項目以關閉 Draft 並儲存作為發布操作 |

Contributors 只表示文章署名，不限制組員只能修改自己的文章。協作者可以編輯獲邀請項目的內容和圖片，但不能管理 CMS 配置或其他協作者。[官方協作者權限](https://pagescms.org/docs/configuration/collaborators/)

日常操作：**登入 → 新增／編輯 → 插入圖片 → 開啟 Draft 保存 → 確認內容 → 關閉 Draft 並儲存 → 等待部署 → 檢查正式網站。**

# Vuepress Template 使用教學(1) 下載 Vuepress Template 及 基本介紹

::: tip License
檔案下載： [Vuepress Template](https://drive.google.com/file/d/1ewR0JsHsdt9Jlwn_LdsbclOwmUbEhXYk/view?usp=sharing)
Vuepress Template License: CC-BY-SA

![CC-BY-SA](/images/by-sa.png)
:::

今天來跟大家分享一下 Vuepress 這套好用的 blog 快速建置套件。

搭配上 Github 及 Vercel (或是 4everland) 就可以快速建構自己的 blog，真的非常的方便！

我現在的程式設計課程第一階段課程也就是上這個，希望同學們能夠利用這套工具來建構上課筆記，從而累積學習歷程！

雖然在設定上比較繁瑣，但是我盡可能先處理了一些東西讓大家比較方便使用！

廢話不多說，就讓我們開始吧！

---

## Template 下載

1. 首先先下載 template 到電腦中。這邊推薦下載到「下載」資料夾。
2. 將下載下來的 `vuepress-template.zip` 資料夾
3. 將 `vuepress-template.zip` 解壓縮，並放到 `桌面` 上。

::: tip 特別注意
這邊是為了後續方便講解，才統一將壓縮後的檔案放到 `桌面` 上。

你也可以選擇你喜歡的資料夾存放喔！
:::

::: tip 特別注意 2
當然，如果你覺得下載 zip 檔實在太慢了，你也可以考慮用 git clone 一份我的專案

[vuepress-template-4-student](https://github.com/CXPhoenix/vuepress-template-4-student)

``` bash
git clone https://github.com/CXPhoenix/vuepress-template-4-student.git
```

記得要刪除 `.git` 資料夾喔！
:::

## Template 觀察

1. 從 `桌面` 進入 vuepress-template 資料夾後，你可以看到資料夾內的結構長這樣：

```file-tree:no-line-numbers
vuepress-template
|-- README.md
|-- package.json
|-- package-lock.json
|-- dev.bat
|-- .gitignore
|-- .vscode
    |-- settings.json
    `-- extensions.json
`-- docs
    |-- README.md
    |-- .vuepress
    |   |-- config.js
    |   |-- userConfig.js
    |   `-- public
    |       `-- images
    |-- blog
    |   |-- README.md
    |   `-- 2022-02-22-demoUpload.md
    `-- note
        `-- REAME.md
```

接下來我們重點介紹幾個重要的檔案及資料夾：

* `README.md` 主要裝載的是當我們上傳 Github 後顯示在 Repository 首頁的內容，這邊其實改不改都無所謂，完全不影響任何 Blog 的內容。 (這邊的 `README.md` 檔案指的是在 vuepress-template 下的第一個 README.md，而不是 `docs` 資料夾下的喔)
* `dev.bat` 是讓你點兩下直接開啟 dev server 用的。這個功能為了讓同學們可以少打一些指令而建立的，其實不用也可以！
* `docs` 資料夾是全部中最重要的，基本上所有的 vuepress 所呈現的東西及設定檔案都在這其中了。
* `docs/.vuepress` 資料夾中都是一些設定檔案，以及如果今天 build 出來的檔案就會放在這裡 (`docs/.vuepress/dist/`)。
* `docs/.vuepress/userConfig.js` 裡面是設定你的一些基本 userConfig，包含 `title`、`description`、`logo`。至於 sidebar 及 navbar 我基本上就設定自動化了，可以不用額外設定 (當然，如果你想手動設定也是可以的！你可以到 `docs/.vuepress/config.js` 中進行設定。相關設定文件請見 [navbar setting](https://v2.vuepress.vuejs.org/reference/default-theme/config.html#navbar) 及 [sidebar setting](https://v2.vuepress.vuejs.org/reference/default-theme/config.html#sidebar))
* `docs/README.md` 是 Blog 的首頁，你可以在這邊設定首頁內容。詳細設定請見：[home page](https://v2.vuepress.vuejs.org/reference/default-theme/frontmatter.html#home-page)。
* `docs/blog` 以及 `docs/note` 都是你的 Blog 資料夾，同時，也會根據資料夾自動生成 navbar 上的文字 `BLOG` 以及 `NOTE`。也因為自動生成的關係，每個資料夾下方都要記得有 `README.md` 作為該資料夾首頁。
::: warning 注意
這邊要特別注意一下，docs 內的資料夾只能取**英文**名稱，因為中文似乎會出現異常錯誤(目前還不知道怎麼回事，但是聽說 vuepress v1 已經修好了)。
:::

---

關於 vuepress 詳細設定與使用就讓我們留到下一篇吧！(恩對，你沒想錯，我偷懶了XD)

下一篇見！

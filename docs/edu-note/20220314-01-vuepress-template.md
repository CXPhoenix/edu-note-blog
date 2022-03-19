# Vuepress Template 使用教學(1)

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

## Template 使用

1. 首先先下載 template 到電腦中。這邊推薦下載到「下載」資料夾。
2. 將下載下來的 `vuepress-template.zip` 資料夾
3. 將 `vuepress-template.zip` 解壓縮，並放到 `桌面` 上。

::: tip 特別注意
這邊是為了後續方便講解，才統一將壓縮後的檔案放到 `桌面` 上。

你也可以選擇你喜歡的資料夾存放喔！
:::

4. 從 `桌面` 進入 vuepress-template 資料夾後，你可以看到資料夾內的結構長這樣：

```
vuepress-template
|-- README.md
|-- package.json
|-- package-lock.json
|-- dev.bat
|-- .gitignore
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

![](/images/20220314-01-vuepress-template/2022-03-19-16-51-30.png)

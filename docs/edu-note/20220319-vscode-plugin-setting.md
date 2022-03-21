# VSCode "Paste Image" 模組使用分享

::: tip 前情提要
最近都在教導 ~~(ㄓㄜˊㄇㄛˊ)~~ 學生要使用 Vuepress 來製作上課筆記。

一方面是因為這樣子對他們來說可以試著基礎的網頁架設入門，

二方面是比較好看(?)

總之，我就設計了 Vuepress Template 來讓它們下載，以及直接使用。

[可以點我看 Vuepress Template 的使用(1)](/edu-note/20220314-01-vuepress-template.md)

但是貼圖片這件事情總是困擾著我...

原本想說乾脆來學寫 vscode 的 extension (因為我課堂上指定官方 editor 就是 vscode)，

但是最近真的太忙了...有空的話我會來做。

總之，

我決定來找相關的模組處理！
:::

## 發現 Paste Image 模組

總之，根據前情提要，我就找了一下 vscode 的 extension，

原本是想說要來看看有沒有貼上圖片自動轉化為 base64 的，

覺得那樣感覺上比較方便，就跟 `Google Colab` 一樣，可以節省不少時間。

但是找了半天真的找不太到 :cry::cry:

退而求其次，只好找找看有沒有貼上後可以儲存圖片的模組。

還真讓我給找到了！

### [Paste Image](https://marketplace.visualstudio.com/items?itemName=mushan.vscode-paste-image)

::: tip Paste Image Info
名稱: Paste Image

識別碼: mushan.vscode-paste-image

描述: paste image from clipboard directly

版本: 1.0.4

發行者: mushan

VS Marketplace 連結: [https://marketplace.visualstudio.com/items?itemName=mushan.vscode-paste-image](https://marketplace.visualstudio.com/items?itemName=mushan.vscode-paste-image)
:::

研讀了一下裡面的介紹，真的是開我的眼界！


## 使用 Paste Image

基本上，下載方式很簡單，

首先你先打開 `延伸模組`

![](/images/20220319-vscode-plugin-setting/2022-03-19-17-17-40.png)

接著在搜尋列打上 `Paste Image`

![](/images/20220319-vscode-plugin-setting/2022-03-19-17-18-52.png)

基本上，第一個就會是這個模組了。

::: tip
當然啦，更簡單方式就是去按我的連結囉~

不過那個連結應該會外連，所以還是推薦你自己點 `延伸模組` 去下載啦！
:::

---

## 進行設定

一開始的時候你可以看一下模組簡介：

![](/images/20220319-vscode-plugin-setting/2022-03-19-17-20-52.png)

我個人認為他的動圖已經可以完全讓你了解這個模組在做什麼了！

不過值得注意的是，他在設定上要求了當貼上圖片時，如果要自動儲存，請用快捷鍵 `Ctrl+Alt+V` ，而不是傳統意義上的 `Ctrl+V`。

![](/images/20220319-vscode-plugin-setting/2022-03-19-17-24-02.png)

在貼上圖片後，他會儲存一個圖片到你目前編輯檔案所在的資料夾，連帶地建立一個 markdown 的圖片連結到你貼上圖片的地方。

但是因為我要配合 Vuepress 使用，所以得稍微修改一下他的 Setting。

### 開啟 .vscode 的 setting.json

我們要修改 extension 的設定，就必須要進入 vscode 的 setting 裡設定，

你可以在 VSCode 中給的 Setting GUI 中找到該設定區域，

![](/images/20220319-vscode-plugin-setting/2022-03-19-17-35-12.png)

::: warning 特別注意
不過這邊注意你一定要切換成 `工作區`

不然會影響到其他專案喔！

![](/images/20220319-vscode-plugin-setting/2022-03-19-17-36-40.png)
:::

找到以下幾個區域進行修改：

1. Paste Image: Insert Pattern
```
${imageSyntaxPrefix}/images/${currentFileNameWithoutExt}/${imageFileName}${imageSyntaxSuffix}
```
![](/images/20220319-vscode-plugin-setting/2022-03-19-17-38-12.png)

2. Paste Image: Name Prefix
```
${currentFileNameWithoutExt}/
```
![](/images/20220319-vscode-plugin-setting/2022-03-19-17-38-30.png)

3. Paste Image: Path
```
${projectRoot}/docs/.vuepress/public/images/
```
![](/images/20220319-vscode-plugin-setting/2022-03-19-17-38-42.png)


雖然以上方法是可行的，但我還是建議可以開啟 `.vscode/setting.json` 進行修改比較快。

下方我放入我的 setting.json 內容給大家複製貼上！

```json .vsocde/setting.json
{
  "pasteImage.path": "${projectRoot}/docs/.vuepress/public/images/",
  "pasteImage.namePrefix": "${currentFileNameWithoutExt}/",
  "pasteImage.insertPattern": "${imageSyntaxPrefix}/images/${currentFileNameWithoutExt}/${imageFileName}${imageSyntaxSuffix}"
}
```

完成之後大家可以去試試看喔！

## 後記

如果你想改成其他位址儲存該怎麼辦？

別擔心，你可以去看一下該模組的介紹，拉到下面就有給你 example 讓你了解怎麼設定囉！

> 話說回來...別跟我一樣，都不看介紹或說明，我剛剛自己摸了快 1 小時才搞懂... :cry:

希望大家會喜歡這一篇文章囉！

---

## 老蘇碎碎念

話說最近真的偷懶，尤其是 Vuepress template 那篇文章都還沒完成....

期待我能夠完成了...
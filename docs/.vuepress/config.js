const fs = require("fs");
const path = require("path");

const mdFile = ".md";
const rootFolder = path.dirname(__dirname);
const rootfiles = fs.readdirSync(rootFolder);
const folders = rootfiles.filter(
  (item) => path.extname(item) != mdFile && item != ".vuepress"
);

module.exports = {
  title: "資教文本",
  description: "關於資訊、教育、生活等等作筆記",
  head: [["link", { rel: "icon", href: "/images/logoImage.png" }]],
  themeConfig: {
    logo: "/images/logoImage.png",
    navbar: [
      {
        text: "教學筆記",
        link: "/edu-note/",
      },
    ],
    sidebar: { ...getSideBar() },
  },
};

function getNavBar() {
  const navbar = [];
  folders.forEach((folder) => {
    navbar.push({
      text: folder.toUpperCase(),
      link: `/${folder}/`,
    });
  });
  return navbar;
}

function getSideBar() {
  const sidebar = {};
  folders.forEach((folder) => {
    sidebar[`/${folder}/`] = [];
    const folderFiles = fs.readdirSync(path.join(rootFolder, folder));
    const children = [];
    folderFiles
      .filter(
        (item) =>
          item.toLowerCase() != "readme.md" && path.extname(item) === mdFile
      )
      .forEach((file) => {
        children.push(`/${folder}/${file}`);
      });
    sidebar[`/${folder}/`].push({
      text: folder.toUpperCase(),
      children: [`/${folder}/`, ...children],
    });
  });
  return sidebar;
}

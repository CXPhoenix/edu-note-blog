const fs = require("fs");
const path = require("path");
const { title, description, logo, exclusive_note } = require("./userConfig.js");

const mdFile = ".md";
const rootFolder = path.dirname(__dirname);
const rootfiles = fs.readdirSync(rootFolder);
const folders = rootfiles.filter(
  (item) => path.extname(item) != mdFile && item != ".vuepress"
);

module.exports = {
  title: title,
  description: description,
  head: [["link", { rel: "icon", href: "/images/logoImage.png" }]],
  themeConfig: {
    logo: logo,
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
          item.toLowerCase() != "readme.md" &&
          path.extname(item) === mdFile &&
          exclusive_note[folder].indexOf(item) === -1
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

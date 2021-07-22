const links = [
  {
    label: "Week01 notes",
    url: "week01/index.html",
  },
  {
    label: "Week02 notes",
    url: "week02/index.html",
  },
  {
    label: "Week03 notes",
    url: "week03/index.html",
  },
  {
    label: "Week04 notes",
    url: "week04/index.html",
  },
  {
    label: "Week05 notes",
    url: "week05/index.html",
  },
  {
    label: "Week06 notes",
    url: "week06/index.html",
  },
  {
    label: "Week07 notes",
    url: "week07/index.html",
  },
  {
    label: "Week08 notes",
    url: "week08/index.html",
  },
  {
    label: "Week09 notes",
    url: "week09/index.html",
  },
  {
    label: "Week10 notes",
    url: "week10/index.html",
  },
  {
    label: "Final Project Progress",
    url: "week11/music-room/index.html",
  },
  {
    label: "Final Project: Elementary Music Web Application",
    url: "music-room/index.html",
  },
];

let list = document.getElementById("tableContents");

for (let i = 0; i < links.length; i++) {
  let listItem = document.createElement("li");
  let listItemAnchor = document.createElement("a");
  listItemAnchor.setAttribute("href", links[i].url);
  listItemAnchor.textContent = links[i].label;

  listItem.appendChild(listItemAnchor);
  list.appendChild(listItem);
}

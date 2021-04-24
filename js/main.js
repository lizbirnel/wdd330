const links = [
    {
      label: "Week01 notes",
      url: "week01/index.html"
    }
  ] ;

let list = document.getElementById("tableContents");

for (let i=0; i<links.length; i++) {
    let listItem = document.createElement("li");
    let listItemAnchor = document.createElement("a");
    listItemAnchor.setAttribute('href', links[i].url);
    listItemAnchor.textContent = links[i].label;

    listItem.appendChild(listItemAnchor);
    list.appendChild(listItem);
}

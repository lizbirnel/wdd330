const requestURL =
  "http://localhost:5500/week11/music-room/js/music-symbols.json";

// const musicSymbols = ;

function fetch_info(url) {
  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      console.table(json);

      const symbols = json["symbols"];
      console.table(symbols);

      //declare elements for trading cards
      for (let i = 0; i < symbols.length; i++) {
        let card = document.createElement("div");
        let front = document.createElement("div");
        let back = document.createElement("div");
        let name = document.createElement("h2");
        let desc = document.createElement("p");
        let image = document.createElement("img");

        //write text content for cards and set attributes as necessary for styling etc.
        card.setAttribute("class", "flashcard");
        front.setAttribute("class", "frontSide");
        back.setAttribute("class", "backSide");
        name.textContent = symbols[i].name;
        desc.textContent = symbols[i].desc;
        image.setAttribute("src", symbols[i].url);
        image.setAttribute("alt", symbols[i].name);
        image.setAttribute("class", "symbolImage");

        //Information going to the page
        card.appendChild(front);
        card.appendChild(back);
        front.appendChild(image);
        back.appendChild(name);
        back.appendChild(desc);

        // //event listener for card. Note the arrow function--it fixes problem of event listener being triggered immediately
        // card.addEventListener("click", () => toggleHide(info_div));

        //append card
        document.querySelector("div.wrapper").appendChild(card);
      }
    });
}

// calling function to get URL for pages
fetch_info(requestURL);

// // function to toggle details about each individual
// function toggleHide(info_div) {
//   info_div.classList.toggle("hide");
// }

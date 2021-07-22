const requestURL =
  "https://lizbirnel.github.io/wdd330/music-room/js/notesflashcard.json";

// const musicSymbols = ;

function fetch_info(url) {
  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      console.table(json);

      const notenames = json["notenames"];
      console.table(notenames);

      let randomNote = Math.floor(Math.random() * notenames.length);

      //declare elements for trading cards
      let card = document.createElement("div");
      let front = document.createElement("div");
      let back = document.createElement("div");
      let name = document.createElement("h2");
      let type = document.createElement("p");
      let image = document.createElement("img");

      //write text content for cards and set attributes as necessary for styling etc.
      card.setAttribute("class", "flashcard2");
      front.setAttribute("class", "frontSide2");
      back.setAttribute("class", "backSide2");
      name.textContent = notenames[randomNote].name;
      type.textContent = notenames[randomNote].type;
      image.setAttribute("src", notenames[randomNote].url);
      image.setAttribute("alt", notenames[randomNote].name);
      image.setAttribute("class", "noteImage");

      //Information going to the page
      card.appendChild(front);
      card.appendChild(back);
      front.appendChild(name);
      front.appendChild(type);
      back.appendChild(image);

      // //event listener for card. Note the arrow function--it fixes problem of event listener being triggered immediately
      // card.addEventListener("click", () => toggleHide(info_div));

      //append card
      document.querySelector("div.noteFlashcard").appendChild(card);
    });
}

// calling function to get URL for pages
fetch_info(requestURL);

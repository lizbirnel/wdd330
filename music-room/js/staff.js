// let noteNames = [
//   {
//     name: "F3",
//     type: "space note",
//     image: "",
//   },
//   {
//     name: "G3",
//     type: "line note",
//   },
//   {
//     name: "A3",
//     type: "space note",
//   },
//   {
//     name: "B3",
//     type: "line note",
//   },
//   {
//     name: "C3",
//     type: "space note",
//   },
//   {
//     name: "D3",
//     type: "line note",
//   },
//   {
//     name: "E3",
//     type: "space note",
//   },
//   {
//     name: "F3",
//     type: "line note",
//   },
//   {
//     name: "G3",
//     type: "space note",
//   },
//   {
//     name: "A4",
//     type: "line note",
//   },
//   {
//     name: "B4",
//     type: "space note",
//   },
//   {
//     name: "C4",
//     type: "line note",
//   },
//   {
//     name: "D4",
//     type: "space note",
//   },
//   {
//     name: "E4",
//     type: "line note",
//   },
//   {
//     name: "F4",
//     type: "space note",
//   },
//   {
//     name: "G4",
//     type: "line note",
//   },
//   {
//     name: "A5",
//     type: "space note",
//   },
//   {
//     name: "B5",
//     type: "line note",
//   },
//   {
//     name: "C5",
//     type: "space note",
//   },
//   {
//     name: "D5",
//     type: "line note",
//   },
//   {
//     name: "E5",
//     type: "space note",
//   },
//   {
//     name: "F5",
//     type: "line note",
//   },
//   {
//     name: "G5",
//     type: "space note",
//   },
// ];
const staffCanvas = document.querySelector("#staffCanvas");
const ctx = staffCanvas.getContext("2d");

canvasSize();
// window.addEventListener("resize", canvasSize());

window.addEventListener("load", () => {
  //set canvas size when page loads

  document.addEventListener("mousedown", drawNote);
  // const staffCanvas = document.querySelector("#staffCanvas");
  // const ctx = staffCanvas.getContext("2d");

  // const img = new Image();
  // img.src = "./images/grand_staff.jpg";
  // staffCanvas.width = 1000;
  // staffCanvas.height = 600;
  // img.onload = () => {
  // canvasSize(img, ctx);
  //ctx.drawImage(img, 0, 0);
  // window.addEventListener("resize", canvasSize(img, ctx));
  // };
});

function canvasSize() {
  if (window.matchMedia("(min-width: 35rem)").matches) {
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
  } else {
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight * 0.6;
  }
}

//set base coordinates for mouse click for placing note

let coordinates = { x: 0, y: 0 };

//updates coordinates of cursor when event is triggered (user clicks to place note)
function getCoordinates(event) {
  let bounds = staffCanvas.getBoundingClientRect();
  // coordinate.x = event.clientX - staffCanvas.offsetLeft;
  // coordinate.y = event.clientY - staffCanvas.offsetTop;
  coordinates.x = event.clientX - bounds.left;
  coordinates.y = event.clientY - bounds.top;
  coordinates.x /= bounds.width;
  coordinates.y /= bounds.height;
  coordinates.x *= staffCanvas.width;
  coordinates.y *= staffCanvas.height;
}

function drawNote(event) {
  //create note shape
  getCoordinates(event);
  ctx.beginPath();
  if (window.matchMedia("(min-width: 35rem)").matches) {
    ctx.ellipse(coordinates.x, coordinates.y, 35, 25, 0, 0, Math.PI * 2, true);
    ctx.strokeStyle = "blue";
    ctx.lineWidth = 15;
    ctx.stroke();
  } else {
    ctx.ellipse(coordinates.x, coordinates.y, 20, 12, 0, 0, Math.PI * 2, true);
    ctx.strokeStyle = "green";
    ctx.lineWidth = 9;
    ctx.stroke();
  }

  // ctx.ellipse(coordinate.x, coordinate.y, 25, 15, 0, 0, Math.PI * 2, true);
  // ctx.strokeStyle = "blue";
  // ctx.lineWidth = 10;
  // ctx.stroke();
}

//new note to try

function newnote() {
  location = location;
}

document
  .getElementById("new_note")
  .addEventListener("click", (event) => newnote());

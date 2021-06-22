import { getJSON, getLocation } from "./utilities.js";

import QuakesController from "./quakescontroller.js";

const myController= new QuakesController();
myController.init();
console.log(myController);

getLocation().then(position) => {
  const longitude = position.coords.longitude;

  const latitude = position.coords.latitude;
}

getJSON(
  "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02"
);

console.log(getLocation());

const baseUrl =
  "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02&latitude=40.5907755&longitude=-112.01133360000001&maxradiuskm=100";

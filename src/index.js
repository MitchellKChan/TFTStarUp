import Champions from "./scripts/champions";
import Shop from "./scripts/shop";

// Declare champions object from champions module via fetchChampions
const champions = new Champions();

// Declare shop object for tracking level, gold, tier odds, and shop units
const shop = new Shop();

// Declare object for the page's body
const body = document.querySelector("body");

// Declare objects for the top section, which contains the title, timer,
// nav links, and settings
const title = document.createElement("div");
const timer = document.createElement("div");
const navLinks = document.createElement("div");
const settings = document.createElement("div");
const topSection = document.createElement("div");
const topRight = document.createElement("div");

// Declare objects for the bottom section, which contains the
// bench and shop
const bench = document.createElement("div");
const shopEl = document.createElement("div");
const bottomSection = document.createElement("div");

// Declare object button for testing AJAX requests to Riot Games'
// Data Dragon CDN under the following URLs:
// - Champion JSON: https://ddragon.leagueoflegends.com/cdn/13.18.1/data/en_US/tft-champion.json
// - Champion Image: https://ddragon.leagueoflegends.com/cdn/13.18.1/img/tft-champion/<champion_image_name>
const dataDragonButton = document.createElement("button");
dataDragonButton.innerText = "Data Dragon Request";
dataDragonButton.classList.add("data-dragon");

// set inner text and classess for top section objects
title.innerText = "TFT Star Up";
title.classList.add("title", "section");

timer.innerText = "timer";
timer.classList.add("timer", "section");

navLinks.innerText = "navLinks";

settings.innerText = "settings";
settings.classList.add("settings");

topRight.append(navLinks, settings);
topRight.classList.add("top-right", "section",);

topSection.classList.add("top");
topSection.append(title, timer, topRight);

// set inner text and classess for top section objects
bench.innerText = "bench";
bench.classList.add("bench", "section");

shopEl.innerText = "shop";
shopEl.classList.add("shop", "section");

bottomSection.classList.add("bottom");
bottomSection.append(bench, shopEl);

// add event listener to dataDragonButton to test AJAX request
dataDragonButton.addEventListener("click", e => {
  e.preventDefault();
  // console.log(champions.list);
  // console.log(shop);
  // console.log(Shop.tierOdds);
});

body.append(topSection,dataDragonButton, bottomSection);

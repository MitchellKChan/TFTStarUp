import Champions from "./scripts/champions";
import Shop from "./scripts/shop";

// Initialize champions variable to be assigned to a Champions object once champion info is fetched
let champions;
try {
  const res = await fetch("https://ddragon.leagueoflegends.com/cdn/13.18.1/data/en_US/tft-champion.json");
  if (res.ok) {
      const promise = await res.json();
      const list = promise.data;
      const keys = Object.keys(list);
      champions = new Champions(list, keys);
  } else {
      throw res;
  }
} catch(err) {
  console.log(err);
}

// Declare object for the page's body
const body = document.querySelector("body");

// Declare shop object for tracking level, gold, tier odds, and shop units
const shop = new Shop(3, 2, 4, champions);

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

// Declare objects contained by the shop object, which are the 
// current level, current shop odds, current gold, progress to 
// next level, buy exp button, refresh button, and shop units
const level = document.createElement("div");
const odds = document.createElement("div");
const levelProgress = document.createElement("div");
const gold = document.createElement("div");;
const expButton = document.createElement("button");
const refreshButton = document.createElement("button");
const levelInfo = document.createElement("div");
const shopButtons = document.createElement("div");
const shopUnits = document.createElement("div");

// const unitImageTester = document.createElement("img");
// unitImageTester.src = champions.championImage(champions.randomChampion());

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

// set inner text and classess for bottom section objects
bench.innerText = "bench";
bench.classList.add("bench", "section");

shopEl.classList.add("shop", "section");

bottomSection.classList.add("bottom");
bottomSection.append(bench, shopEl);

// set inner text and clases for shop objects
level.innerText = shop.level;
level.classList.add("section");

odds.innerText = `${Shop.tierOdds[shop.level]}`;
odds.classList.add("section");

levelProgress.innerText = `${shop.currentEpx}/${shop.expToNextLevel}`;
levelProgress.classList.add("section");

levelInfo.classList.add("section", "shop-level-info")
levelInfo.append(level, odds, levelProgress);

gold.innerText = "gold";
gold.classList.add("section");

expButton.innerText = "exp button";
expButton.classList.add("section", "exp-button");

refreshButton.innerText = "refresh button";
refreshButton.classList.add("section", "refresh-button");

shopButtons.classList.add("shop-buttons");
shopButtons.append(expButton, refreshButton);

shopUnits.classList.add("section", "shop-units");
shop.refresh();
Object.values(shop.units).forEach(slot => {
  const slotEl = document.createElement("div");
  const icon = document.createElement("img");
  icon.src = shop.champions.championImage(slot);
  slotEl.append(icon);
  slotEl.classList.add("section", "shop-unit");
  shopUnits.append(slotEl);
});

shopEl.append(levelInfo, gold, shopButtons, shopUnits);

// function to handle events that trigger shop refreshes
function handleRefresh(event) {
  event.preventDefault();
  shop.refresh();
  Object.values(shop.units).forEach((slot, i) => {
    shopUnits.children[i].children[0].src = shop.champions.championImage(slot);
  });
}

// function to handle events that trigger buying experience
function handleBuyExp(event) {
  event.preventDefault();
  if (shop.level < 9) {
    shop.buyExp();
    levelProgress.innerText = `${shop.currentEpx}/${shop.expToNextLevel}`;
    level.innerText = shop.level;
  }
}

// add event listener to refreshButton to test shop refreshing
refreshButton.addEventListener("click", e => {
  handleRefresh(e);
});

body.addEventListener("keydown", e => {
  if (e.code === "KeyD") handleRefresh(e);
});

expButton.addEventListener("click", e => {
  handleBuyExp(e);
})

body.addEventListener("keydown", e => {
  if (e.code === "KeyF") handleBuyExp(e);
});

body.append(topSection, bottomSection);

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
const shop = document.createElement("div");
const bottomSection = document.createElement("div");

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

shop.innerText = "shop";
shop.classList.add("shop", "section");

bottomSection.classList.add("bottom");
bottomSection.append(bench, shop);

body.append(topSection, bottomSection);

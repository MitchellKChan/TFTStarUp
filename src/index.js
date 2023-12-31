import Units from "./scripts/units";
import Shop from "./scripts/shop";
import Bench from "./scripts/bench";

// Initialize units variable to be assigned to a Units object once champion info is fetched
let units;
try {
  const res = await fetch("./src/scripts/tft-champion.json");
  if (res.ok) {
      const promise = await res.json();
      const list = promise.data;
      units = new Units(list); // assign a Units object to units for constructing a Shop object
  } else {
      throw res;
  }
} catch(err) {
  console.log(err);
}

// declare object for the page's body
const body = document.querySelector("body");
body.style.backgroundImage = "url(src/styles/pageBackground.jpeg)";

// declare object for the modal
const modal = document.querySelector(".modal");

// declare object for the message element
const message = document.querySelector(".message-modal");
const messageText = document.querySelector(".message");
const restart = document.querySelector(".restart");

// declare object for the settings form in the modal
const form = document.querySelector(".settings-form");
const slider = document.querySelector("#slider");
const seconds = document.querySelector("#seconds");
seconds.innerText = slider.value;

// add event listener to seconds element to display real-time selected starting
// time in form
slider.addEventListener("input", e => {
  seconds.innerText = e.target.value;
  timer.innerText = e.target.value;
});

// declare a Shop object for tracking level, gold, tier odds, and shop units
let shop = new Shop(3, 0, 6, units, handleBuyUnit);

// declare a Bench object for tracking units that have been purchased
let bench = new Bench(modal, message, messageText);

// declare objects for the top section, which contains the title, timer,
// nav links, and settings
const title = document.createElement("div");
const timer = document.createElement("div");
const navLinks = document.createElement("div");
const settings = document.createElement("div");
const settingsIcon = document.createElement("img");
const topSection = document.createElement("div");
const topRight = document.createElement("div");

// declare objects for the bottom section, which contains the
// bench and shop
const shopEl = document.createElement("div");
const bottomSection = document.createElement("div");

// declare objects contained by the shop object, which are the 
// current level, current shop odds, current gold, progress to 
// next level, buy exp button, refresh button, and shop units
const level = document.createElement("div");
const odds = document.createElement("div");
const levelProgress = document.createElement("div");
const expButton = document.createElement("button");
const refreshButton = document.createElement("button");
const levelInfo = document.createElement("div");
const shopButtons = document.createElement("div");
const shopInterface = document.createElement("div");

// declare objects for social links
const githubLink = document.createElement("a");
const githubIcon = document.createElement("img");
const linkedLink = document.createElement("a");
const linkedIcon = document.createElement("img");

timer.innerText = slider.value;
timer.classList.add("timer", "section");

githubLink.href = "https://github.com/MitchellKChan/TFTStarUp";
githubLink.target = "blank";
githubLink.rel = "noopener noreferrer";
githubIcon.src = "src/styles/github-mark.png";
githubIcon.classList.add("social");
githubLink.append(githubIcon);

linkedLink.href = "https://www.linkedin.com/in/mitchellkchan/";
linkedLink.target = "blank";
linkedLink.rel = "noopener noreferrer";
linkedIcon.src = "src/styles/linkedin_logo.png";
linkedIcon.classList.add("social");
linkedLink.append(linkedIcon);
navLinks.append(githubLink, linkedLink);


settingsIcon.src = "src/styles/gear.png";
settingsIcon.classList.add("settings-icon");

settings.append(settingsIcon);
settings.classList.add("settings");

topRight.append(githubLink, linkedLink, settingsIcon);
topRight.classList.add("top-right");

topSection.classList.add("top");
topSection.append(title, timer, topRight);

// set inner text and classess for bottom section objects
shopEl.classList.add("shop");

bottomSection.classList.add("bottom");
bottomSection.append(bench.benchEl, shopEl);

// set inner text and clases for shop objects
level.classList.add("level-info");
level.innerText = `Lvl. ${shop.level}`;

odds.classList.add("odds", "level-info");
Shop.generateTierEls(odds, shop.level);

levelProgress.classList.add("level-info");
levelProgress.innerText = `Exp to Next Level: ${shop.currentEpx}/${shop.expToNextLevel}`;

levelInfo.classList.add("shop-level-info", "section")
levelInfo.append(level, levelProgress, odds);


expButton.innerText = "Buy XP  [F]";
expButton.classList.add("section", "exp-button");

refreshButton.innerText = "Refresh  [D]";
refreshButton.classList.add("section", "refresh-button");

shopButtons.classList.add("shop-buttons");
shopButtons.append(expButton, refreshButton);

shopInterface.classList.add("shop-interface", "section");
shopInterface.append(shopButtons, shop.shopUnitsEl);

shopEl.append(levelInfo, shopInterface);

// add event listener for opening modal
settingsIcon.addEventListener("click", e => {
  handleOpenModal(e);
});

// add event listener to button for shop refreshes
refreshButton.addEventListener("click", e => {
  handleRefresh(e);
});

// add event listener to button for buying experience
expButton.addEventListener("click", e => {
  handleBuyExp(e);
});

// add event listener to document to track mouse position for
// for selling bench units
document.addEventListener("mousemove", e => {
  window.mouse = [e.clientX, e.clientY];
});

// add event listener to document to conditionally sell a bench
// unit if the mouse position is on one
document.addEventListener("keydown", e => {
  if (e.code === "KeyE") handleSellUnit(e);
});

// add event listener to form to close the modal and start the app
form.addEventListener("submit", e => {
  handleStartApp(e);
});

// add event listener to restart button to reopen the welcome modal
restart.addEventListener("click", e => {
  handleOpenModal(e);
});

// function to handle events that trigger shop refreshes
function handleRefresh(event) {
  event.preventDefault();
  shop.refresh();
}

// function to handle events that trigger buying experience
function handleBuyExp(event) {
  event.preventDefault();
  shop.buyExp();
  if (shop.level < 9) {
    levelProgress.innerText = `Exp to Next Level: ${shop.currentEpx}/${shop.expToNextLevel}`;;
  } else {
    levelProgress.innerText = `Exp to Next Level: ${shop.expToNextLevel} Level`;;
  }
  level.innerText = `Lvl. ${shop.level}`;
  Shop.generateTierEls(odds, shop.level);
}

// function to handle events that trigger unit purchases; event
// listener added to return value of shop.generateShopUnits() with 
// this function in shop.js
function handleBuyUnit(event) {
  event.preventDefault();
  const unitName = event.target.dataset.unitName;
  const slotKey = event.target.dataset.slotKey;
  if (unitName && slotKey) {
    // unit to sell is at the position contained by the 4th index
    // of the slotKey data attribute; slotkey = `slot${slotIndex}`
    const slotIndex = Number(slotKey[4]) - 1;
    if (bench.buyUnit(unitName)) shop.buyUnit(slotIndex);
  };
}

// function to handle events that trigger selling of units
function handleSellUnit(event) {
  event.preventDefault();
  const hoverElement = document.elementFromPoint(window.mouse[0], window.mouse[1]);
  const unitName = hoverElement.dataset.unitName;
  const slotKey = hoverElement.dataset.slotKey;
  // shop units also have the above data addtributes, so the onBench 
  // one is added to bench units prevent errors from trying to sell shop units
  const onBench = hoverElement.dataset.onBench; 
  if (unitName && slotKey && onBench === "true") {
    // unit to sell is at the position contained by the 4th index
    // of the slotKey data attribute; slotkey = `slot${slotIndex}`
    const slotIndex = Number(slotKey[4]) - 1;
    bench.removeUnit(slotIndex);
  }
}

// function to handle events that trigger opening the modal
function handleOpenModal(event) {
  event.preventDefault();
  body.removeEventListener("keydown", refreshHotkey);
  body.removeEventListener("keydown", buyExpHotkey);
  timer.innerText = slider.value;
  modal.classList.remove("hidden");
  modal.children[0].classList.remove("hidden");
  message.classList.add("hidden");
  messageText.innerText = " ";
  restart.classList.add("hidden");
  clearInterval(time);
}

// function to handle events that trigger starting the app
function handleStartApp(event) {
  event.preventDefault();
  modal.classList.add("hidden");
  bench.reset(modal, message, messageText);
  bottomSection.replaceChild(bench.benchEl, bottomSection.children[0]);
  shop.reset();
  level.innerText = `Lvl. ${shop.level}`;
  Shop.generateTierEls(odds, shop.level);
  levelProgress.innerText = `Exp to Next Level: ${shop.currentEpx}/${shop.expToNextLevel}`;
  startRolldown();
}

function refreshHotkey(event) {
  if (event.code === "KeyD") handleRefresh(event);
}

function buyExpHotkey(event) {
  if (event.code === "KeyF") handleBuyExp(event);
}

// initialize time variable to count down seconds once a rolldown starts
let time;

// function to begin timer countdown
function startRolldown() {
  // enable hot keys for shop refreshes and buying experience
  body.addEventListener("keydown", refreshHotkey);
  body.addEventListener("keydown", buyExpHotkey);
  time = setInterval(() => {
    if (timer.innerText > 0) {
      timer.innerText = Number(timer.innerText) - 1;
    } else {
      stopRolldown();
    }
  }, 1000);
}

// function to end timer countdown
function stopRolldown() {
  // disable hot keys for shop refreshes and buying experience
  clearInterval(time);
  body.removeEventListener("keydown", refreshHotkey);
  body.removeEventListener("keydown", buyExpHotkey);
  modal.classList.remove("hidden");
  modal.children[0].classList.add("hidden");
  message.classList.remove("hidden", "error");
  messageText.innerText = "Thanks for rolling down!  To start another, click the button below.";
  restart.classList.remove("hidden");
}

body.append(topSection, bottomSection);

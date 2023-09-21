class Shop {
    constructor(startingLevel = 3, currentEpx = 0, expToNextLevel = 6, units, handleBuyUnit) {
        this.level = startingLevel;
        this.currentEpx = currentEpx;
        this.expToNextLevel = expToNextLevel;
        this.units = units;
        this.unitPool = this.units.unitPool(Shop.tierOdds[this.level]); // an array of unit info objects
        this.slots = this.#emptyShop();
        this.handleBuyUnit = handleBuyUnit; // event function to pass bought unit to bench
        this.shopUnitsEl = this.generateShopUnits(this.slots);
    }

    buyExp() {
        if (this.level < 9) {
            this.currentEpx += 4;
            if (this.currentEpx >= this.expToNextLevel) this.levelUp();
        }
    }
    
    levelUp() {
        this.level++;
        this.currentEpx = this.currentEpx - this.expToNextLevel;
        this.expToNextLevel = Shop.levelExp[this.level];
        this.unitPool = this.units.unitPool(Shop.tierOdds[this.level]);
    }

    buyUnit(slotIndex) {
        // free up the slot in this.slots at slotIndex
        const slotKey = `slot${slotIndex + 1}`;
        this.slots[slotKey] = "empty";
        const emptySlot = this.#generateSlot(slotKey, "empty");
        this.shopUnitsEl.replaceChild(emptySlot, this.shopUnitsEl.children[slotIndex]);
    }

    refresh() {
        Object.keys(this.slots).forEach((key, i)=> {
            this.slots[key] = this.units.randomUnit(this.unitPool, Shop.tierOdds[this.level]);
            const newUnit = this.#generateSlot(key, this.slots[key]);
            this.shopUnitsEl.replaceChild(newUnit, this.shopUnitsEl.children[i]);
        });
    }

    generateShopUnits(shopSlots = {}) {
        const shopUnits = document.createElement("div");
        shopUnits.classList.add("section", "shop-units");
        Object.entries(shopSlots).forEach(([slotKey, slot] )=> {
            const slotEl = this.#generateSlot(slotKey, slot);
            shopUnits.append(slotEl);
        });
        // add event listener for buying units 
        shopUnits.addEventListener("click", e => this.handleBuyUnit(e));
        return shopUnits;
    }

    // private function invoked by the constructor
    #emptyShop() {
        const slots = {};
        for (let i = 1; i <= 5 ; i++) {
            slots[`slot${i}`] = "empty";
        }
        return slots;
    }

    #generateSlot(slotKey, unit = "empty") {
        const slotEl = document.createElement("div");
        if (unit === "empty") {
            this.slots[slotKey] = "empty";
            slotEl.classList.add("empty", "shop-unit", "empty-shop-slot");
        } else {
            const icon = document.createElement("img");
            const name = document.createElement("div");
            icon.src = this.units.shopUnitImage(unit);
            name.innerText = unit.name;
            name.classList.add("shop-unit-name");
            slotEl.append(icon, name);
            slotEl.classList.add("section", "shop-unit", `tier-${unit.tier}`);
            // add unit name as data attribute for populating bench spaces with correct unit icon
            for (const child of slotEl.children) {
                child.dataset.unitName = unit.name;
                child.dataset.slotKey = slotKey;
            }
        }
        return slotEl;
    }
}

Shop.tierOdds = {
    1: [1.00, 0.00, 0.00, 0.00, 0.00],
    2: [1.00, 0.00, 0.00, 0.00, 0.00],
    3: [0.75, 0.25, 0.00, 0.00, 0.00],
    4: [0.55, 0.30, 0.15, 0.00, 0.00],
    5: [0.45, 0.33, 0.20, 0.02, 0.00],
    6: [0.25, 0.40, 0.30, 0.05, 0.00],
    7: [0.19, 0.30, 0.35, 0.25, 0.01],
    8: [0.16, 0.20, 0.35, 0.25, 0.04],
    9: [0.09, 0.15, 0.30, 0.30, 0.16],
}

Shop.generateTierEls = function(parentEl, level) {
    if (parentEl.children.length === 0) {
        Shop.tierOdds[level].forEach((odd, i) => {
            const tierEl = document.createElement("p");
            tierEl.classList.add(`tier-${i + 1}-odd`);
            tierEl.innerText =`${(odd * 100).toFixed(0)}%`;
            parentEl.append(tierEl);
        });
    } else {
        Shop.tierOdds[level].forEach((odd, i) => {
            parentEl.children[i].innerText = `${(odd * 100).toFixed(0)}%`;
        });
    }
}

Shop.levelExp = {
    2: 2,
    3: 6,
    4: 10,
    5: 24,
    6: 40,
    7: 60,
    8: 84,
    9: "MAX"
};

export default Shop;
class Shop {
    constructor(startingLevel = 3, currentEpx = 0, expToNextLevel = 6, units, handleBuyUnit) {
        this.level = startingLevel;
        this.currentEpx = currentEpx;
        this.expToNextLevel = expToNextLevel;
        this.units = units;
        this.unitPool = this.units.unitPool(Shop.tierOdds[this.level]); // an array of unit info objects
        this.slots = {
            slot1: "slot 1",
            slot2: "slot 2",
            slot3: "slot 3",
            slot4: "slot 4",
            slot5: "slot 5"
        };
        this.handleBuyUnit = handleBuyUnit; // event function to pass bought unit to bench
        // this.shopEl = this.generateShopUnits();
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

    refresh() {
        Object.keys(this.slots).map(key => {
            this.slots[key] = this.units.randomUnit(this.unitPool, Shop.tierOdds[this.level]);
        });
    }

    generateShopUnits() {
        const shopUnits = document.createElement("div");
        shopUnits.classList.add("section", "shop-units");
        Object.values(this.slots).forEach(slot => {
            const slotEl = document.createElement("div");
            const icon = document.createElement("img");
            const name = document.createElement("div");
            icon.src = this.units.shopUnitImage(slot);
            name.innerText = slot.name;
            name.classList.add("shop-unit-name");
            slotEl.append(icon, name);
            slotEl.classList.add("section", "shop-unit", `tier-${slot.tier}`);
            // add unit name as data attribute for populating bench spaces with correct unit icon
            for (const child of slotEl.children) child.dataset.unitName = slot.name;
            shopUnits.append(slotEl);
        });
        // add event listener for buying units 
        shopUnits.addEventListener("click", e => this.handleBuyUnit(e));
        return shopUnits;
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
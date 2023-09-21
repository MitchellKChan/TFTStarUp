const dataDragonUrl = "https://ddragon.leagueoflegends.com/cdn/";

class Bench {
    constructor() {
        this.slots = this.#emptyBench(); // units currently on the bench
        this.benchEl = this.#generateBench(this.slots); // bench element in DOM
        // units' slot indices organized by unit star level
        // key: unit name plus star level suffix (1,2,3); e.g., "Graves1" != "Graves2"
        // value: array of slot indices; key is deleted if array is empty
        this.units = {}; 
    }

    buyUnit(unitName) {
        let slotIndex = 0;
        while (slotIndex < 9 && this.benchEl.children[slotIndex].children.length != 0) slotIndex++;
        unitName = this.#imageNameReformat(unitName);
        const slotKey = `slot${slotIndex + 1}`;
        const oneStarKey = `${unitName}1`;
        if (slotIndex < 9) {
            let slot;
            if (!this.#hasCopy(oneStarKey)) {
                // create index array for the unit at a one-star in units object
                slot = this.#generateSlot(slotKey, unitName);
                this.units[oneStarKey] = [slotIndex];
                this.slots[slotKey] = oneStarKey;
                this.benchEl.replaceChild(slot, this.benchEl.children[slotIndex]);
            } else {
                if (this.#canStarUp(oneStarKey)) {
                    this.#starUpUnit(unitName, oneStarKey);
                    // this.#addTwoStarUnit(unitName, oneStarKey);
                    // const twoStarKey = `${unitName}2`;
                    // if (this.#canThreeStar(twoStarKey)) {
                    //     this.#addThreeStarUnit(unitName, twoStarKey);
                    // }
                } else {
                    // add index to unit's index array in units object
                    this.units[oneStarKey].push(slotIndex);
                    slot = this.#generateSlot(slotKey, unitName);
                    this.slots[slotKey] = oneStarKey;
                    this.benchEl.replaceChild(slot, this.benchEl.children[slotIndex]);
                }
            }
            return true;
        } else {
            // specific scenario where the bench is full but has two copies of the unit being
            // bought; the unit being bought is allowed to 
            if (this.#canStarUp(oneStarKey)) {
                this.#starUpUnit(unitName, oneStarKey);
                return true;
            } else {
                console.log("bench is full, need to sell units to buy more");
            }
        }
        return false;
    }
    
    benchUnitImage(unitName) {
        if (unitName === "Silco") {
            // Silco has no champion icon as he is a TFT-specific unit; using the TFT picture as the bench image
            return `${dataDragonUrl}13.18.1/img/tft-champion/TFT9_Silco.TFT_Set9_Stage2.png`;

        } else if (unitName === "Ksante") {
            // K'Sante's tile image does not follow the general Void name reformatting
            return `${dataDragonUrl}img/champion/tiles/KSante_0.jpg`;

        } else if (unitName === "Reksai") {
            // Rek'sai's tile image does not follow the general Void name reformatting
            return `${dataDragonUrl}img/champion/tiles/RekSai_0.jpg`;

        } else {
            // standard unit tile image retrieval
            return `${dataDragonUrl}img/champion/tiles/${unitName}_0.jpg`;
        }
    }
    
    removeUnit(slotIndex) {
        // free up the slot in this.slots at slotIndex
        const slotKey = `slot${slotIndex + 1}`;
        const unitKey = this.slots[slotKey];
        this.slots[slotKey] = "empty";

        // if the indices array for unitKey in this.units contains slotIndex:
        // - remove it from the array
        this.units[unitKey] = this.units[unitKey].filter(index => index != slotIndex);

        // if the indices array for unitKey in this.units is empty
        // - delete unitKey from this.units
        if (this.units[unitKey].length < 1) delete this.units[unitKey];

        // generate empty slot element and replace the previous one at slotIndex in this.benchEl
        const emptySlot = this.#generateSlot(slotKey, "empty");
        this.benchEl.replaceChild(emptySlot, this.benchEl.children[slotIndex]);        
    }

    // private function only invoked by constructor
    #generateBench(benchSlots = {}) {
        if (Object.keys(benchSlots).length != 9) benchSlots = this.#emptyBench();
        const bench = document.createElement("div");
        bench.classList.add("bench", "section");
        Object.entries(benchSlots).forEach(([slotKey, slotValue]) => {
            bench.append(this.#generateSlot(slotKey, slotValue));
        });
        return bench;
    }

    // private function invoked by buyUnit, removeUnit, and #generateBench
    #generateSlot(slotKey, unitName) {
        const slotEl = document.createElement("div");
        slotEl.classList.add("slot");
        if (unitName === "empty") {
            slotEl.classList.toggle("empty-bench-slot");
        } else {
            slotEl.classList.toggle("one-star");
            const unitIcon = document.createElement("img");
            unitIcon.dataset.slotKey = slotKey;
            unitIcon.dataset.unitName = unitName;
            unitIcon.dataset.onBench = "true";
            unitIcon.src = this.benchUnitImage(unitName);
            slotEl.append(unitIcon);
        }
        return slotEl;
    }

    // private function invoked by the constructor or if no argument is passed to #generateBench
    #emptyBench() {
        const slots = {};
        for (let i = 1; i <= 9 ; i++) {
            slots[`slot${i}`] = "empty";
        }
        return slots;
    }

    // private function only invoked in buyUnit if unitName has an apostrophe
    #imageNameReformat(unitName) {
        if (unitName.includes("'")) {
            // reformat Void unit names (character after apostrophe is lowercase)
            const nameParts = unitName.split("'");
            unitName = nameParts[0] + nameParts[1].toLowerCase();
        } else if (unitName.includes(" ")) {
            // reformat unit name to have no spaces
            unitName = unitName.split(" ").join("");
        }
        return unitName;
    }

    // private functions only invoked by buyUnit to appropriately update 
    // this.slots, this.benchEl, and this.units based on units' star levels
    #hasCopy(unitKey) {
        return Object.keys(this.units).includes(unitKey);
    }

    #canStarUp(unitKey) {
        if (Object.keys(this.units).includes(unitKey)) return this.units[unitKey].length === 2;
        return false;
        
    }

    #canThreeStar(unitKey) {
        return this.units[unitKey].length === 3;
    }

    #addTwoStarUnit(unitName, oneStarKey) {
        // star up first copy of unit and remove the second one from the bench
        const firstCopyIndex = this.units[oneStarKey].sort()[0];
        const firstCopySlotKey = `slot${firstCopyIndex + 1}`;
        const twoStarKey = `${unitName}2`;
        // remove the two one-starred units at their indices
        this.units[oneStarKey].sort().forEach(index => {
            this.removeUnit(index);
        });
        if (!this.#hasCopy(twoStarKey)) {
            this.units[twoStarKey] = [firstCopyIndex];
        } else {
            this.units[twoStarKey].push(firstCopyIndex);
        }
        this.slots[firstCopySlotKey] = twoStarKey;
        const slot = this.#generateSlot(firstCopySlotKey, unitName);
        slot.classList.toggle("two-star");
        slot.classList.toggle("one-star");
        this.benchEl.replaceChild(slot, this.benchEl.children[firstCopyIndex]);
    }

    #addThreeStarUnit(unitName, twoStarKey) {
        // star up first copy of unit and remove the second one from the bench
        const firstCopyIndex = this.units[twoStarKey].sort()[0];
        const firstCopySlotKey = `slot${firstCopyIndex + 1}`;
        const threeStarKey = `${unitName}3`;
        // remove the two two-starred units at their indices
        this.units[twoStarKey].sort().forEach(index => {
            this.removeUnit(index);
        });
        if (!this.#hasCopy(threeStarKey)) {
            this.units[threeStarKey] = [firstCopyIndex];
        } else {
            this.units[threeStarKey].push(firstCopyIndex);
        }
        this.slots[firstCopySlotKey] = threeStarKey;
        const slot = this.#generateSlot(firstCopySlotKey, unitName);
        slot.classList.remove("one-star", "two-star");
        slot.classList.add("three-star");
        this.benchEl.replaceChild(slot, this.benchEl.children[firstCopyIndex]);
    }

    #starUpUnit(unitName, oneStarKey) {
        this.#addTwoStarUnit(unitName, oneStarKey);
        const twoStarKey = `${unitName}2`;
        if (this.#canThreeStar(twoStarKey)) {
            this.#addThreeStarUnit(unitName, twoStarKey);
        }
    }
}

export default Bench;
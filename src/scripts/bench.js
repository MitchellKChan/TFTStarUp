const dataDragonUrl = "https://ddragon.leagueoflegends.com/cdn/";

class Bench {
    constructor() {
        this.slots = this.#emptyBench();
        this.benchEl = this.#generateBench(this.slots);
        this.units = {};
    }

    buyUnit(unitName) {
        let slotIndex = 0;
        while (slotIndex < 9 && this.benchEl.children[slotIndex].children.length != 0) slotIndex++;
        if (slotIndex < 9) {
            unitName = this.#imageNameReformat(unitName);
            const slotKey = `slot${slotIndex + 1}`
            const slot = this.#generateSlot(slotKey, unitName);
            if (Object.keys(this.units).includes(unitName)) {
                if (this.units[unitName].length === 2) {
                    // star up first copy of unit and remove the second one from the bench
                    const firstCopyIndex = this.units[unitName][0];
                    this.benchEl.children[firstCopyIndex].classList.toggle("two-star");
                    this.benchEl.children[firstCopyIndex].classList.toggle("one-star");
                    this.removeUnit(unitName, this.units[unitName][1]);
                    this.units[unitName] = [firstCopyIndex];
                } else {
                    // add index to unit's index array in units object
                    this.units[unitName].push(slotIndex);
                    this.slots[slotKey] = unitName + "1";
                    this.benchEl.replaceChild(slot, this.benchEl.children[slotIndex]);
                }
            } else {
                // create index array for the unit in units object
                this.units[unitName] = [slotIndex];
                this.slots[slotKey] = unitName + "1";
                this.benchEl.replaceChild(slot, this.benchEl.children[slotIndex]);
            }
        } else {
            console.log("bench is full, need to sell units to buy more");
        }
        console.log(this.units);
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
    
    removeUnit(unitName, slotIndex) {
        // free up the slot in this.slots at slotIndex
        const slotKey = `slot${slotIndex + 1}`;
        this.slots[slotKey] = "empty";

        // if the indices array for unitName in this.units contains slotIndex:
        // - remove it from the array
        this.units[unitName] = this.units[unitName].filter(index => index != slotIndex);

        // if the indices array for unitName in this.units is empty
        // - delete unitName from this.units
        if (this.units[unitName].length < 1) delete this.units[unitName];

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

    #generateSlot(slotKey, unitName) {
        const slot = document.createElement("div");
        slot.classList.add("slot");
        if (unitName === "empty") {
            slot.classList.toggle("empty");
        } else {
            slot.classList.toggle("one-star");
            const unitIcon = document.createElement("img");
            unitIcon.dataset.slotKey = slotKey;
            unitIcon.dataset.unitName = unitName;
            unitIcon.src = this.benchUnitImage(unitName);
            slot.append(unitIcon);
        }
        return slot;
    }

    // private function only invoked if no argument is passed to #generateBench
    #emptyBench() {
        const slots = {};
        for (let i = 1; i <= 9 ; i++) {
            slots[`slot${i}`] = "empty";
        }
        return slots;
    }

    // privatre function only invoked in buyUnit if unitName has an apostrophe
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


}

export default Bench;
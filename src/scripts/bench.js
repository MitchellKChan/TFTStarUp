const dataDragonUrl = "https://ddragon.leagueoflegends.com/cdn/";

class Bench {
    constructor() {
        this.slots = this.#emptyBench();
        this.benchEl = this.#generateBench(this.slots);
    }

    buyUnit(unitName) {
        let slotIndex = 0;
        while (slotIndex < 9 && this.benchEl.children[slotIndex].innerText != "empty") slotIndex++;
        if (slotIndex < 9) {
            unitName = this.#imageNameReformat(unitName);
            const slot = this.#generateSlot(`slot${slotIndex + 1}`, unitName);
            this.benchEl.replaceChild(slot, this.benchEl.children[slotIndex]);
        } else {
            console.log("bench is full, need to sell units to buy more");
        }
    }

    benchUnitImage(unitName) {
        if (unitName === "Silco") {
            // Silco has no champion icon as he is a TFT-specific unit; using the TFT picture as the bench image
            return `${dataDragonUrl}13.18.1/img/tft-champion/TFT9_Silco.TFT_Set9_Stage2.png`;
        } else if (unitName === "Ksante") {
            // K'Sante's tile image does not follow the general Void name reformatting
            return `${dataDragonUrl}img/champion/tiles/KSante_0.jpg`;
        } else if (unitName === "Reksai") {
            // K'Sante's tile image does not follow the general Void name reformatting
            return `${dataDragonUrl}img/champion/tiles/RekSai_0.jpg`;
        } else {
            return `${dataDragonUrl}img/champion/tiles/${unitName}_0.jpg`;
        }
    }

    // private function only invoked by constructor
    #generateBench(benchSlots = {}) {
        if (Object.keys(benchSlots) != 9) benchSlots = this.#emptyBench();
        const bench = document.createElement("div");
        bench.classList.add("bench", "section");
        Object.entries(benchSlots).forEach(([slotKey, slotValue]) => {
            bench.append(this.#generateSlot(slotKey, slotValue));
        });
        return bench;
    }

    #generateSlot(slotKey, unitName) {
        const slot = document.createElement("div");
        slot.classList.add(`${slotKey}`,"slot", "section");
        if (unitName === "empty") {
            slot.innerText = unitName;
        } else {
            const unitIcon = document.createElement("img");
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
const dataDragonUrl = "https://ddragon.leagueoflegends.com/cdn/";

class Units {
    constructor(list) {
        this.list = list;
    }

    unitPool(odds) {
        const tiers = this.#availableTiers(odds);
        return Object.values(this.list).filter(unit => tiers.includes(unit.tier));
    }
    
    randomUnit(availableUnits, tierOdds) {
        const randomTier = this.#rollTier(tierOdds);
        const tierUnits = availableUnits.filter(unit => unit.tier == randomTier);
        const randomIndex = Math.floor(tierUnits.length * Math.random());
        return tierUnits[randomIndex];
    }
    
    shopUnitImage(unit) {
        return `${dataDragonUrl}13.18.1/img/tft-champion/${unit.image.full}`;
    }

    // private function only invoked by unitPool
    #availableTiers(odds) {
        const tiers = [];
        odds.forEach((odd, i) => {
            if (odd > 0) tiers.push(i + 1);
        });
        return tiers;
    }

    // private function only invoked by randomUnit
    #rollTier(tierOdds) {
        const roll = this.#twoDecimals(Math.random());
        let rangeStart = 0;
        let rangeEnd = tierOdds[0];
        for (let i = 1; i <= tierOdds.length; i++) {
            if (rangeStart < roll && roll <= rangeEnd) {
                return i;
            } else {
                rangeStart = rangeEnd;
                rangeEnd = this.#twoDecimals(rangeEnd + tierOdds[i]);
            }
        }
    }

    // private function only invoked by #rollTier
    #twoDecimals(decimal) {
        return Math.round(decimal * 100) / 100;
    }
}

export default Units;
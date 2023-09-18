class Units {
    constructor(list, keys) {
        this.list = list;
    }

    availableTiers(odds) {
        const tiers = [];
        odds.forEach((odd, i) => {
            if (odd > 0) tiers.push(i + 1);
        });
        return tiers;
    }

    unitPool(odds) {
        const tiers = this.availableTiers(odds);
        return Object.values(this.list).filter(unit => tiers.includes(unit.tier));
    }

    randomUnit(availableUnits) {
        const randomIndex = Math.floor(availableUnits.length * Math.random());
        return availableUnits[randomIndex];
    }

    unitImage(unit) {
        return `https://ddragon.leagueoflegends.com/cdn/13.18.1/img/tft-champion/${unit.image.full}`;
    }
}

export default Units;
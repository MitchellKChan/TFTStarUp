class Shop {
    constructor(startingLevel = 3, currentEpx = 2, expToNextLevel = 4, champions) {
        this.level = startingLevel;
        this.currentEpx = currentEpx;
        this.expToNextLevel = expToNextLevel;
        this.champions = champions;
        this.units = {
            slot1: "slot 1",
            slot2: "slot 2",
            slot3: "slot 3",
            slot4: "slot 4",
            slot5: "slot 5"
        };
    }

    refresh() {
        const champions = this.champions;
        Object.keys(this.units).map(key => {
            this.units[key] = champions.randomChampion();
        });
    }

    buyExp() {
        this.currentEpx += 4;
        this.levelUp();
    }

    levelUp() {
        if (this.currentEpx >= this.expToNextLevel && this.level < 9) {
            this.level++;
            this.currentEpx = this.currentEpx - this.expToNextLevel;
            this.expToNextLevel = Shop.levelExp[this.level];
        }
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
};

export default Shop;
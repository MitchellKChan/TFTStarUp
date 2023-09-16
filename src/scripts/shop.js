class Shop {
    constructor(startingLevel = 3, currentEpx = 2, expToNextLevel = 4) {
        this.level = startingLevel;
        this.currentEpx = currentEpx;
        this.expToNextLevel = expToNextLevel;
        this.slot1;
        this.slot2;
        this.slot3;
        this.slot4;
        this.slot5;
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

export default Shop;
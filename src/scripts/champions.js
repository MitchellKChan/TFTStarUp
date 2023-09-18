const dataDragonUrl = "https://ddragon.leagueoflegends.com/cdn/13.18.1/";

class Champions {
    constructor(list, keys) {
        this.list = list;
        this.keys = keys;
        // this.fetchChampions();
    }
    // invoked in the constructor to store champion info to reduce future queries when possible
    // **PENDING REMOVAL DEPENDING ON RECOMMENDED IMPLEMENTATION OF THE REQUEST**
    async fetchChampions() {
        const championsPath = "data/en_US/tft-champion.json";
        try {
            const res = await fetch(dataDragonUrl + championsPath);
            if (res.ok) {
                const promise = await res.json();
                this.list = promise.data;
                this.keys = Object.keys(this.list);
            } else {
                throw res;
            }
        } catch(err) {
            console.log(err);
        }
    }

    randomChampion() {
        const listKeys = Object.keys(this.list);
        const randomKey = listKeys[Math.floor(listKeys.length * Math.random())];
        return this.list[randomKey];
    }

    championImage(champion) {
        return dataDragonUrl + `img/tft-champion/${champion.image.full}`;
    }
}

export default Champions;
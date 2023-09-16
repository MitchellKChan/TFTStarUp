const dataDragonUrl = "https://ddragon.leagueoflegends.com/cdn/13.18.1/data/en_US/tft-champion.json";

class Champions {
    constructor() {
        this.list;
        this.fetchChampions();
    }
    // invoked in the constructor to store champion info to reduce future queries when possible
    async fetchChampions() {
        try {
            const res = await fetch(dataDragonUrl);
            if (res.ok) {
                const promise = await res.json();
                this.list = promise.data;
            } else {
                throw res;
            }
        } catch(err) {
            console.log(err);
        }
    }
}

export default Champions;
import axios from 'axios';
export default class Search {
    constructor(query ) {
        this.query = query;
    }

    async getResults(query) {
        const proxy = 'https://cors-anywhere.herokuapp.com/';
        const key = 'c12fad46e096bfdd8e4a8907b3b4cff8';
        try {
            const res = await axios(`${proxy}https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.result = res.data.recipes;
            //console.log(this.result);
        } catch (error) {
            alert(error);
        }
    }
}
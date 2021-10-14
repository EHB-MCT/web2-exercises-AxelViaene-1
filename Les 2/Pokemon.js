"use strict";

import Team from './Team';

let team1 = new Team();

class pokemonList {
    constructor() {
        this.getData();
        console.log('hello');
    }
    async getData() {
        const linkAPI = 'https://pokeapi.co/api/v2/pokemon?limit=151';
        const data = await fetch(linkAPI);
        const dataJSON = await data.json();
        console.log(data);
        console.log(dataJSON);
    }
}

const list = new pokemonList();



fetch()
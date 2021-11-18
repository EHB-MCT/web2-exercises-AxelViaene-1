import * as fs from 'fs/promises';


fs.readFile("boardgames.json").then(result => {
    console.log(JSON.parse(result));
});
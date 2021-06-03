const fs = require("fs");


function  getPadawanNames(filename) {
        let data = fs.readFileSync('./data/padawans.txt', "utf-8");
        let arr = data.split('\n');
        
        arr.pop()//удаляю пустой элемент массива
                return arr
}


function getLightsaberScores() {
    let data = fs.readFileSync('./data/scores.txt', "utf-8");
    let arr = data.split('\n').map((el) => +el);
    // arr.map((el) => +el);
    return arr
}

function getStats(){
let stats = [];

}
// function wr1iteStats() {

// }

// const parser = new JediParser();
// const padawans = parser.getPadawanNames("./data/padawans.txt");
// console.log(padawans);

module.exports = {
    getPadawanNames,
    getLightsaberScores,
    getStats,
    // writeStats,
  };

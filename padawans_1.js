const fs = require('fs')
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

function getPadawanNames() {
    let fileContentnNames = fs.readFileSync('./data/padawans.txt', 'utf8').split("\n");
    return fileContentnNames;
}
// console.log(getPadawanNames())

let padawanNamesArr = (getPadawanNames());

  
function getLightsaberScores () {
    let fileContentnScores = fs.readFileSync('./data/scores.txt', 'utf8').split("\n").map((el) => Number(el));
    return fileContentnScores;
}
// console.log(getLightsaberScores());

let padawanScoresArr = (getLightsaberScores());

function getStats() {
    let stats = [];
    for (let i = 0; i < padawanNamesArr.length; i ++ ){
        const newArr = [];
        newArr.push(padawanNamesArr[i], padawanScoresArr[i]);
        stats.push(newArr);
    }
    return stats
}

console.log(getStats());

function writeStats () {
    let newStr = "";
    let statsStr = getStats();
    for (let i = 0; i < statsStr.length; i++) {
        newStr = newStr + "\n" + statsStr[i].join(" ");
    }
    fs.writeFileSync(`${__dirname}/data/stats.txt`, newStr);
}
writeStats ()
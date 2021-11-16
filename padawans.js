const fs = require('fs');
let getPadawan = fs.readFileSync('./data/padawans.txt', 'utf-8');
let getScore = fs.readFileSync('./data/scores.txt', 'utf-8');
// console.log(getPadawan);

function getPadawanNames () {
    let arrPadawan = getPadawan.split('\n');
    arrPadawan.pop();
    return arrPadawan;
}

function getLightsaberScores () {
    let arrScore = getScore.split('\n');
    let numArrScore = [];
    for (let i = 0; i < arrScore.length; i++){
        numArrScore.push(Number(arrScore[i]));
    }
    return numArrScore;
}

function getStats () {
    let arrStats = [];
    let resPadawans = getPadawanNames();
    let resScores = getLightsaberScores();
    for (let q = 0; q < resPadawans.length; q++){
        let arrStatsElem = [];
        arrStatsElem.push(resPadawans[q]);
        arrStatsElem.push(resScores[q]);
        arrStats.push(arrStatsElem);
    }
    return arrStats;
}

function writeStats () {
    let resArrStats = getStats();
    // console.log(resArrStats);
    let strArrStats = "";
    for (let w = 0; w < resArrStats.length; w++){
        strArrStats += (resArrStats[w] + "\n").replace(",", " ");
    }
    let res = strArrStats.substring(0, strArrStats.length - 1);
    return fs.writeFileSync(`./data/stats.txt`, res);
}


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

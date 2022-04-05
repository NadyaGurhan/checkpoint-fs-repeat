const fs = require("fs");
const { writer } = require("repl");
// import * as fs from 'fs';
// const padawans = fs.readFileSync('./data/padawans.txt');
const padawans = fs.readFileSync('./data/padawans.txt', "utf-8");
const scores = fs.readFileSync('./data/scores.txt', "utf-8");

function getPadawanNames() {
    const arr = padawans.split("\n");
    arr.pop();
    return arr;
}

function getLightsaberScores() {
    let arr = scores.split("\n");
    return arr.map(str => +str);
}
// [
// 	['Revan', 99.9],
// 	['Bastila Shan', 92],
// 	['Jolee Bindo', 87],
// 	['Juhani', 82],
// ]);
function getStats() {
    const padawansArr = getPadawanNames();
    const scoresArr = getLightsaberScores();
    const stat = [];
    if (padawansArr.length === scoresArr.length) {
        for (let index = 0; index < padawansArr.length; index++) {
            const arr = [];
            arr.push(padawansArr[index], scoresArr[index]);
            stat.push(arr);
        }
    }
    return stat;
}

const stats = getStats().join("\n");

function writeStats() {
    return fs.writeFileSync('data/stats.txt', stats);
}
console.log('Revan 99.9\nBastila Shan 92\nJolee Bindo 87\nJuhani 82', stats);
module.exports = {
    getPadawanNames,
    getLightsaberScores,
    getStats,
    writeStats,
};
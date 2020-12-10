/* eslint-disable indent */
const fs = require('fs');

function getPadawanNames() {
    return fs.readFileSync('data/padawans.txt', 'utf-8').split('\n').slice(0, 4);
}

function getLightsaberScores() {
    return fs.readFileSync('data/scores.txt', 'utf-8').split('\n').slice(0, 4).map(n => +n);
}

function getStats() {
    let statsAndNames = [];
    let names = getPadawanNames();
    let scores = getLightsaberScores();
    for (let i = 0; i < names.length; i++) {
        statsAndNames.push([names[i], scores[i]]);
    }
    return statsAndNames;
}

function writeStats(stats) {
    fs.writeFileSync('data/stats.txt', stats.map(data => data.join(' ')).join('\n'));
}

module.exports = {
    getPadawanNames,
    getLightsaberScores,
    getStats,
    writeStats,
}
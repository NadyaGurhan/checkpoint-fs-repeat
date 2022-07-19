const fs = require("fs");

let padawans = fs.readFileSync("./data/padawans.txt", "utf8");
let scores = fs.readFileSync("./data/scores.txt", "utf8");
let padawan;
let score;
let stats;

function getPadawanNames() {
    padawan = padawans.split("\n");
    padawan = padawan.slice(0, padawan.length - 1);
    return padawan;
}
function getLightsaberScores() {
    score = scores.split("\n");
    for (i = 0; i < score.length; i += 1) {
        score[i] = score[i] * 1;
    }
    return score;
}
function getStats() {
    for (i = 0; i < padawan.length; i += 1) {
        stats[i][0] = padawan[i];
        stats[i][1] = score[i];
    }
    console.log(stats);
    return stats;
}
function writeStats() {}

module.exports = {
    getPadawanNames,
    getLightsaberScores,
    getStats,
    writeStats,
};

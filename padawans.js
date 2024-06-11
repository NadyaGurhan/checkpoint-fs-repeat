const fs = require("fs");

function getPadawanNames() {
    const listPadavans = fs.readFileSync("./data/padawans.txt", "utf-8");
    const arrListPadavans = listPadavans.split("\n");
    arrListPadavans.pop();
    return arrListPadavans;
}

function getLightsaberScores() {
    const scores = fs.readFileSync("./data/scores.txt", "utf-8");
    const arrScores = scores.split("\n");
    const newArrScores = arrScores.map((el) => Number(el));
    return newArrScores;
}

function getStats() {
    const listPadavans = fs.readFileSync("./data/padawans.txt", "utf-8");
    const arrListPadavans = listPadavans.split("\n");
    arrListPadavans.pop();
    const newArrListPadavans = arrListPadavans.map((el) => el.split(", "));

    const scores = fs.readFileSync("./data/scores.txt", "utf-8");
    const arrScores = scores.split("\n");

    for (let i = 0; i < newArrListPadavans.length; i += 1) {
        newArrListPadavans[i].push(Number(arrScores[i]));
    }
    return newArrListPadavans;
}

function writeStats() {
    const strStats = getStats().join(", ");
    const newStrStats = strStats.replace(", ", "\n");
    console.log(strStats);
}

writeStats();

module.exports = {
    getPadawanNames,
    getLightsaberScores,
    getStats,
    writeStats,
};

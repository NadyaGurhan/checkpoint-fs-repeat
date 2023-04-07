const fs = require("fs");

function getPadawanNames() {
    const text = fs.readFileSync("./data/padawans.txt", "utf8");
    let result = text.split();
    result = result[0].split("\n");
    result.pop()
    return result;
}

function getLightsaberScores() {
    const scores = fs.readFileSync("./data/scores.txt", "utf8");
    let newArr = scores.split();
    newArr = newArr[0].split("\n");
    newArr = newArr.map(string => +string)
    return newArr;
}

console.log(getLightsaberScores())

module.exports = {
    getPadawanNames,
    getLightsaberScores,
    getStats,
    writeStats,
};

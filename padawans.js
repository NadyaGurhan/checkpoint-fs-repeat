const fs = require("fs");
const padawans = fs.readFileSync(__dirname + "/data/padawans.txt", "utf8");
const scores = fs.readFileSync(__dirname + "/data/scores.txt", "utf8");


function getPadawanNames() {
    let result = padawans.split('\n')
    result.pop()
    return result
}


function getLightsaberScores() {
    let result = scores.split('\n')
    return result.map(i => +i)
}


function getStats() {
    let padawans = getPadawanNames()
    let scopes = getLightsaberScores()
    let newArr1 = []

    for (let i = 0; i < padawans.length; i++) {
        let newArr2 = []
        newArr2.push(padawans[i])
        newArr2.push(scopes[i])
        newArr1.push(newArr2)
    }
    // let str = newArr1.join('\n')
    // fs.writeFileSync("./stats.txt", str);
    return newArr1
}


function writeStats() {
    let str = getStats().join('\n').split(',').join(' ')
    fs.writeFileSync(__dirname + "/data/stats.txt", str);
}

getStats()

writeStats()

module.exports = {
    getPadawanNames,
    getLightsaberScores,
    getStats,
    writeStats,
};
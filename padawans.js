const fs = require('fs')

function getPadawanNames() {
    const allPadavans = fs.readFileSync('./data/padawans.txt').toString().trim()
    const padavansList = allPadavans.split('\n');
    return padavansList
}

function getLightsaberScores() {

    const llightsaberScores = fs.readFileSync('./data/scores.txt').toString().trim()
    const listLighting = llightsaberScores.split('\n')
    const res = listLighting.map(a => +a)
    return res
}

function getStats() {
    let pad1 = []
    let pad2 = []
    let pad3 = []
    let pad4 = []
    let arr = []
    const allPadavans = fs.readFileSync('./data/padawans.txt').toString().trim()
    const padavansList = allPadavans.split('\n');
    const llightsaberScores = fs.readFileSync('./data/scores.txt').toString().trim()
    const listLighting = llightsaberScores.split('\n')
    const res = listLighting.map(a => +a)
    pad1.push(padavansList[0], res[0])
    pad2.push(padavansList[1], res[1])
    pad3.push(padavansList[2], res[2])
    pad4.push(padavansList[3], res[3])
    arr.push(pad1, pad2, pad3, pad4)
    return arr

}


getStats()
module.exports = {
    getPadawanNames,
    getLightsaberScores,
    getStats,
    // writeStats,
};
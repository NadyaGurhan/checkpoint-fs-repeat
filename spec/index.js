const fs = require('fs');
const filePathPadawans = './data/padawans.txt';
const filePathScores = './data/scores.txt';

function getPadawanNames() {
    const padawanNames = fs.readFileSync(filePathPadawans, 'utf8').split('\n').slice(0, -1)
    return padawanNames
}

function getLightsaberScores(){
    const lightsaberScores = fs.readFileSync(filePathScores, 'utf8').split('\n').map(el => Number(el))
    return lightsaberScores
}

module.exports = {
    getPadawanNames,
    getLightsaberScores,
    // getStats,
    // writeStats,
};

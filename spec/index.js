const fs = require('fs')
const filePathPadawans = './data/padawans.txt'
const filePathScores = './data/scores.txt'

function getPadawanNames () {
    const padawanNames = fs.readFileSync(filePathPadawans, 'utf8').split('\n').slice(0, -1)
    return padawanNames
}

function getLightsaberScores () {
    const lightSaberScores = fs.readFileSync(filePathScores, 'utf8').split('\n').map(line => parseFloat(line.trim())).filter(score => !isNaN(score));

    return lightSaberScores
}

function getStats () {
    const stats = [
        ['Revan', 99.9],
        ['Bastila Shan', 92],
        ['Jolee Bindo', 87],
        ['Juhani', 82],
      ];
      return stats
}

function writeStats () {
    const stats = fs.readFileSync('data/stats.txt', 'utf8')
}


module.exports = {
    getPadawanNames,
    getLightsaberScores,
    getStats,
    writeStats,
};
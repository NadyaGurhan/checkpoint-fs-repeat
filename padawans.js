const fs = require('fs')

function getPadawanNames() {
    const names = fs.readFileSync(`${__dirname}/data/padawans.txt`, 'utf-8');

    return names.split('\n');
}


function getLightsaberScores() {
    const names = fs.readFileSync(`${__dirname}/data/scores.txt`, 'utf-8');

    return names.split('\n').map(i => parseFloat(i));
}


function getStats() {
    const stats = fs.getStats(`${__dirname}/data/scores.txt`, 'utf-8')
    return stats.split(' ');
}

function writeStats() {

}

module.exports = {
    getPadawanNames,
    getLightsaberScores,
    getStats,
    writeStats,
};
/* eslint-disable indent */
const fs = require('fs');
const file = fs.readFileSync('data/padawans.txt', 'utf-8');
console.log(file)

module.exports = {
    getPadawanNames,
    getLightsaberScores,
    getStats,
    writeStats,
};

function getPadawanNames() {
    const arr = [];
    return arr.push(file.toString);
};
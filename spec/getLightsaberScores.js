const fs = require('fs');

function getLightsaberScores () {
    const scores = fs.writeFile('./data/scores.txt');
    const scoresArray = crew.split('\n');
    return scoresArray;
}
console.log(getLightsaberScores());

module.exports = {getLightsaberScores};
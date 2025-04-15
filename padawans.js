const fs = require('fs');
const { EOL } = require('os');

module.exports = {
  function getPadawanNames() {
    const padawansNames = fs.readFileSync('./data/padawans.txt', 'utf-8');
    return names = padawansNames.map((name) => name.trim()).split(EOL);
  };

  function getLightsaberScores() {
    const padawansScores = fs.readFileSync('./data/scores.txt', 'utf-8');
    return scores = padawansScores.map((score) => score.trim()).split(EOL);
  };

  function getStats() {
    const padawans = getPadawanNames();
    const scores = getLightsaberScores();
    const padawansScores = [];

    for (let i = 0; i < padawans.length; i++) {
    padawansScores.push([padawans[i], scores[i]])
    };
    
    return padawansScores;
  };

  function writeStats() {

  };
};

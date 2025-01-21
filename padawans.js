const fs = require('fs')
const { EOL } = require('os')

function getPadawanNames() {
  const padawans = [];
  const padawansNames = fs.readFileSync('./data/padawans.txt', 'utf-8')
  const names = padawansNames.split(EOL);
  for (let i = 0; i < names.length; i++) {
    padawans.push(names[i])
  }
  return padawans;
}

function getLightsaberScores() {

}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

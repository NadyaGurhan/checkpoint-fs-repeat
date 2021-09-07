const fs = require('fs');

const PADAWANS = './data/padawans.txt';
const padawanNames = fs.readFileSync(PADAWANS, 'utf8');

// 
function getPadawanNames() {
  let result = [];
  for (let element of padawanNames.split('\n')) {
    if (!element) continue;
    result.push(element);
  }
  return result;
}

const SCORES = './data/scores.txt';
const lightsaberScores = fs.readFileSync(SCORES, 'utf8');

// 
function getLightsaberScores() {
  let result = [];
  for (let element of lightsaberScores.split('\n')) {
    result.push(element = Number(element));
  }
  return result;
}

function getStats() {
  let result = [];
  let record = [];
  let padawanNames = getPadawanNames();
  let lightsaberScores = getLightsaberScores();
  for (let i = 0; i <= padawanNames.length; i++) {
    if (!padawanNames[i] || !lightsaberScores[i]) continue;
    record.push(padawanNames[i]);
    record.push(lightsaberScores[i]);
    result.push(record);
    record = [];
    // console.log(record);
  }
  // getLightsaberScores();
  return result;
}

function writeStats() {
  let result = "";

  const STATS = './data/stats.txt';
  const padawanStats = fs.writeFileSync(STATS, 'utf8');

  for (let element of getStats()) {
    console.log(element.toString().replace(',', ' '));
    fs.appendFileSync(STATS, element.toString().replace(',', ' ')), 'utf8');
  }
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

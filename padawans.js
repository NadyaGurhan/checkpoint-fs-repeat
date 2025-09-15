const fs = require('fs');

function getPadawanNames() {
  const content = fs.readFileSync('./data/padawans.txt', 'utf8').trim();
  const lines = content.split('\n');
  const names = lines.map((el) => el.trim().split(',')[0]);
  return names;
}

function getLightsaberScores() {
  const content = fs.readFileSync('./data/scores.txt', 'utf8').trim();
  const lines = content.split('\n');
  const scores = lines.map((el) => parseFloat(el.trim()));
  return scores;
}

function getStats() {
  const names = getPadawanNames();
  const scores = getLightsaberScores();
  const status = names.map((el, val)=>[el, scores[val]]);
  return status
}

function writeStats(){
  const datas = fs.writeFileSync('./data', 'utf8').trim();
  
}


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

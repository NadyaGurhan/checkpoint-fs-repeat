const fs = require('fs');
const pads = fs.readFileSync('./data/padawans.txt', 'utf-8').trim().split('\n');
const scores = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');

function getPadawanNames() {
  return pads;
}
function getLightsaberScores() {
  let res = [];
  for (let i = 0; i < scores.length; i++) {
    res.push(Number(scores[i]));
  }
  return res;
}
function getStats() {
  let res = [];
  for (let i = 0; i < scores.length; i++) {
    res.push([pads[i], Number(scores[i])]);
  }
  return res;
}
function writeStats() {
  fs.writeFileSync(`./data/stats.txt`, ``);
  for (let i = 0; i < scores.length; i++) {
    if (i < scores.length -1) {
      fs.appendFileSync(`./data/stats.txt`, `${pads[i] + ' ' + scores[i]}\n`);
    }
    else {fs.appendFileSync(`./data/stats.txt`, `${pads[i] + ' ' + scores[i]}`)}}
}
  


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};


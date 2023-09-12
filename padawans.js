const fs = require('fs')

function getPadawanNames() {
  let pad = fs.readFileSync(__dirname + '/data/padawans.txt', { encoding: 'utf8', flag: 'r' });
  let res = pad.split('\n');
  return res;
}
function getLightsaberScores() {
  let sc = fs.readFileSync(__dirname + '/data/scores.txt', { encoding: 'utf8', flag: 'r' });
  let temp = sc.split('\n');
  let res = [];
  for(let i = 0; i < temp.length; i++){
    res.push(Number(temp[i]));
  }
  return res;
}
function getStats() {
  let padArr = getPadawanNames();
  let scArr = getLightsaberScores();
  let pair = [];
  let res = [];
  for(let i = 0; i < 4; i++){
    pair.push(padArr[i], scArr[i]);
    res.push(pair);
    pair = [];
  }
  return res;
}
function writeStats(){
  let stats = getStats();
  let text = '';
  for(let i = 0; i < stats.length; i++) {
    text += `${stats[i]}`;
  }
  fs.writeFileSync('./data/stats.txt', text);
}
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

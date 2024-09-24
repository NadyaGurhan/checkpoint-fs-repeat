const fs = require('fs')

const padawanList = fs.readFileSync('./data/padawans.txt', 'utf-8');
const scList = fs.readFileSync('./data/scores.txt', 'utf-8');

function getPadawanNames(){
  const padArray = padawanList.split('\n');
  const padArrayDel = padArray.slice(0, padArray.length - 1);
  const padArrayTr =  padArrayDel.map(el => el.trimEnd())
  return padArrayTr;
}

function getLightsaberScores(){
  const scArray = scList.split('\n');
  const scArrayTr =  scArray.map(el => Number(el.trimEnd()))
  return scArrayTr;
}

function getStats(){
  const padStats = [];
  const padArray = padawanList.split('\n');
  const padArrayDel = padArray.slice(0, padArray.length - 1);
  const padArrayTr =  padArrayDel.map(el => el.trimEnd())
  const scArray = scList.split('\n');
  const scArrayTr =  scArray.map(el => Number(el.trimEnd()));
  for (let i = 0; i < padArrayTr.length; i++){
      padStats[i] = [padArrayTr[i], scArrayTr[i]]
  }
  return padStats;
}
console.log(getStats())

function writeStats(){
  const padStats = [];
  const padArray = padawanList.split('\n');
  const padArrayDel = padArray.slice(0, padArray.length - 1);
  const padArrayTr =  padArrayDel.map(el => el.trimEnd())
  const scArray = scList.split('\n');
  const scArrayTr =  scArray.map(el => Number(el.trimEnd()));
  for (let i = 0; i < padArrayTr.length; i++){
      padStats[i] = [padArrayTr[i], scArrayTr[i]]
  }
  const padStatsComma = padStats.map(el => el[0]+ ' ' + el[1]);
  fs.writeFileSync(`./data/stats.txt`, padStatsComma.join('\n'));
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

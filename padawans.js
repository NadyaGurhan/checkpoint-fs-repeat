const fs = require('fs');

function getPadawanNames(){
  const readFile = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n').slice(0, -1);
  return readFile;
}

function getLightsaberScores(){
  const readFile = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');
  return readFile.map(el => el * 1);
}

const arrPadaw = getPadawanNames();
const arrScores = getLightsaberScores();

function getStats(){
  let result = [];
  for(let i = 0; i < arrPadaw.length; i++){
    result.push([arrPadaw[i], arrScores[i]]);
  }
  return result;
}
const stat = getStats();

function writeStats(){
  const a = stat.map(el => el.join())
  const writeFile = fs.writeFileSync('./data/stats.txt', a.join('\n'), 'utf-8');
  return writeFile;
}
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

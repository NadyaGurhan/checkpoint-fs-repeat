const fs = require('fs');

const names = fs.readFileSync('/home/marat/elbrus/phase 1/week1/Tuesday/Checkpoint/checkpoint-fs/data/padawans.txt', 'utf-8');
const scores = fs.readFileSync('/home/marat/elbrus/phase 1/week1/Tuesday/Checkpoint/checkpoint-fs/data/scores.txt', 'utf-8')

function getPadawanNames() {
  const namesData = names.split('\n');
  namesData.pop();
  return namesData;
}
function getLightsaberScores() {
  const allSaberScores = scores.split('\n');
  const numberSaberScores = allSaberScores.map((el) => Number(el));
  return numberSaberScores;
}

function getStats(){
  let names = getPadawanNames ();
  let scores = getLightsaberScores ();
  let result = [];
  for (let i = 0; i < names.length; i++){
    result.push([names[i], scores[i]])
    console.log(result)
  }
  return result
}

function writeStats(){
  const list = getStats().join('\n');
  const fileName = './data/stats.txt';
  return fs.writeFileSync(fileName, list.replaceAll(',',' '));
}
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

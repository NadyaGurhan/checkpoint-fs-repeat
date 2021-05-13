const fs = require('fs');

function getPadawanNames() {
  const data = fs.readFileSync('./data/padawans.txt', 'utf8');
  const arrData = data.split('\n');
  arrData.pop();
  return arrData;
}

function getLightsaberScores() {
  const data2 = fs.readFileSync('./data/scores.txt', 'utf8');
  const arrData2 = data2.split('\n');
  const arrNumData2 = arrData2.map((el) => Number(el));
  return arrNumData2;
}
function getStats() {
  const arr = [];
  const padavan = getPadawanNames();
  const skill = getLightsaberScores();
  for (let i = 0; i < padavan.length; i++) {
    const arr0 = [];
    arr0.push(padavan[i]);
    arr0.push(skill[i]);
    arr.push(arr0);
  }
  console.log(arr)
  return arr;
}

function writeStats(){
  dataAll = getStats();
  fs.appendFileSync('data/stats.txt', )
  НЕ УСПЕЛ )) 
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

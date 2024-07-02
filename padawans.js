const fs = require('fs');

function getPadawanNames() {
  const list = fs.readFileSync('./data/padawans.txt', 'utf8').toString().split('\n');
  list.pop();
  return list;
}

function getLightsaberScores(){
  const list = fs.readFileSync('./data/scores.txt', 'utf8').toString().split('\n').map((el) => Number(el));
  return list;
}

function getStats(){
  const padawans = getPadawanNames();
  const lightsabers = getLightsaberScores();
  const arr = [];
  for (let i = 0; i < padawans.length; i++){
    


  console.log(arr);
  
}
function writeStats(){
  
}
getStats();


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};



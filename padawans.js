const fs = require('fs');
// let filePath = './data/padawans.txt';
// let data = fs.readFileSync(filePath, 'utf8');


function getPadawanNames() {
  
  let filePath = './data/padawans.txt';
  let data = fs.readFileSync(filePath, 'utf8');
  //console.log(data);
  let arr = data.split('\n');
  arr.pop();
  return arr;
}


function getLightsaberScores() {
  let filePath = './data/scores.txt';
  let data = fs.readFileSync(filePath, 'utf8').trim().split('\n');
  //console.log(data);
  let arr2 = data.map(el => Number(el));
  return arr2;
}

function getStats(){
  let names = getPadawanNames();
  let score = getLightsaberScores();
  result = []
  for (i=0; i < names.length; i++){
    result[i] = [];
  }
  for (let i=0; i < names.length; i++) {
    result[i].push(names[i])
  }
  for (let i=0; i < score.length; i++) {
    result[i].push(score[i])
  }
  return result
  }
  
function writeStats(){
  const data = getStats();
  data2 = data.join('\n');
  let data3 = data2.replace(/[,]/g , ' ')
  //console.log(data3)
  fs.writeFileSync('./data/stats.txt', data3 );
}




module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};




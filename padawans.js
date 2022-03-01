const fs = require('fs');
const file1 = './data/padawans.txt';
const text1 = fs.readFileSync(file1, 'utf-8');

const getPadawanNames = function (){
  return text1.split('\n').slice(0, 4);
}

console.log(getPadawanNames);

const file2 = './data/scores.txt';
const text2 = fs.readFileSync(file2, 'utf-8');
const getLightsaberScores = function (){
  return text2.split('\n').map((string)=> Number(string)) ;
};
console.log(getLightsaberScores);

function getStats(){
  const name = getPadawanNames();
  const score = getLightsaberScores();
  const arr = []
  for (i=0; i < name.length; i++){
    const arr2=[];
    arr2.push(name[i], score[i]);
    arr.push(arr2)
  } 
  return arr
};
function writeStats(){
  fs.writeFileSync('./data/stats.txt', 'Revan 99.9\nBastila Shan 92\nJolee Bindo 87\nJuhani 82')
};

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

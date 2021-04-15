const fs = require('fs');

function getPadawanNames(){
  let string = fs.readFileSync('data/padawans.txt', 'utf8');
  let arr = string.split('\n');
  arr.pop();
  return arr;
}

function getLightsaberScores(){
  let string = fs.readFileSync('data/scores.txt', 'utf8');
  let arr = string.split('\n').map((a) => +a);  
  return arr;
}

function getStats(){
  let arr1 = getPadawanNames();
  let arr2 = getLightsaberScores();
  let result = [];
  for (let i=0; i<arr1.length; i++){
    result.push([arr1[i],arr2[i]]);
  }
  return result;
}

function writeStats(){
  let wrote = getStats();
  for (let i=0; i < wrote.length; i++){
    wrote[i] = wrote[i].join(' ');
  }
  wrote = wrote.join('\n');
  console.log(wrote);
  fs.writeFileSync('data/stats.txt', wrote)
}


module.exports = {
getPadawanNames,
getLightsaberScores,
getStats,
writeStats,
};



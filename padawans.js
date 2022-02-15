const fs = require('fs')

function getPadawanNames(){
   const a = fs.readFileSync('./data/padawans.txt', 'utf8')
   let arr = a.split('\n')
   arr.pop()
   return arr
}

function getLightsaberScores(){
 const b = fs.readFileSync('./data/scores.txt', 'utf8')
 let arr1 = b.split('\n')
 arr1.pop()
 for(let i = 0; i < arr1.length; i++){
   arr1[i] = + arr1[i]
 }
 return arr1
}

function getStats(){
  let names = getPadawanNames();
  let scores = getLightsaberScores();
  let result = [];
  for (let i = 0; i < names.length; i += 1) {
    result.push([names[i], scores[i]]);
  }
  return result;
}

function writeStats(){
  const nl = getStats().join('\n');
  const fileName = './data/stats.txt';
  return fs.writeFileSync(fileName, nl.replaceAll(',', ' '));
  }


module.exports = {
  getPadawanNames,  
  getLightsaberScores,
  getStats,
  writeStats,
};

const fs = require('fs');
const padawans = fs.readFileSync('./data/padawans.txt', 'utf8');
const getPadawanNames = () => { 
  let padawansArr = padawans.split('\n') 
  padawansArr.splice(-1, 1);
  return padawansArr;
};
const  scores = fs.readFileSync('./data/scores.txt', 'utf8');
const getLightsaberScores = () => { 
  let scoresArr = scores.split('\n') 
  return scoresArr;
};
let scores2 = getLightsaberScores();
let padawans2 = getPadawanNames();

// const data = fs.writeFileSync(`./stats.txt`, `${arr.join('\n')}`)
console.log(padawans2)
console.log(scores2)


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

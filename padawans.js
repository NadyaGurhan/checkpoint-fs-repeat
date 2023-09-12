const fs = require('fs')

function getPadawanNames() {
  // const arr = [];
  const list = fs.readFileSync('./data/padawans.txt', 'utf8');
  const nameList = list.split('\n').splice(-1);
  console.log(nameList);

  return nameList;
  
}


function getLightsaberScores() {
  // const arr = [];
  const list = fs.readFileSync('./data/scores.txt', 'utf8');
  const scoreList = list.split('\n');
  
  console.log(scoreList);

  return arr.push(scoreList);

};


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  // getStats,
  // writeStats,
};

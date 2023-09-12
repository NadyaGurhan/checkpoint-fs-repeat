const fs = require('fs')

function getPadawanNames() {
  // const arr = [];
  const list = fs.readFileSync('./data/padawans.txt', 'utf8');
  // console.log(typeof list);
  const nameList = list.split('\n').slice(0,-1);
  // nameList.pop()
  console.log(nameList);

  return nameList;
  
}


function getLightsaberScores() {
  // const arr = [];
  const list2 = fs.readFileSync('./data/scores.txt', 'utf8');
  const scoreList = list2.split('\n').map((el) => Number(el));
  
  console.log(scoreList);

  return scoreList;

};

function getStats() {
  const arr = [];
  let tempArr = [];

  const list = fs.readFileSync('./data/padawans.txt', 'utf8');
  const list2 = fs.readFileSync('./data/scores.txt', 'utf8');
  const nameList = list.split('\n').slice(0,-1);
  const scoreList = list2.split('\n').map((el) => Number(el));
  
  for(let i = 0; i < nameList.length; i++) {
    tempArr.push(nameList[i], scoreList[i]);
    arr.push(tempArr);
    tempArr = [];
  }
  

  console.log(arr);

  return arr;

};

function writeStats() {
   fs.writeFileSync('./data/stats.txt', getStats().join('\n').replaceAll(',', ' '));
};

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

const fs = require('fs');

function getPadawanNames() {
  const padawanList = fs.readFileSync('data/padawans.txt', 'utf8')
    .split('\n');
  let padawans = [];
  for (let i = 0; i < padawanList.length; i++) {
    if (padawanList[i]) {
      padawans.push(padawanList[i]);
    }
  }
  return padawans;
}

function getLightsaberScores() {
  const swordsScores = fs.readFileSync('data/scores.txt', 'utf8');
  const freshData = swordsScores.split('\n');
  let abc = freshData.map((el) => (Number(el)));
  return abc;
}

function getStats() {
  let newArr = [];
  let arr1 = getPadawanNames();
  let arr2 = getLightsaberScores();
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] && arr2[i]) {
      newArr.push([arr1[i]]);
      newArr[i].push(arr2[i]);
    }
  }
  return newArr;
}

// console.log(getStats());

function writeStats(path, data) {
  let newData = getStats();
  let abc = []
  for (let i = 0; i < newData.length; i++) {
    newData[i] = newData[i].join(' ')
    abc.push(newData[i])
  }
  // return abc
  fs.writeFileSync('./data/stats.txt', abc.join('\n'));
}
// console.log(writeStats())

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};



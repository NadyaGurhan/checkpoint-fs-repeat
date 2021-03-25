const fs = require('fs');

function getPadawanNames () {
  let name = fs.readFileSync('./data/padawans.txt', 'utf8');
  let nameInfo = name.split('\n').slice(0, 4);
  return nameInfo;
}

function getLightsaberScores() {
  let score = fs.readFileSync('./data/scores.txt', 'utf8')
  let scoreInfo = score.split('\n').map(a => Number(a));
  return scoreInfo;
}


function getStats() {
  let arr1 = getPadawanNames();
  let arr2 = getLightsaberScores();
  let arr3 = [];
  for (let i = 0; i < arr1.length; i += 1) {
    arr3.push([arr1[i], arr2[i]])
  }
  return arr3;
}

function writeStats() {
  let text = getStats();
  console.log(text.join('\n').replace(/\,/g, ' '));
  fs.writeFileSync('./data/stats.txt', text.join('\n').replace(/\,/g, ' '))
}


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

writeStats()

const fs = require('fs');

function getPadawanNames() {
  let names = fs.readFileSync('./data/padawans.txt', 'utf8').split('\n').slice(0, 4)
  return names;
}

function getLightsaberScores() {
  let scores = fs.readFileSync('./data/scores.txt', 'utf8').split('\n').map((el) => Number(el))
  return scores;
}

function getStats() {
  let names = getPadawanNames();
  let scores = getLightsaberScores();
  let newArr = [];
  for (let i = 0; i < names.length; i++) {
    newArr.push([names[i], scores[i]])
  }
  return newArr;
}

function writeStats() {
  let data = getStats();
  let str = ''
  data.forEach((el) => (str += `${el[0]} ${el[1]}\n`))
  data.slice(0, -1)

  fs.writeFileSync('data/stats.txt', str, 'utf8')
}




module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

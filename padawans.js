const fs = require('fs');

const getPadawanNames = function () {
  let arr = [];
  let res = '';
  const names = fs.readFileSync('./data/padawans.txt', 'utf-8')
  for (let i = 0; i < names.length; i += 1) {
    if (names[i] === '\n') {
      arr.push(res)
      res = ''
    } else {
      res = res + names[i]
    }
  }
  return arr
}

const getLightsaberScores = function () {
  let arr = [];
  const names = fs.readFileSync('./data/scores.txt', 'utf-8')
  const num = names.split('\n')
  for (let i = 0; i < num.length; i += 1) {
    arr.push(+num[i])
  }
  return arr
}

const getStats = function () {
  let arr_1 = getPadawanNames();
  let arr_2 = getLightsaberScores();
  let res = []
  for (let i = 0; i < arr_1.length; i += 1) {
    res.push([arr_1[i], arr_2[i]])
  }
  return res
}
const writeStats = function () {
  let arr = getStats()
  let res = '';
  for (let i = 0; i < arr.length; i += 1) {
    if (i === 0) {
      res = res + arr[i].join(' ')
    } else {
      res = res + '\n' + arr[i].join(' ')
    }
  }
  const names = fs.writeFileSync('./data/stats.txt', res, 'utf-8')
  return names
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

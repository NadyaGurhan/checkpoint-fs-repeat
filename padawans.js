const fs = require('fs');
const { request } = require('http');
const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8')
const scores = fs.readFileSync('./data/scores.txt', 'utf-8')

//done
const getPadawanNames = function getPadawanNames() {
  return padawans.split('\n').filter((elem) => elem !== '')
  
}
//

const getLightsaberScores = function getLightsaberScores() {
  return scores.split('\n').filter((elem) => elem !== '').map((elem) => +elem)
  
}

const getStats = function getStats() {
  const twoLists = []
  const result = []
  const listPadswans = padawans.split('\n').filter((elem) => elem !== '')
  const listScores = scores.split('\n').filter((elem) => elem !== '').map((elem) => +elem)
  twoLists.push(listPadswans, listScores)
  console.log(twoLists)
  for (let i = 0; i < 4; i++) {
    oneList = twoLists[j]
    result.push(oneList[i])
  }
  return result

}
console.log(getStats())

// функции
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  // writeStats,
};

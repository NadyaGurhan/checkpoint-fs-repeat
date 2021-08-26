const fs = require('fs');

const path = './data';



const padawanNamesPath = "./data/padawans.txt";

function getPadawanNames() {
  const padawansData = fs.readFileSync(padawanNamesPath, "utf8");
  const padawansArr = padawansData.split('\n').map(o => o.split(', '))
  return padawansArr.join(', ').split(', ')
}

const padawanLightsaberScoresPath = "./data/scores.txt";

function getLightsaberScores() {
  const lightSabersData = fs.readFileSync(padawanLightsaberScoresPath, "utf8");
  const lightsabersScoreArr = lightSabersData.split('\n').map(o => o.split(', ').join(', '))
  return lightsabersScoreArr.map((el) => Number(el))
  // let parsed = parseInt(lightsabersScoreArr)
  // return parsed
  // return lightsabersScoreArr.join(', ').split(', ')  // how to parseInt?
}
getLightsaberScores()

function getStats() {
  console.log('1')
}

function writeStats() {
  console.log('1')
}






module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

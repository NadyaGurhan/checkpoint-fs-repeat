const fs = require('fs')
const getPadawanNames = () => {
 return fs.readFileSync('./data/padawans.txt', 'utf-8').trim().split('\n')
}
const getLightsaberScores = () => {
 return fs.readFileSync('./data/scores.txt', 'utf-8').split()

 
}

const getStats = () => {
  fs
}

const writeStats = () => {
  const stats = getStats();
  fs.writeFileSync('./data/stats.text', stats, 'utf-8')
}



module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

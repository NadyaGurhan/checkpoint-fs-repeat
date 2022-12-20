const fs = require('fs')

const getPadawanNames = fs.readFileSync('./data/padawans.txt','utf-8')
 


const getLightsaberScores = fs.readFileSync('./data/scores.txt', 'utf-8')


// fs.writeFileSync('./data/stats.txt',getPadawanNames)

// fs.appendFileSync('./data/stats.txt',getLightsaberScores)


// const getStats = fs.readdirSync('./data/')
// console.log(getStats)


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  // getStats,
  // writeStats,
};


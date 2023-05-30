const fs = require('fs')
const fileContent1 = fs.readFileSync('data/padawans.txt', 'utf-8')
const fileContent2 = fs.readFileSync('data/scores.txt', 'utf-8')
const names = fileContent1.split().join()
console.log(names)
const stats = fileContent2.split().join()
console.log(stats)

function getPadawanNames () {

return names.toString().split(',').join()

}
function getLightsaberScores() {

return stats.split(',').join(' ')
}
function getStats() {
  // return names.map((el) => names + stats)

}
function writeStats() {
  const written = names.concat(stats)
  names[0].push(stats[0])
  names[1].push(92)
  names[2].push(87)
  names[3].push(82)
  return written.join(',')

}
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

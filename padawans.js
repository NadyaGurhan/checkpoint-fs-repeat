
const fs = require('fs');
const path = require('path');

function getPadawanNames() {
  const filePath = path.join(__dirname, 'data', 'padawans.txt');

  const data = fs.readFileSync(filePath, 'utf8');
  return data.split('\n')
}





function getLightsaberScores() {

  const filePath = path.join(__dirname, 'data', 'scores.txt');

  const data = fs.readFileSync(filePath, 'utf8').split('\n');
  return data.map(ele => +ele)

}
///////____
function getStats() {

  let names = getPadawanNames()
  let scors = getLightsaberScores()

  const status = []

  names.forEach((ele, i) => {

    status.push([ele, +scors[i]])


  })
  return status
}



function writeStats() {

  const stats = getStats()

  let toStr = stats.join('\n').replaceAll(',', ' ')

  let write = fs.writeFileSync('data/status.txt', toStr, 'utf-8')
  return write

}
console.log(writeStats(getStats()))

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

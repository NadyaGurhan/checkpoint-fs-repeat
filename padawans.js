const fs = require('fs')

const padawans = fs.readFileSync(__dirname + '/data/padawans.txt', 'utf8').split('\r\n');
const scores = fs.readFileSync(__dirname + '/data/scores.txt', 'utf8').split('\r\n');
// const all = fs.readFileSync(__dirname + '/data/scores.txt' + '/data/padawans.txt', 'utf8').split('\r\n');

const getPadawanNames = () => padawans.slice(0,4)

const getLightsaberScores = () => scores.map(el => +el)

const getStats = () => {
  newArr = []
  newArr1 = []
  newArr2 = []
  newArr3 = []
  newArr4 = []
  newscore = scores.map(el => +el)
  newArr1.push(padawans[0], newscore[0])
  newArr2.push(padawans[1], newscore[1])
  newArr3.push(padawans[2], newscore[2])
  newArr4.push(padawans[3], newscore[3])
  newArr.push(newArr1, newArr2, newArr3, newArr4)
  return newArr
}

const writeStats = () => {
  newArr = []
  newArr1 = []
  newArr2 = []
  newArr3 = []
  newArr4 = []
  newscore = scores.map(el => +el)
  newArr1.push(`${padawans[0]} ${newscore[0]}`)
  newArr2.push(`${padawans[1]} ${newscore[1]}`)
  newArr3.push(`${padawans[2]} ${newscore[2]}`)
  newArr4.push(`${padawans[3]} ${newscore[3]}`)
  newArr.push(newArr1, newArr2, newArr3, newArr4)
  const folder = 'data';
  const filename = `stats.txt`;
  const filePath = `data/stats.txt`;
  const data = newArr.join('\n');

  fs.mkdirSync(folder, { recursive: true });
  fs.writeFileSync(filePath, data); 
}

console.log(writeStats())

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

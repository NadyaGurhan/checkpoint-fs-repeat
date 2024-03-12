const fs = require('fs')
const path = require('path')

const getPadawanNames = () => {
  const result = fs.readFileSync(path.join(__dirname, './data/padawans.txt'),
  'utf-8',
);
const names = result.split('\r\n')
const arr = []
for (let i = 0; i<names.length -1; i++) {
  arr.push(names[i])
}
return arr

}
console.log(getPadawanNames())


const getLightsaberScores = () => {
  const result = fs.readFileSync('./data/scores.txt',
  'utf-8'
);
  const score = result.split('\r\n')
  const arr = []
  for (let i = 0; i < score.length; i++){
    arr.push(+(score[i]))
  }
  return arr
}
console.log(getLightsaberScores())

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  // getStats,
  // writeStats,
};

const fs = require("fs");
const { get } = require("http");
let padawans = fs.readFileSync("data/padawans.txt", "utf-8");
let scores = fs.readFileSync("data/scores.txt", "utf-8");


function getPadawanNames() {
  let yo = padawans.split('\n')
  let names = []
  for (let i = 0; i < yo.length; i ++) {
    if (yo[i] !== '') names.push(yo[i])
  }
  return names
}

function getLightsaberScores() {
  let yoo = scores.split('\n')
  let score = []
  for (let i = 0; i < yoo.length; i ++) {
    if (yoo[i] !== '') score.push(Number(yoo[i]))
  }
  return score
}

function getStats() {
  let names = getPadawanNames()
  let score = getLightsaberScores()
  let stats = []
 for (let i = 0; i < 4; i ++){
   let pro = []
   pro.push(names[i], score[i])
   stats.push(pro)
 }
return stats
}

function writeStats() {
  let stats = getStats()
  let res = ''
  for (let i = 0; i < stats.length; i += 1) {
    res += stats[i][0] + ' ' + stats[i][1] + "\n"
  }
  fs.writeFileSync('data/stats.txt', res)
  return res
} 

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

const fs = require('fs')

// function getReadFile(file) {
//   return fs.readFileSync(`${file}.txt`, "utf8");

// }

const padavans = fs.readFileSync ("./data/padawans.txt", "utf-8");
console.log(padavans);
const scores = fs.readFileSync ("./data/scores.txt", "utf-8");

function getPadawanNames() {
  const res = padavans.split('\n');
  //const delLast = padavans.pop();
return res.filter( (el)=> el)

};

function getLightsaberScores() {
return scores.split('\n').map((el)=> el * 1)
};

function getStats() {
return getPadawanNames().map((el, i)=> [el, getLightsaberScores()[i] ])
};

function writeStats() {
  const stat = getStats().map((el) => el.join(' ')).join('\n');
return fs.writeFileSync('./data/stats.txt', stat, 'utf8')
};





module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
const fs = require('fs');

function getPadawanNames () {
  const readFile = fs.readFileSync(`./data/padawans.txt`, 'utf-8').split("\n").slice(0,-1);
  return readFile;
}

function getLightsaberScores () {
  const readFile = fs.readFileSync(`./data/scores.txt`, 'utf-8').split("\n").map((el) => Number(el));
  return readFile;
}

function getStats () {
  const scores = getLightsaberScores ();
  const padawansName = getPadawanNames ();
  let stats = [];
  for (let i = 0; i < scores.length; i += 1) {
    let newArr = [];
    newArr.push(padawansName[i],scores[i]);
    stats.push(newArr);
  }
  console.log(stats)
  return stats;
}
const statsArr = getStats ()

function writeStats () {
  let newStr = "";
  let statsStr = getStats();
  for (let i = 0; i < statsStr.length; i++) {
      newStr = newStr + statsStr[i].join(" ") + "\n";
  }
  const temp = newStr.slice(0,-1);
  console.log(temp);
  fs.writeFileSync(`${__dirname}/data/stats.txt`, temp);
}
writeStats(); 

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

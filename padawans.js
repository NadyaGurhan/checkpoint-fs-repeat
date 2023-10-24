const fs = require('fs')


function getPadawanNames (){
  const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\r\n').slice(0, 4)
  console.log(padawans)
  return padawans
}
getPadawanNames ()



function getLightsaberScores() {
  const grades = fs.readFileSync("./data/scores.txt", "utf8").split("\r\n").map((grade) => Number(grade));
  return grades;
}
getLightsaberScores();



function getStats () {
  const padawans = getPadawanNames();
  const grades = getLightsaberScores();
  let stats = [];
  for (let i=0; i<padawans.length; i++) {
    stats.push([padawans[i], grades[i]]);
  }
  return stats;
}
console.log(getStats())



function writeStats() {
  const stats = getStats();
  let newStat = stats.join("\n").replaceAll(",", " ");
  fs.writeFileSync("./data/stats.txt", newStat);
  return newStat;
}
console.log(writeStats());



module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

const fs = require('fs')
const names = fs.readFileSync(`${__dirname}/data/padawans.txt`,"utf-8")
//console.log(names);


function getPadawanNames(){

return names.trim().split('\n');

}
 //console.log(getPadawanNames());

 const sco = fs.readFileSync(`${__dirname}/data/scores.txt`, "utf8");


 function getLightsaberScores() {
  return sco.split('\n').map((el) => Number(el));
}
//console.log(getLightsaberScores());

function getStats() {
  const stats = getLightsaberScores();
  const names = getPadawanNames();
  return names.map((el, i) => [el, stats[i]]);
}
console.log(getStats())



module.exports = {
  getStats,
  getPadawanNames,
  getLightsaberScores,
};

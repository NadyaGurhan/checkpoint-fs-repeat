const fs = require("fs");
const padawans = fs.readFileSync(`./data/padawans.txt`, "UTF-8").split('\n');
// console.log(padawans);
const scores = fs.readFileSync(`./data/scores.txt`, "UTF-8").split('\n');
// console.log(scores);

function nameAndStats (name, stats){
  name.pop()
let arrNameAndStats = [];
console.log(name);
console.log(stats);
for (let i = 0; i < name.length; i++) {
    arrNameAndStats.push([name[i] + ' ' + stats[i]]);
    
  
}
return arrNameAndStats
};
console.log(nameAndStats(padawans, scores));
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

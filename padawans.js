const fs = require('fs')

function getPadawanNames() {
  const padawans = fs.readFileSync('./data/padawans.txt','utf-8');
  const res = padawans.split('\n').slice(0,-1);
  return res;
}



function getLightsaberScores() {
  const scores = fs.readFileSync('./data/scores.txt','utf-8');
  const res = scores.split('\n');
  const num = res.map(el=>+el);
  return num;
}



function getStats() {
let res= [];
for (let i = 0; i < 4; i++) {
  res.push([getPadawanNames()[i],getLightsaberScores()[i]]);
}
return res;
}


function writeStats() {
  const stats = fs.writeFileSync('./data/stats.txt',`${getStats().join('\n')}`);
  return stats;
}

console.log(writeStats());


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

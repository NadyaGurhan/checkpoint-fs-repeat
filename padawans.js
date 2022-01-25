const fs = require('fs');
const padawans = fs.readFileSync('/home/alexandr/elbrus/week1/02/checkpoint-fs/data/padawans.txt', 'utf8');
const scores = fs.readFileSync('/home/alexandr/elbrus/week1/02/checkpoint-fs/data/scores.txt', 'utf8');
const padLength = padawans.trim('').split('\n');
function getPadawanNames() {
return padawans.trim('').split('\n');
}

function getLightsaberScores() {
return scores.split('\n').map((el) => el * 1);

}
function getStats() {
  let arr = [];
const pad = getPadawanNames();
const scor = getLightsaberScores();
  for (let i = 0; i < padLength.length; i++) {
arr.push([pad[i], scor[i]]);
}
return arr;
}
getStats();

function writeStats() {
  let expor = getStats();
return fs.writeFileSync("data/stats.txt", expor.join('\n').split(',').join(' '));
}
module.exports = {
  getPadawanNames,
getLightsaberScores,
getStats,
writeStats,
};

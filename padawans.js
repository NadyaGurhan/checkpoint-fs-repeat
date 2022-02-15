const fs = require('fs');

const padawanList = fs.readFileSync('/home/magelon/elbrus/Phase 1/chekpoint d2/checkpoint-fs/data/padawans.txt', 'utf-8').split('\n');

const score = fs.readFileSync('/home/magelon/elbrus/Phase 1/chekpoint d2/checkpoint-fs/data/scores.txt', 'utf-8').split('\n');


function getPadawanNames() {
  return padawanList.slice(0, -1);
}
// console.log(getPadawanNames())

function getLightsaberScores() {
   
  let a = score.map((el) => Number(score[el]));
  console.log(a);
  return a;
  // console.log(a);
  // return a;
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  // getStats,
  // writeStats,
};


const fs = require('fs');
function getPadawanNames(){
let getPadavan = fs.readFileSync('data/padawans.txt','utf-8').split('\n').filter(el => el != '')
return getPadavan
}

function getLightsaberScores(){
  let score = fs.readFileSync('data/scores.txt','utf-8').split('\n').map(el => el = Number(el))
  return score
}

let statusArr = (`${getPadawanNames()}` + `,${getLightsaberScores()}`).split(',')

// console.log(statusArr);
function getStats(){
  let stats = []
  return stats
}


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  // writeStats,
};

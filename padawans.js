const fs = require('fs')
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  // getStats,
  // writeStats,
};

// У меня получаются массивы, разделенные по пробелу,  понимаю, что это не то что требуется, но мне не хватает времени разобраться :(

function getPadawanNames() {
  let dir = 'data/padawans.txt';
  const names = fs.readFileSync(`${dir}`, 'utf-8').split(' ');
  return names;
}

function getLightsaberScores() {
  let folder = 'data/scores.txt';
  const scores = fs.readFileSync(`${folder}`, 'utf-8').split(' ');
  return scores;
}

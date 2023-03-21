const fs = require('fs');

const getPadawanNames = () => {
  const r = fs.readFileSync('./data/padawans.txt', 'utf-8');
  // const a = require('./data/padawans.txt'); 
  const r1 = a.split('\n');
  // const r2 = []
  // r2.push(r1)
  return r1;
};
// const getLightsaberScores = () => {
//   const f = fs.readFileSync('./data/scores.txt', 'utf-8');
//   const e = f.split('\n');
//   // const e = [];
//   // return e.push(f);
//   return e;
// };

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

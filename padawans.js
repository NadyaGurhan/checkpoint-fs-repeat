const fs = require('fs');

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  // writeStats,
};

function getPadawanNames() {
  const padav = fs.readFileSync('data/padawans.txt', 'utf-8');
  return padav.split('\n').slice(0, 4);
}

function getLightsaberScores() {
  const score = fs.readFileSync('data/scores.txt', 'utf-8');
  return score.split('\n').map((el) => Number(el));
}

function getStats() {
  const pad = getPadawanNames();
  const scr = getLightsaberScores();
  const all = [...pad, ...scr];
  const newArr = [];
  // res.push([pad[i], scr[i]])
  console.log(all.map((el) => el));
  for (let i = 0; i < all.length; i++) {
    console.log(newArr.push(pad[i], scr[i]));
  }
}

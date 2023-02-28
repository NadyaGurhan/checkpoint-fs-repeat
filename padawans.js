const fs = require('fs');
function getPadawanNames() {
  const readFileName = fs
    .readFileSync('./data/padawans.txt', 'utf-8')
    .split('\n');
  readFileName.pop();
  return readFileName;
}
function getLightsaberScores() {
  const readFileScore = fs
    .readFileSync('./data/scores.txt', 'utf-8')
    .split('\n')
    .map((str) => +str);
  return readFileScore;
}
function getStats() {
  const resArr = [];
  const readFileScore = getLightsaberScores();
  const readFileName = getPadawanNames();
  // const readFileScore = fs
  //   .readFileSync('./data/scores.txt', 'utf-8')
  //   .split('\n')
  //   .map((str) => +str);
  // const readFileName = fs
  //   .readFileSync('./data/padawans.txt', 'utf-8')
  //   .split('\n');
  // readFileName.pop();
  for (let i = 0; i < readFileName.length; i += 1) {
    resArr.push([readFileName[i], readFileScore[i]]);
  }
  return resArr;
}
function writeStats() {
  const stats = getStats();
  let resStr = '';
  // const flatStats = stats.flat();
  for (let i = 0; i < stats.length; i += 1) {
    resStr = `${resStr}${stats[i].join(' ')}\n`;
  }
  resStr = resStr.slice(0, resStr.length - 1);

  // console.log(flatStats);
  fs.writeFileSync('./data/stats.txt', `${resStr}`);
}
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

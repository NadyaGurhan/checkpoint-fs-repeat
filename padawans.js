const fs = require('fs');

function getPadawanNames() {
  const read = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n');
  return read;
}

function getLightsaberScores() {
  const read = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n').map((el) => Number(el));
  return read;
}

function getStats() {
  const readPad = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n').map((el) => [el]);
  const readScore = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n').map((el) => Number(el));
  console.log(readPad, readScore);

  // const arrConc = readPad.concat(readPad, readScore);
  // console.log(arrConc);

  // for (let i = 0; i < readPad.length; i++) {
  //   const newArr = readPad[i].push(readscore[i]);
  // }console.log(newArr);
}

function writeStats() {
  const read = fs.writeFileSync('./data/stats.txt', 'utf8').split('\n');
  console.log(read);
  return read;
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

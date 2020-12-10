const fs = require('fs');

function getPadawanNames() {
  return fs.readFileSync('data/padawans.txt', 'utf-8').trim().split("\n");
}

function getLightsaberScores() {
  return fs.readFileSync('data/scores.txt', 'utf-8').split("\n").map((el) => Number(el));
}

function getStats() {
  const padawans = getPadawanNames();
  const padawansScores = getLightsaberScores();

  // data = [];
  // for (let i = 0; i < padawans.length; i++) {
  //   data.push([padawans[i], padawansScores[i]]);
  // }

  return padawans
    .reduce((acc, item, index) => [...acc, [item, padawansScores[index]]], [])
}

function writeStats() {
  const dataToSend = getStats();
  // let str = '';
  // dataToSend.forEach((a) => (str += `${a[0]} ${a[1]}\n`));
  // fs.writeFileSync('data/stats.txt', str.trim());
  // return dataToSend;
  let convertedData = dataToSend.reduce((acc, item) => `${acc}${item[0]} ${item[1]}\n`, '')

  fs.writeFileSync('data/stats.txt', convertedData.trim());
}





writeStats()
// const test = [1, [2], [3,4,5,6], 4, 5, 6, 7, 8, 9];

// console.log(test);
// console.log([22, ...test, 300, 500, 77]);

// return padawans.reduce((acc, item, index) => {
//   console.log(acc, item);

//   return [...acc, [item, padawansScores[index]]]
// }, [])






module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

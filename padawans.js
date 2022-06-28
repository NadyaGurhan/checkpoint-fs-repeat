const fs = require('fs');

const getPadawanNames = () => {
  let padawanList = fs.readFileSync('./data/padawans.txt', 'utf-8');
  let padawanListInline = padawanList.split('\n').join(' ');
  console.log(typeof padawanList);
  return padawanListInline;
};

const getLightsaberScores = () => {
  let padawanScores = fs.readFileSync('./`data/scores.txt`', 'utf-8');
  let scoresListInline = padawanScores.split('\n').join(' ');
  return scoresListInline;
};

const getStats = (arrName, arrScores) => {
  padawanList = padawanList.split(' ');
  padawanScores = padawanScores.split(' ');
  let table = [];
  for (let i = 0; i < padawanList.length; i++) {
    table.push[padawanList[i], padawanScores[i]]
  }
  return table;
}

// module.exports = {
//   getPadawanNames,
//   getLightsaberScores,
//   getStats,
//   writeStats,
// };
console.log(getPadawanNames());
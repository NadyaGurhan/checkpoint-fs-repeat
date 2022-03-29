// const fs = require('fs');

// module.exports = {
//   getPadawanNames,
//   getLightsaberScores,
//   getStats,
//   writeStats,
// };

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
function getPadawanNames() {
  const fs = require('fs');
  let data = fs.readFileSync('data/padawans.txt', 'utf8');
  data = data.trim().split('\n');
  // console.log(data)
  return data;
}
// второй вариант !! тоже такой
// function getPadawanNames() {
// const fs = require('fs');
//   const padawans = fs.readFileSync('./data/padawans.txt','utf8');
//   padawans = padawans.trim().split('\n');
// }
// return padawans

function getLightsaberScores() {
  const fs = require('fs');
  let data = fs.readFileSync('data/scores.txt', 'utf8');
  data = data.trim().split('\n');
  data = data.map((a) => Number(a));
  // console.log(data)
  return data;
}

// function getLightsaberScores() {
//   const fs = require('fs');
//   const scores = fs.readFileSync('./data/scores.txt', 'utf8');
//   scores = scores.split('').sort((a, b) => b - a);
//   console.log(getLightsaberScores());
//   return scores;
// }

function getStats() {
  const mas1 = getPadawanNames();
  const mas2 = getLightsaberScores();
  const result = [];
  for (let i = 0; i < mas1.length; i++) {
    result.push([mas1[i], mas2[i]]);
  }
  return result;
  // console.log(result)
}

function writeStats() {
  const fs = require('fs');
  const mas1 = getPadawanNames();
  const mas2 = getLightsaberScores();
  for (let i = 0; i < mas1.length; i += 1) {
    if (i === mas1.length - 1) {
      fs.appendFileSync('data/stats.txt', `${mas1[i]} ${mas2[i]}`, 'utf8');
      continue;
    }
    fs.appendFileSync('data/stats.txt', `${mas1[i]} ${mas2[i]}\n`, 'utf8');
  }
}

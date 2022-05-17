// const fs = require("fs");
// const readPadawans = fs.readFileSync('./data/padawans.txt', 'utf-8');
// const readScores = fs.readFileSync('./data/scores.txt', 'utf-8');

function getPadawanNames() {
  const fs = require("fs");
  const readPadawans = fs.readFileSync('./data/padawans.txt', 'utf-8')
  return (readPadawans.split('\n').slice(0, 4));
  // let arr = [];
  // console.log(readPadawansArr);
}

function getLightsaberScores() {
  const fs = require("fs");
  const readScores = fs.readFileSync('./data/scores.txt', 'utf-8');
  return (readScores.split('\n').slice(0, 4)).map((numb) => parseFloat(numb));
}

function getStats() {
  const fs = require("fs");
  const readPadawans = fs.readFileSync('./data/padawans.txt', 'utf-8');
  const readScores = fs.readFileSync('./data/scores.txt', 'utf-8');
  let text= readPadawans.split('\n').slice(0, 4);
  let nam = readScores.split('\n').slice(0, 4).map((numb) => parseFloat(numb));
  let arr = [];
  for (let i = 0; i < 4; i++) {
    arr.push([text[i], nam[i]]);
  }
  return arr;
}

function writeStats() {
  const fs = require("fs");
  const stats = getStats();
  const data = stats.map((arr) => arr.join(' ')).join('\n');
  fs.writeFileSync('./data/stats.txt', data);
}


// function nameNumber(num = getRandomInteger) {
//   for (let i = 0; i < num; i++) {
//     let n = randomProfile.name();
//     // nameArr.push(n)
//     fs.appendFileSync(`./text/${num ?? getRandomInteger}-number.txt`, n + '\n')
//   }
//   return 'готово'
// }

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

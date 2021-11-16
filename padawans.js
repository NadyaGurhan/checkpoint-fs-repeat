/* eslint-disable no-plusplus */
/* eslint-disable linebreak-style */
// let w;
function getPadawanNames() {
  const fs = require('fs');
  const x = fs.readFileSync("./data/padawans.txt", "utf-8").split('\r\n')
  x.pop();
  return x;
}
// getPadawanNames()

function getLightsaberScores() {
  const fs = require('fs');
  const q = fs.readFileSync("./data/scores.txt", "utf-8").split('\r\n')
  // q.pop();
  let y = [];
  q.forEach(elem => y.push(Number(elem)));
  return y;
}

function getStats() {
  const x = getPadawanNames();
  // eslint-disable-next-line no-shadow
  const y = getLightsaberScores();
  const w = [];
  for (let i = 0; i < x.length; i++) {
    w.push([x[i], y[i]]);
  }
  return w;
}

function writeStats() {
  const w = getStats();
  // let string = '';
  const fs = require("fs");
  let filePath = './data/stats.txt';
  for (let i = 0; i < 4; i++) {
    if (i === 0) {
    // string += `${x[i]} ${y[i]}\n`;
      fs.appendFileSync(filePath, `${w[i].join(' ')}`, 'utf-8');
    } else fs.appendFileSync(filePath, `\n${w[i].join(' ')}`, 'utf-8');
  }
 // return string
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

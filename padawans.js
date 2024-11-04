const fs = require('fs');
const { EOL } = require('os');

function getPadawanNames() {
  const text = fs.readFileSync('./data/padawans.txt', 'utf-8');
  return text.split(EOL).slice(0, 4);
}

function getLightsaberScores() {
  const rating = fs.readFileSync('./data/scores.txt', 'utf-8');
  const word = rating.split(`${EOL}`);
  console.log(word);
  return word.map((num) => parseFloat(num));
}

function getStats() {
fs.readFileSync('./data/padawans.txt', 'utf-8');
  const names = getPadawanNames();
  const num = getLightsaberScores();

  const length = Math.min(names.length, num.length);
  const mix = [];

  for (let i = 0; i < length; i++) {
    mix.push([names[i], num[i]]);
  }

  return mix;
}

function writeStats() {
  const mix = [
    ['Revan', 99.9],
    ['Bastila Shan', 92],
    ['Jolee Bindo', 87],
    ['Juhani', 82],
  ];
  const wor = mix.join('\n');
  let str = '';
  for (let i = 0; i < wor.length; i++) {
    if (wor[i] === ',') {
      str += ' ';
    } else {
      str += wor[i];
    }
  }
  console.log(str);
  fs.writeFileSync('./data/stats.txt', str, 'utf-8');
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

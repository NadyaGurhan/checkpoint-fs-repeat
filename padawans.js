const fs = require('fs');
const getPadawanNames = () => {
  const path = `./data/padawans.txt`;
  const padawans = fs.readFileSync(path, 'utf8');
  const res = padawans.split('\n');
  res.pop();
  return res;
};

const getLightsaberScores = () => {
  const path = `./data/scores.txt`;
  const padawans = fs.readFileSync(path, 'utf8');
  const res = padawans.split('\n');
  return res.map((el) => Number(el));
};
const getStats = () => {
  let table = [];
  const padawan = getPadawanNames();
  const scrore = getLightsaberScores();
  padawan.forEach((el, i) => {
    table.push([el, scrore[i]]);
  });
  return table;
};

const writeStats = (stats) => {
  const path = `./data/stats.txt`;
  let str = '';
  stats.forEach((el, i) => {
    if (i !== 3) {
      str += el[0] + ' ' + el[1] + '\n';
    } else {
      str += el[0] + ' ' + el[1];
    }
  });
  fs.writeFileSync(path, str);
};

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

const fs = require('fs');
const { EOL } = require('os');

const getPadawanNames = () => {
  const names = fs.readFileSync('./data/padawans.txt', 'utf8').split(EOL);
  const result = [];

  for (let i = 0; i < names.length - 1; i += 1) {
    result.push(names[i]);
  }

  return result;
};

const getLightsaberScores = () => {
  const scores = fs.readFileSync('./data/scores.txt', 'utf8').split(EOL);
  const result = [];

  scores.forEach((score) => {
    result.push(Number(score));
  });

  return result;
};

const getStats = () => {
  const padawanNames = getPadawanNames();
  const padawanScores = getLightsaberScores();

  const result = [];

  for (let i = 0; i < padawanNames.length; i += 1) {
    const tempArr = [];

    tempArr.push(padawanNames[i], padawanScores[i]);
    result.push(tempArr);
  }

  return result;
};

const writeStats = () => {
  let resultStr = '';

  const stats = getStats();

  for (let i = 0; i < stats.length; i += 1) {
    const tempStr = stats[i].join(' ');
    resultStr += `${tempStr}${EOL}`;
    // console.log(tempStr);
  }

  fs.writeFileSync('./data/stats.txt', `${resultStr.trim()}${EOL}`);
};

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

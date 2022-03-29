const fs = require('fs');

function getPadawanNames() {
  const PATH = './data/padawans.txt';
  const data = fs.readFileSync(PATH, 'utf8');
  const padawansList = data.split('\n').filter((element) => element !== '');
  return padawansList;
  //console.log(data);
}

//getPadawanNames();

function getLightsaberScores() {
  const PATH = './data/scores.txt';
  const data = fs.readFileSync(PATH, 'utf8');
  const scoresList = data.split('\n');
  const newScoresList = [];
  for (let element of scoresList) {
    newScoresList.push(+element)
  }
  return newScoresList;
}

function getStats() {
  const dataPadawans = getPadawanNames();
  const dataScores = getLightsaberScores();
  const statsArr = [];
  for (let i = 0; i < dataScores.length; i += 1) {
    let arr = [];
    arr.push(dataPadawans[i]);
    arr.push(dataScores[i]);
    statsArr.push(arr);
  }

  return statsArr;

}

function writeStats() {
  const PATH = 'data/stats.txt';
  const statsArr = getStats();
  for (let i = 0; i < statsArr.length; i += 1) {
    let n = '';
    if (i === statsArr.length - 1) {
      n = '';
    }
    else {
      n = '\n';
    }
    fs.appendFileSync(PATH, `${statsArr[i][0]} ${statsArr[i][1]}${n}`, 'utf8');
  }
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

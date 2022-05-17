const fs = require('fs');

function getPadawanNames() {
  const result = fs.readFileSync('./data/padawans.txt', 'utf-8');
  return result.split('\n').slice(0, 4);
}

function getLightsaberScores() {
  const result = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n').slice(0, 4);
  const arrNew = result.map((elem) => Number(elem));
  return arrNew
}

function getStats() {
  const getLi = getLightsaberScores();
  const getPad = getPadawanNames();
  const arrNew = [];

  for (let i = 0; i < getPad.length; i += 1) {
    const arr = getPad[i].concat(`, ${Number(getLi[i])}`);
    console.log(arr);
    arrNew.push(arr.split(','))
  }


  console.log(arrNew.map((elem) ));
}

function writeStats() {

}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

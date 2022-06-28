const fs = require('fs');
const path = require('path');

const writePersons = (personArray) => {
  for (let i = 0; i < personArray.length; i += 1) {
    fs.appendFileSync('../data/padawans.txt', `${personArray[i]}\n`);
  }
};

const writeScores = (personArray) => {
  for (let i = 0; i < personArray.length; i += 1) {
    fs.appendFileSync('../data/scores.txt', `${personArray[i]}\n`);
  }
};

function getPadawanNames() {
  const resultNames = fs.readFileSync(path.join(__dirname, `./data/padawans.txt`), 'utf-8');
  return resultNames.split('\n').slice(0, -1)
}

function getLightsaberScores() {
  const resultScores = fs.readFileSync(path.join(__dirname, `./data/scores.txt`), 'utf-8');
  return resultScores.split('\n').map(int => parseInt(int, 10));
}
console.log(getLightsaberScores())


//function getStats ()



module.exports = {
  getPadawanNames,
  getLightsaberScores,
  //getStats,
  //writeStats,
};

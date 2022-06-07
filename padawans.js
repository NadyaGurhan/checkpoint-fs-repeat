const fs = require('fs');

function getPadawanNames() {
  const str = fs.readFileSync('./data/padawans.txt', 'utf-8');
  const abc = str.split('\n');
  const result = [];
  for (let i = 0; i < abc.length - 1; i += 1) {
    result.push(abc[i]);
  }
  return result;
}

const getLightsaberScores = () => {
  const str = fs.readFileSync('./data/scores.txt', 'utf-8');
  const abc = str.split('\n');
  const num = abc.map((numb) => Number(numb));
  const result = [];
  for (let i = 0; i < num.length; i += 1) {
    result.push(num[i]);
  }
  return result;
};

const getStats = () => {
  const str = fs.readFileSync('./data/padawans.txt', 'utf-8');
  const arrOne = str.split('\n');
  const strNum = fs.readFileSync('./data/scores.txt', 'utf-8');
  const splTwo = str.split('\n');
  const arrTwo = abc.map((numb) => Number(numb));
  
};
const writeStats = () => {

};

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

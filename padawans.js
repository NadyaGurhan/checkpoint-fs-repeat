const fs = require('fs')
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

function getPadawanNames() {
  const newArr = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n');
  newArr.pop();
  return newArr;
}

function getLightsaberScores() {
  const newArr = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n').map((el) => Number(el));
  return newArr;
}

function getStats() {
  const arr = [];
  const pad = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n');
  pad.pop();
  const scores = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n').map((el) => Number(el));
  for (let i = 0; i < pad.length; i += 1) {
    const newArr = [pad[i], scores[i]];
    arr.push(newArr);
  }
  return arr;
}

function writeStats(){
  const arr = [];
  const pad = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n');
  pad.pop();
  const scores = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n').map((el) => Number(el));
  for (let i = 0; i < pad.length; i += 1) {
    const newArr = [pad[i], scores[i]];
    arr.push(newArr);
  }
  for (let i = 0; i<arr.length; i += 1){
    fs.appendFileSync('./data/stats', `${arr[i].join(','), 'utf-8'}`
  }
  const Stat = arr.join(',');
  return fs.writeFileSync('./data/stats', `${Stat}`);
};

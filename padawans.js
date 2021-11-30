const fs = require('fs');

function getPadawanNames() {
  const padawans = fs.readFileSync('./data/padawans.txt', 'utf8').split('\n');
  padawans.pop();
  return padawans;
}

function getLightsaberScores() {
  const scores = fs.readFileSync('./data/scores.txt', 'utf8').split('\n');
  let rsl = [];
  console.log(scores);
  
  for (let i = 0; i < scores.length; i++) {
    rsl.push(+scores[i]);
  }

  return rsl;
}

function getStats() {
  const padawans = fs.readFileSync('./data/padawans.txt', 'utf8').split('\n');
  const scores = fs.readFileSync('./data/scores.txt', 'utf8').split('\n');
  let rsl = [];
  for (let i = 0; i < scores.length; i++) {
    let tmpArr = [];
    tmpArr.push(padawans[i]);
    tmpArr.push(Number(scores[i]));
    rsl.push(tmpArr);
  }
  return rsl;
}


function writeStats() {
  const path = './data/stats.txt';
  
  const values = getStats();
  for (let i = 0; i < values.length; i += 1) {
    console.log(values[i][0], values[i][1]);
    
    if (i === values.length - 1) {
      fs.appendFileSync(path, `${values[i][0]} ${values[i][1]}`);
    } else {
      fs.appendFileSync(path, `${values[i][0]} ${values[i][1]}\n`);
    }
  }
}


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

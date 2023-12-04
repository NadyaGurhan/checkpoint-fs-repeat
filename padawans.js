const fs = require('fs')
const { EOL } = require('os');


function getPadawanNames() {
      const names = fs.readFileSync(`./data/padawans.txt`, 'utf-8').trim().split(EOL);
      return names;
}

function getLightsaberScores() {
  const scores = fs.readFileSync(`./data/scores.txt`, 'utf-8').split(EOL);
  for (let i = 0; i < scores.length; i++) {
    scores[i] = +scores[i];
  }
  return scores;
}

function getStats() {
  const newArr = [];
  const padawanNames = getPadawanNames();
  const LightsaberScores = getLightsaberScores();
  for (let i = 0; i < padawanNames.length; i++) {
  const newArrAll = [];
  const name = padawanNames[i];
  const scor = LightsaberScores[i];

  newArrAll.push(name);
  newArrAll.push(scor);
  newArr.push(newArrAll);
  }
  return newArr;
}

function writeStats(stats) {
  const result = [];
  stats.forEach((el) => {
   result.push(el.join(' '))
  })

  fs.writeFileSync('./data/stats.txt', `${result.join('\n')}`)


}


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};


        




const fs = require('fs');
let data = fs.readFileSync('./data/padawans.txt', 'utf-8');
let dataScore = fs.readFileSync('./data/scores.txt', 'utf-8');

function getPadawanNames () {
  let dataPadawans = data.split('\n')
  dataPadawans.pop()
  return dataPadawans
}

function getLightsaberScores () {
  let saberScore = dataScore.split('\n')
  for (let i = 0; i < saberScore.length; i++) {
    saberScore[i] = +saberScore[i]
  }
  return saberScore
}

function getStats () {
  let dataPadawans = data.split('\n')
  dataPadawans.pop()
  
  let saberScore = dataScore.split('\n')
  for (let i = 0; i < saberScore.length; i++) {
    saberScore[i] = +saberScore[i]
  }
  let arrScore = [];
  for (let j = 0; j < dataPadawans.length; j++) {
    let personInfo = [dataPadawans[j],saberScore[j]]
    arrScore.push(personInfo)
  }
return arrScore
}


function writeStats (file) {
  for (let i = 0; i < file.length; i++) {
    file[i] = file[i].join(' ')
  }
  file.join('\n')
  fs.writeFileSync('/data/stats.txt', file)
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};



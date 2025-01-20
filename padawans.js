const fs = require('fs')
const {EOL} = require('os')

function getPadawanNames(){
  const names = fs
    .readFileSync('./data/padawans.txt', 'utf-8')
    .split(EOL)  
  names.pop()
  return names  
}

function getLightsaberScores(){
  return fs
    .readFileSync('./data/scores.txt', 'utf-8')
    .split(EOL)
    .map((el) =>Number(el));
}

function getStats(){
  const padawans = getPadawanNames()
  const lightsaberScores = getLightsaberScores()
  const stats = []
  for(let i = 0;i< padawans.length;i++){
    stats.push([padawans[i],lightsaberScores[i]])
  }
  return stats
}

function writeStats(){
  fs.writeFileSync(
    './data/stats.txt',
    `${getStats().map((el) => (el + '\n').replace(',', ' ')).join('').slice(0,-1)}`,
  );
  return 'Файл создан,статы записаны!'
}


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};



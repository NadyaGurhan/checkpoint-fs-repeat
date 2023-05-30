const fs = require('fs')

function getPadawanNames () {
 
  const text = fs.readFileSync(__dirname+'/data/padawans.txt', 'utf-8');
  const array = text.split('\n');
  return array;
}

function getLightsaberScores () {
  const text = fs.readFileSync(__dirname+'/data/scores.txt', 'utf-8');
  const array = text.split('\n')
  .map((el) => Number(el));
  return array;
}

function getStats () {
  const padawans = fs.readFileSync(__dirname+'/data/padawans.txt', 'utf-8');
  const scores = fs.readFileSync(__dirname+'/data/scores.txt', 'utf-8');
  const arrayPadawans = padawans.split('\n');
  const arrayScores =  scores.split('\n')
  .map((el) => Number(el));
  const result = [];
  for(let i = 0; i < arrayPadawans.length; i += 1) {
    result.push([arrayPadawans[i], arrayScores[i]]);  // хотел через map сделать и forEach пройтись
  }                                                   // но мб это и ошибка была бы, быстро не понял
  return result;                                      // как реализовать это
}

function writeStats () {
  const stats = getStats().map(el => el.join(' ')).join('\n')
  fs.appendFileSync('data/stats.txt', stats, 'utf8');
  return stats;
}
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

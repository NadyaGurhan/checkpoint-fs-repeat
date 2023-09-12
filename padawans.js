const fs = require('fs')
function getPadawanNames(){
  const data = fs.readFileSync('data/padawans.txt', 'utf8');
  return data.split('\n').filter(name => name.trim() !== '');
}
getLightsaberScores(){
  const data = fs.readFileSync('data/scores.txt', 'utf8');
  const scores = data.split('\n').map(score => parseFloat(score));
  return scores;
}
getStats(){
  const padawanNames = getPadawanNames();
  const lightsaberScores = getLightsaberScores(); 
  const stats = padawanNames.map((name, index) => [name, lightsaberScores[index]]);
  return stats;
}


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

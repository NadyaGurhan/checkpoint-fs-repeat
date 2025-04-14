const fs = require('fs')
const { EOL } = require('os');



const  getPadawanNames = () => {
  const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8').trim().split(EOL);
  return padawans;
};



const getLightsaberScores = () => {
  const scores = fs.readFileSync('./data/scores.txt', 'utf-8').split(EOL);
  return scores.map((el) => Number(el));

}
 const getStats = () => {
  const padawans = getPadawanNames();
  const scores = getLightsaberScores();
  const result = padawans.map((padawan, index) => [padawan, scores[index]]);
  return result; 

 }
 
 const writeStats = () => {
  const data = getStats().join(EOL).replaceALL(',', ' ');
fs.writeFileSync('./data/stats.txt', data);
 }


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

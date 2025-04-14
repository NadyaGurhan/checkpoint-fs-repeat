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

 }

 const writeStats = () => {

 }


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

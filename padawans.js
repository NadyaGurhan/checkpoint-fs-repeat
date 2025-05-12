const fs = require('fs');
const { EOL } = require('os');

function getPadawanNames() {
  const order = fs.readFileSync('./data/padawans.txt', 'utf-8')
  return order.split(EOL)
}



function getLightsaberScores() {
  const scores = fs.readFileSync('./data/scores.txt', 'utf-8').split(EOL).map(Number)
  return scores
}


function getStats() {
  const order = fs.readFileSync('./data/padawans.txt', 'utf-8').split(EOL)
  const scores = fs.readFileSync('./data/scores.txt', 'utf-8').split(EOL).map(Number)
 
 


}


function writeStats() {

}



module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

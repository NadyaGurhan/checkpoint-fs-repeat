const fs = requaire('fs');

const puthPad './padawans.txt';
const patVar = fs readFileSync (puthPad,'utf 8').split ('\n').slice(0, -1);
const puthScores = './data/scores.txt';
const scoreVar = fs.readFileSync (puthScores,'utf 8').split ('\n').map Number;

function getPadawanNames () {
  return padVar;
}
function getLightsaberScores () {
  return scoreVar;
}
function getStats () {
 const statsVar = []
 for (let i = 0; i < padVar.length i +=1){
   statsVar.puch()
 } 
}
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

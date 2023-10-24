
const fs = require('fs');

const allPadawans = fs.readFileSync('./data/padawans.txt', 'utf8');

function getPadawanNames() {
  padsArray = allPadawans.split('\n');
  padsArray.pop();
  return padsArray;
}

const padawansScores = fs.readFileSync('./data/scores.txt', 'utf8');

function getLightsaberScores() {
  scoreArray = padawansScores.split('\n');
  const scoreNumbers = []
  scoreArray.forEach((element) => {
    scoreNumbers.push(Number(element));
  });
  return scoreNumbers;
}

function getStats(){
  
  const arrOfPad = getPadawanNames()
  const arrOfSpecs = getLightsaberScores()
  const allStats = []

for (let i = 0; i < arrOfPad.length; i++){
 
let newEl = [arrOfPad[1], arrOfSpecs[1]]
  
   console.log (newEl)
}

  const createFile = fs.writeFileSync('./data/scores.txt', allStats,  'utf8')

}
getStats()

module.exports = {
  getPadawanNames,
  getLightsaberScores,
//   getStats,
//   writeStats,
};

const fs = require('fs');

const AllPadawansString = fs.readFileSync(__dirname + '/data/padawans.txt', 'utf8')

function getPadawanNames () {
  const AllPadawansArr = AllPadawansString.split('\n');
  let AllPadawans = [];
  for (let i = 0; i < 4; i++) {
     AllPadawans.push(AllPadawansArr[i]);
    }
    return AllPadawans
  }
  

function getLightsaberScores() {
const ScorString = fs.readFileSync(__dirname + '/data/scores.txt', 'utf8');
let AllScorArr = ScorString.split('\n');
let AllScore = [];
for (let i = 0; i < AllScorArr.length; i++) {
  AllScore.push(+AllScorArr[i]);
  }
  return AllScore;
}


function getStats() {

}

function writeStats() {
  
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

// console.log(AllPadawans)

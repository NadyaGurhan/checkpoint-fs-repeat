const fs = require ('fs');
const padawansData = fs.readFileSync('./data/padawans.txt', 'utf8');
let padawansArray = padawansData.split('\n').filter((el)=> el !== '');
const padawansScoreData = fs.readFileSync('./data/scores.txt', 'utf8');
let padawansScoreArray = padawansScoreData.split('\n').filter((el)=> el !== '').map((el)=>Number(el));
function getPadawanNames() {
  return padawansArray;
}
function getLightsaberScores() {
  return padawansScoreArray;
}

function getStats() {
  let stats = [];
  for(let i = 0; i < padawansArray.length; i++) {
    stats.push([padawansArray[i],padawansScoreArray[i]])
  }
  let stringToWrite = stats.map((el) => el.join(' ')).join('\n');
  fs.writeFileSync('data/stats.txt', '');//create file
  fs.appendFile('data/stats.txt', stringToWrite, function(){});
  return stats;
}

function writeStats(){
  //let stats = getStats();
  let stats = [];
  for(let i = 0; i < padawansArray.length; i++) {
    stats.push([padawansArray[i],padawansScoreArray[i]])
  }
  let stringToWrite = stats.map((el) => el.join(' ')).join('\n');
  fs.writeFileSync('data/stats.txt', '');
  fs.appendFileSync('data/stats.txt', stringToWrite);
  console.log(stringToWrite);
  return stringToWrite;
}
//writeStats();

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

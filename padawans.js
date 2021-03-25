const fs = require('fs')

function getPadawanNames() {


  const needText = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n').slice(0, -1);

  return needText;
}

function getLightsaberScores() {

  const needScore = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n').map(el => +el);

  return needScore;

}

function getStats() {

  const newArr = [];

  const needText = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n').slice(0, -1);
  const needScore = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n').map(el => +el);
  for (let i = 0; i < needText.length; i+= 1){
    let hashArr = [];
    hashArr.push(needText[i],needScore[i]);
    newArr.push(hashArr)
  }
return newArr;
}

function writeStats(stats) {
  

  
    let writeText = stats.map((el) => el.join(' ')).join('\n');
    return fs.appendFileSync('./data/stats.txt', writeText)
  
}


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

 




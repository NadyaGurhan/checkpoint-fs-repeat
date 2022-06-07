const fs = require('fs')

function getPadawanNames () {
  let padawanList = fs.readFileSync('./data/padawans.txt', 'UTF-8').split('\n');
  padawanList = padawanList.slice(0, padawanList.length-1);
  return padawanList;
}



function getLightsaberScores () {
  let scoresList = fs.readFileSync('./data/scores.txt', 'UTF-8').split('\n');
  scoresList = scoresList.slice(0, scoresList.length);
  let scoresListNumbers = scoresList.map((item)=>{
    return item = Number(item);
  })
  return scoresListNumbers;
}


function getStats () {
  let statsList = getPadawanNames().map((item, index) => {
    item = [item];
    item.push (getLightsaberScores()[index]);
    return item;
  })
  return statsList;
}

function writeStats () {
  fs.writeFileSync ('./data/stats.txt', '');
  const statList = getStats();

 for (let index = 0; index < statList.length; index++) {
    if (index == statList.length-1) {
      const data = statList[index].join(' ')
      fs.appendFileSync ('./data/stats.txt', data)
    } else {
      const data = statList[index].join(' ').concat('\\n')
      fs.appendFileSync ('./data/stats.txt', data)
    }
  }
 }

 const data = fs.readFileSync('data/stats.txt', 'utf8');
 console.log(data);


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
const fs = require('fs')
 
function getPadawanNames() {
  let data = fs.readFileSync('./data/padawans.txt', 'utf-8');
  let arrNames = data.split('\n');
  arrNames.pop()
  return arrNames;
}


function getLightsaberScores() {
  let data = fs.readFileSync('./data/scores.txt', 'utf-8');
  let arrScores = data.split('\n');
  let arrT = arrScores.map(el=> Number(el))

  return arrT;

}




function getStats() {
  const padawanList = getPadawanNames('./data/padawans.txt');
const lightsaberList = getLightsaberScores('./data/scores.txt');
  let statsArr = [];
  let count = 0;
  padawanList.forEach(el => {
    
    let tempArr = [];
    tempArr.push(el);
    tempArr.push(lightsaberList[count]);
    statsArr.push(tempArr);
    count++
  })

  return statsArr
}

// const totalStats = getStats();


function writeStats(stats) {
  fs.writeFileSync(`data/stats.txt`, stats.map(el=> el.join(' ')).join('\n'),'utf-8')
}



// writeStats(totalStats)

// console.log(getStats(padawanList,lightsaberList))
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

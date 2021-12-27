const fs = require("fs");
const padawans = fs.readFileSync("./data/padawans.txt", "utf8").split('\n',4)

const scores = fs.readFileSync("./data/scores.txt", "utf8").split('\n')


function getPadawanNames(){
  return padawans;
}

function getLightsaberScores(){
  const result = scores.map(element => Number(element));
  return result;
}

function getStats(){
  let newArr = [];
  for( let i = 0; i < padawans.length; i++){
    newArr.push([padawans[i], Number(scores[i])])
  }
  return newArr
}


function writeStats(){
  let getS = getStats();
  const writeStats = getS.map(item => item.join(' ')).join('\n')
  fs.writeFileSync('data/stats.txt', String(writeStats) );
}



module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

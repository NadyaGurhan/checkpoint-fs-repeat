const fs = require("fs");
const padawans = fs.readFileSync("./data/padawans.txt", "utf8").split('\n',4)

const scores = fs.readFileSync("./data/scores.txt", "utf8").split('\n')


function getPadawanNames(){
  return padawans
}

function getLightsaberScores(){
  return scores.map((el) => Number(el))
}

function getStats(){
  let result = [];
  for (let i = 0; i < padawans.length; i++){
    let res = []
    res.push(padawans[i],Number(scores[i]))
    result.push(res)
  }
  return result
}


function writeStats(){
  fs.writeFileSync("./data/stats.txt", `${getStats().join('\n').replaceAll(',', ' ')}`)
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

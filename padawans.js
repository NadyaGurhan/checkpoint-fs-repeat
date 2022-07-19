const fs = require('fs')
let filePathPad = ".data/padawans.txt"
let dataPad = fs.readFileSync(filePathPad, "utf8");
let filePath = ".data/scores.txt"
let dataSc = fs.readFileSync(filePathSc, "utf8");

const getPadawanNames = () => {
  let resultPad 
  result = dataPad.split("\n")
  return resultPad
}

const getLightsaberScores = () => {
  let resultSc 
  result = dataSc.split("\n")
  return resultSc
}

const getStats = () => {
  let stats 
  for (let index = 0; index < resultPad.length; index++) {
    stats[index].push(resultPad[index]);
    stats[index].push(resultSc[index]);
  }
  return stats
}

const writeStats = () => {
  for (i = 0; i < stats.length; i++) {
    fs.appendFileSync(`./data/stats.txt`,`${stats[i]}\n`) 
  }

}
// module.exports = {
//   getPadawanNames,
//   getLightsaberScores,
//   getStats,
//   writeStats,
// };

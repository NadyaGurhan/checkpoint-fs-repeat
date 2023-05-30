const fs = require("fs");

const getPadawanNames = () => {
  const padawanNames = fs
    .readFileSync("./data/padawans.txt", "utf8")
    .split("\n")
    .slice(0,-1);
    return padawanNames
};

const getLightsaberScores = () => {
  const lightsaberScores = fs
    .readFileSync("./data/scores.txt", "utf8")
    .split("\n")
    .map((el) => Number(el))
    
    return lightsaberScores

};

const getStats = () => {
  const padawanNames = fs
  .readFileSync("./data/padawans.txt", "utf8")
  .split("\n")
  .slice(0,-1);

const lightsaberScores = fs
    .readFileSync("./data/scores.txt", "utf8")
    .split("\n")
    .map((el) => Number(el))

const stats = padawanNames.map((el,i)=> [el, lightsaberScores[i]])
return stats
};

const writeStats = () => {
//
  
  let data = fs.appendFileSync('./data/stats.txt',getStats().join("\n") )
  console.log(data)
  return data

//   const padawanNames = fs
//   .readFileSync("./data/padawans.txt", "utf8")
//   .split("\n")
//   .slice(0,-1);

// const lightsaberScores = fs
//     .readFileSync("./data/scores.txt", "utf8")
//     .split("\n")
//     .map((el) => Number(el))

// const allData =  padawanNames.map((el,i)=> el, lightsaberScores[i])

//   let data = fs.appendFileSync('./data/stats.txt',allData.join("\n") )
  
//   return data

};

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
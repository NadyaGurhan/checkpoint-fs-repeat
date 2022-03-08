const fs = require ("fs")

function getPadawanNames(){
  const pad = fs.readFileSync("./data/padawans.txt","utf-8").split("\n").slice(0,-1);
  return pad
}

function getLightsaberScores () {
  const estimation = fs.readFileSync("./data/scores.txt","utf-8").split("\n").map((el) => Number(el));
  return estimation
}

function getStats () {
  const pad = fs.readFileSync("./data/padawans.txt","utf-8").split("\n").slice(0,-1);
  const estimation = fs.readFileSync("./data/scores.txt","utf-8").split("\n").map((el) => Number(el));
  const stat = [];
  for (let i = 0; i < pad.length; i += 1){
    stat.push([pad[i],estimation[i]])
  }
  return stat
}

function writeStats () {
  const pad = fs.readFileSync("./data/padawans.txt","utf-8").split("\n").slice(0,-1);
  const estimation = fs.readFileSync("./data/scores.txt","utf-8").split("\n").map((el) => Number(el));
  const stat = [];
  for (let i = 0; i < pad.length; i += 1){
    stat.push([pad[i],estimation[i]])
  }
  fs.writeFileSync('data/stats.txt', stat.join('\n').)
}


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

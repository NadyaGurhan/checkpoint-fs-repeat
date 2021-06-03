const fs = require("fs");
const { start } = require("repl");

function getPadawanNames () {
  const name = fs.readFileSync("./data/padawans.txt", "utf-8")
  const arr = name.split('\n');
  return arr.slice(0,-1)
}

function getLightsaberScores() {
  const score = fs.readFileSync("./data/scores.txt", "utf-8")
  let arr = score.split('\n');
  arr = arr.map(el =>  Number(el))
  return arr
}

function getStats () {
  const name = getPadawanNames ();
  const score = getLightsaberScores();

  let newArr = [];

  for (let i = 0; i < name.length; i++) {
    newArr.push([name[i], score[i]])
  }

  return newArr
}

function writeStats () {
  const stats = getStats();
  let text = ""
  for (let i = 0; i < stats.length; i++) {
    text += stats[i].toString() + "\n"
  }
  
  fs.writeFileSync('data/stats.txt', text)
  console.log(text, "fsdgsdgsd");
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

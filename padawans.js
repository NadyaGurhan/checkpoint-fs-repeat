 /* eslint-disable */

const fs = require('fs');

function getPadawanNames() {
  let padawans = fs.readFileSync("./data/padawans.txt","utf-8")
  let arr = padawans.slice(" ")
  return arr
}

function getLightsaberScores() {
  let scores = fs.readFileSync("./data/scores.txt","utf-8")
  let arr = scores.slice(" ")
  return arr
}

function getStats(){
  let names = getPadawanNames()
  let scores = getLightsaberScores()
  let status = []
  let person = []
  for (let index = 0; index < names.length; index++) {
    person.push[names[i]]
    person.push[scores[i]]
    status.push[person]
    person = []
  }
  return status
}

function writeStats(){
  let persons = getStats()
  fs.writeFileSync("data/stats.txt","utf-8")
  for (let index = 0; index < persons.length; index++) {
    fs.appendFileSync("data/stats.txt", `${persons[index][0]}`, "utf-8")
    fs.appendFileSync("data/stats.txt", `${persons[index][1]}\n`, "utf-8")
  }
}
// getPadawanNames()


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

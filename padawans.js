const fs = require('fs')

function getPadawanNames() {
const pad = fs.readFileSync("./data/padawans.txt", "utf-8")
let one = pad.split("\n")
let arrPad = one.filter((item) => item.length > 0 )
}
getPadawanNames()

function getLightsaberScores () {
const ball = fs.readFileSync("./data/scores.txt", "utf-8")
const arrBall = ball.split("\n")
}
getLightsaberScores ()

function getStats () {
  const padFunc = getPadawanNames()
  const ballFunc = getLightsaberScores ()

  }

getStats ()

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  // getStats,
  // writeStats,
};

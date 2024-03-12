const getPadawanNames = require("./data/padawans.txt")
const getLightsaberScores = require("./data/scores.txt")

function getStats() {
  const stats = {
    getPadawanNames : getLightsaberScores
  }
  return stats
}

const fs = require('fs')
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
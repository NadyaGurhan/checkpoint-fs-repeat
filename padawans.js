
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};


function getPadawanNames() {
  return fs.readFileSync('./data/padawans.txt utf-8')
}

function getLightsaberScores() {
  return fs.readFileSync('./data/scores.txt utf-8')
}

function getStats() {
  return fs.readFileSync()
}


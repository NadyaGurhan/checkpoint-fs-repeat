function getLightsaberScores() {
  return fs.readdirSync(`data/scores.txt`);
}
module.exports = getLightsaberScores();
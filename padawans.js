const fs = require('fs')
const { EOL } = require('os')
const {padawans} = require("/data/padawns.txt")
const {scores} = require('/data/scores.txt')
const getPadawanNames(padawans) {
   const names = []
  for (let i = 0; i < padawans.length; i++) {
    const name = padawans[i]
    if (name) { 
      names.push(name)
 }
}
    return names;
}
const getLightsaberScores(scores){
const score = [];
for (let i = 0; i < scores.length; i++) {
  const score = scores[i]
  if (line) {
  const score = Number(line)
  if (!isNaN(score)) {
    score.push(score);
            }
        }
    }
    
    return scores;
}
const getStats()
const writeStats()
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

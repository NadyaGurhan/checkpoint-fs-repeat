const fs = require('fs')
module.exports = {


  getPadawanNames(content){
  content = fs.readFileSync('./data/padawans.txt', 'utf-8')
      return content;
  } 
  getLightsaberScores(scores) {
  scores = fs.readFileSync('./data/scores.txt', 'utf-8')
     return scores;
  }

  getStats,
  writeStats,
};



const fs = require('fs');

  function getPadawanNames() {
    try {
      const content = fs.readFileSync('./data/padawans.txt', 'utf-8');
      const contentArr = content.split('\n');
      const filteredArr = contentArr.filter((el) => el.trim() != '')
      return (filteredArr);
    } catch (e) {
      console.log(e);
    }
  }
  getPadawanNames();

  function getLightsaberScores() {
    try {
      const scores= fs.readFileSync('./data/scores.txt', 'utf-8');
      const scoresArr = scores.split('\n');
      const filteredScoresArr = (scoresArr.filter((el) => el.trim() != '')).map((item) => +item)
      return(filteredScoresArr);
    } catch (e) {
      console.log(e);
    }
  }
  getLightsaberScores();


function getStats() {
  let statsArr = getPadawanNames().map((el) => {
    return [el]
  })
  getLightsaberScores().forEach((item, index) => {
    statsArr[index].push(item);
  }) 
  return (statsArr);
}
getStats()

function writeStats(){
  try {
    getStats().forEach((name, i) => {
     return fs.appendFileSync('data/stats.txt', i >= getStats().length-1? name.join(" ") : name.join(" ") +"\n")
    })
  } catch (err) {
    console.error(err);
  }

}
writeStats()


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};



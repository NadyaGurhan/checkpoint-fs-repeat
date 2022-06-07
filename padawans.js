function getPadawanNames() {
  const fs = require('fs');
  let read = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n');
  let arr = read.pop()
  return read

}
function getLightsaberScores() {
  const fs = require('fs');
  let read = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');
  let result = read.map((array) => Number(array))
  return result
}
function getStats() {
  const names = getPadawanNames();
  const scores = getLightsaberScores();
    let combine = [];
    for (let i=0; i<names.length;i++){
      combine.push([names[i], scores[i]]);
    }
    return combine
  }
  // const fs = require('fs');
  // let read1= fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n');
  // let arr = read1.pop()
  // let read2 = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');
  // let result2 = read.map((array) => Number(array))



  
function writeStats() {
  const fs = require('fs');
  const neww = getStats().map((el) => el.join(' ')).join('\n');
  const file = fs.writeFileSync('./data/stats.txt', neww);
}


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

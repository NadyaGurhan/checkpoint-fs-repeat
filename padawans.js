const fs = require('fs');
// let padawans = fs.readFileSync('./data/padawans.txt', 'utf8'); 
// padawans = padawans.split('\n');
// let scores = fs.readFileSync('./data/scores.txt', 'utf8');
// scores = scores.split('\n');

 function getPadawanNames() {
  let padawans = fs.readFileSync('./data/padawans.txt', 'utf8');
  padawans = padawans.split('\n');
  padawans.pop(); 
  return padawans;
 }

 function getLightsaberScores() {
  let scores = fs.readFileSync('./data/scores.txt', 'utf8');
  scores = scores.split('\n');
  scores = scores.map(item => +item);
  return scores;
 }

 function getStats() {
   let bigArr = [];
   let arr = [];
   let padawans = getPadawanNames();
   let scores = getLightsaberScores();
   for (let i = 0; i < padawans.length; i++) {
     arr = [padawans[i], scores[i]];
     bigArr.push(arr);
   } 
   return bigArr;
    // [
    //   ['Revan', 99.9],
    //   ['Bastila Shan', 92],
    //   ['Jolee Bindo', 87],
    //   ['Juhani', 82],
    // ]
    }

      function writeStats() {
      let stats1 = getStats();
      const stats = stats1.map(item => item.join(' '))
                            .join('\n');
      let statsFile = fs.writeFileSync('data/stats.txt', stats);
      const data = fs.readFileSync('data/stats.txt', 'utf8');
      return data;
      // writeStats(stats);
      // const data = fs.readFileSync('data/stats.txt', 'utf8');
      // expect(data).toBe('Revan 99.9\nBastila Shan 92\nJolee Bindo 87\nJuhani 82');
      }

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

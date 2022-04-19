const fs = require('fs');

const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8')
const scores = fs.readFileSync('./data/scores.txt', 'utf-8')


const getPadawanNames = () => {
  return padawans.trim().split('\n'); 
}


const getLightsaberScores = () => {
return scores.split('\n').map((el) => Number(el));
}


const getStats = () => {
const arr = [];
const padawan = getPadawanNames();
const score = getLightsaberScores();
for (let i = 0; i < padawan.length; i++) {
 arr.push([padawan[i], score[i]])
}
return arr; 
}
getStats(); 


const stats = getStats()

const writeStats = (stats) => {
 return stats.map((el) => el.join(' ')).join('\n')

}

fs.writeFileSync(`data/stats.txt`, writeStats(stats))

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

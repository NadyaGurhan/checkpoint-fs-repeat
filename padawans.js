const fs = require('fs')

function getPadawanNames () { 
  return fs.readFileSync('./data/padawans.txt', 'utf8').split('\n').slice(0, -1);
}

function getLightsaberScores () { 
  return fs.readFileSync('./data/scores.txt', 'utf8').split('\n').map((el)=> Number(el));
}


function getStats () { 
  const stats = [];
  const names = getPadawanNames();
  const scores = getLightsaberScores();
  for (let i=0; i<names.length; i++ ) {
    stats.push([names[i], scores[i]]);
  }
  return stats;
}


function writeStats () { 
  const stats = getStats()
  fs.writeFileSync('./data/stats.txt', stats, 'utf8');
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

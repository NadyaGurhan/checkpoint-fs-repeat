const fs = require('fs');

  function getPadawanNames() {
    const names = fs.readFileSync('data/padawans.txt', 'utf-8').trim().split("\n");
    return names;
  }

  function getLightsaberScores() {
    const scores = fs.readFileSync('data/scores.txt', 'utf-8').split("\n").map((el) => +el);
    return scores;
  }

  function getStats() {
    const padawans = getPadawanNames();
    const padawansScores = getLightsaberScores();

    data = [];
    for (let i = 0; i < padawans.length; i++) {
      data.push([padawans[i], padawansScores[i]]);
    }

    return data;
  }

  function writeStats() {
    const dataToSend = getStats();
    let str = '';
    dataToSend.forEach((a) => (str += `${a[0]} ${a[1]}\n`));
    fs.appendFileSync('data/stats.txt', str.slice(0, str.length - 1));
    return dataToSend;
  }





const a = writeStats();
console.log(a);









module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

const fs = require('fs');

module.exports = {
  getPadawanNames() {
    const data = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n');
    data.pop();
    return data;
  },

  getLightsaberScores() {
    return fs.readFileSync('./data/scores.txt', 'utf-8').split('\n').map(el => +el);
  },

  getStats() {
    let data = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n');
    data.pop();
    let scores = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n').map(el => +el);
    let base = [];
    for (let i = 0; i < data.length; i++) {
      base.push([]);
      base[i].push(data[i], scores[i]);
    }
    return base;
  },
  writeStats() {
    let data = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n');
    data.pop();
    let scores = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n').map(el => +el);
    let base = [];
    for (let i = 0; i < data.length; i++) {
      base.push([]);
      base[i].push(data[i], scores[i]);
    }
    for (let i = 0; i < base.length; i++) {
      base[i] = base[i].join(' ');
    }
    fs.writeFileSync('data/stats.txt', base.join('\n'));
  }
};

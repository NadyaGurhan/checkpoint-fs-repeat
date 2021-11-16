const fs = require('fs'); // подключаем FS

let getPadawanNames = () => {
  let filePath = './data/padawans.txt';
  let data = fs.readFileSync(filePath, "utf8");
  data = data.split('\n');
  data.pop();
  return data;

}

let getLightsaberScores = () => {
  let data = fs.readFileSync('./data/scores.txt', 'utf8');
  data = data.split('\n');
  return data.map(Number);
}

let getStats = () => {
  let padawans = getPadawanNames();
  let scores = getLightsaberScores();
  let stats = [];
  for (let i = 0; i < padawans.length; i++) {
    let upPadawans = [padawans[i], scores[i]];
    stats.push(upPadawans);
  }
  return stats;
}

let writeStats = () => {
  let stat = getStats().map((el) => el.join(' ')).join('\n');
  fs.writeFileSync('./data/stats.txt', stat);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};


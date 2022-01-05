function getPadawanNames() {
  const fs = require("fs");
  let text = fs.readFileSync("data/padawans.txt", "utf8");
  let temp = text.split('\n');
  let result = temp.splice(0, temp.length - 1);
  return result;
}

function getLightsaberScores() {
  const fs = require("fs");
  let text = fs.readFileSync("data/scores.txt", "utf8");
  let temp = text.split('\n');
  for (let i = 0; i < temp.length; i++) {
    temp[i] = Number(temp[i]);
  }

  let result = temp.splice(0, temp.length - 1);
  return result;
}

function getStats() {
  const fs = require("fs");
  let text = fs.readFileSync("data/padawans.txt", "utf8");
  let temp = text.split('\n');
  let result = temp.splice(0, temp.length - 1);

  let text2 = fs.readFileSync("data/scores.txt", "utf8");
  let temp2 = text2.split('\n');
  for (let i = 0; i < temp2.length; i++) {
    temp2[i] = Number(temp2[i]);
  }

  let arrNew = [];
  for (let i = 0; i < result.length; i++) {
    arrNew.push([result[i], temp2[i]]);
  }
  return arrNew;
}

function writeStats() {
  const fs = require("fs");
  let stats = getStats();
  let text = stats.map(item => item.join(' ')).join('\n');
  fs.writeFileSync('data/stats.txt', String(text));
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
}

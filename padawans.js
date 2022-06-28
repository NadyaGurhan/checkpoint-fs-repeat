const fs = require('fs');

// let filePath = "./text.txt";
// let data = fs.readFileSync(filePath, "utf8");
// data = data + "my text";
// fs.writeFileSync(filePath, data);

function getPadawanNames() {
  let a;
  a = fs.readFileSync('./data/padawans.txt', 'utf8');
  a = a.split('\n');
  a.pop();
  return a;
}
// console.log(getPadawanNames());

function getLightsaberScores() {
  let a;
  a = fs.readFileSync('./data/scores.txt', 'utf8');
  a = a.split('\n');
  for (let i = 0; i < 4; i++) {
    a[i] = Number(a[i]);
  }
  return a;
}

// console.log(getLightsaberScores());

function getStats() {
  for (let i = 0; i < 4; i++) {
    const a = [];
    a[i] = a.push(getPadawanNames());
    return a;
  }
}
console.log(getLightsaberScores());

function writeStats() {

}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

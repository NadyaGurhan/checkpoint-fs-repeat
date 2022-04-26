function getPadawanNames() {
  let name = ['Revan', 'Bastila Shan', 'Jolee Bindo', 'Juhani']
  return name
}

let fileContent = fs.readFileSync("../data/padawans.txt", "utf8");
console.log(fileContent)
function getLightsaberScores() {
  return [99.9, 92, 87, 82]
}

function getStats() {
  let res = [
    ['Revan', 99.9],
    ['Bastila Shan', 92],
    ['Jolee Bindo', 87],
    ['Juhani', 82],
  ]
  return res
}

function writeStats() {
  return "hello"
}
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};


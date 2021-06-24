const fs = require('fs');

function getPadawanNames() {
  let data = fs.readFileSync("./data/padawans.txt", "utf8");
  return data.trim().split("\n")
}
function getLightsaberScores() {
  let data = [];
  let str = '';
  str = fs.readFileSync("./data/scores.txt", "utf8").trim();
  return data = str.split("\n").map((e) => +e)
}
function getStats() {
  let arr1 = getPadawanNames();
  let arr2 = getLightsaberScores();
  let newArr = [];
  for (let i = 0; i < 4; i++) {
    let arr = [];
    arr.push(arr1[i], arr2[i]);
    newArr.push(arr);
  }
  return newArr;

}
function writeStats(arr) {
  let str = '';
  for(let i =0; i<4; i++){
    str = str + arr[i].join().replace(",", " ")+'\n';
    
    
  }
  fs.writeFileSync("./data/stats.txt", str.trim())
// return str
}



module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
console.log(writeStats( [
  [ 'Revan', 99.9 ],
  [ 'Bastila Shan', 92 ],
  [ 'Jolee Bindo', 87 ],
  [ 'Juhani', 82 ]
]));

// fs.readFileSync("./file.txt", "utf8");
// fs.writeFileSync("./file.txt", "New text");
// fs.appendFileSync("./file.txt", "Appended text", "utf8");

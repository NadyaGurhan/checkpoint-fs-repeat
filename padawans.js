const fs = require("fs");

// function getPadawanNames() {
//   let readFyle = fs.readdirSync('./data');
//   let readFyle2 = fs.readFileSync('./data/padawans.txt');
//   for (let i = 0; i < readFyle2.length; i++) {
//     console.log(readFyle2[i]);
//   }
// }
// function getPadawanNames() {
//   fs.readdir('./data', (err, data) => {
//     for (let i = 0; i < data.length; i++) {
//       fs.readFile(`./data/${data[i]}`, (err, data) => {
//         console.log(data[i]);
//       })
//       return data[i]
//     }
//   })
// }
// function getPadawanNames() {
//   let arr = [];
//   fs.readFile("data/padawans.txt", "utf8", (err, data) => {
//     if (err) throw err;
//     for (let i = 0; i < data.length; i++) {
//     arr.push(data[i]);
//     }
//     return arr;
//   });
// }
function getPadawanNames() {
  const content = fs.readFileSync("data/padawans.txt", "utf8");
  let arr = [];
  let res = arr.push(content.split('\n'));
  return arr.flat().splice(arr.length -1, 4);
}

function getLightsaberScores() {
  const content2 = fs.readFileSync('data/scores.txt', 'utf-8');
  let arr = [];
  let res = arr.push(content2.split('\n'));
  return arr.flat().splice(arr.length - 1, 4).map(el => +el);
}
console.log(getLightsaberScores());

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  // getStats,
  // writeStats,
};

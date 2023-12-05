const { log } = require("console");
const fs = require("fs");
const path = require("path");

const getPadawanNames = fs.readFileSync("./data/padawans.txt", "utf8");
console.log(getPadawanNames);

// const getPadawanNames = () =>{
//   const padawanRead = fs.readFileSync(path.join(__dirname, '../data/padawans.txt'));
//   console.log(padawanRead);
// }
// const allNames = []
// function Names(string) {
//   for (let i = 0; i < num; i++) {
//     result.push(allNames);
// }
//  console.log(allNames);
// const readFile = () => {
//   const readData = fs.readFileSync(
//     path.join(__dirname, '../data/padawans.txt'),
//     'utf8',
//   );
//   console.log(readData);
// };const readFile = () => {
//   const readData = fs.readFileSync(
//     path.join(__dirname, '../data/padawans.txt'),
//     'utf8',
//   );
//   console.log(readData);
// };
// const readDirectory = () => {
//   const fileNames = fs.readdirSync(path.join(__dirname, '../data/padawanns.txt'));
//   console.log(fileNames);
// };

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

const fs = require('fs');

const listOfPadawans = './data/padawans.txt';
const scoresOfPadawans = './data/scores.txt';


function getPadawanNames () {
  return fs.readFileSync(listOfPadawans, "utf8")
  .trim()
  .split('/n')
  }

function getLightsaberScores () {
  return fs.readFileSync(scoresOfPadawans, "utf8")
  .trim()
  .slice(,-1)
  .split('/n')
  .map(element => Number(element));
  }

function getStats () {
  const names = getPadawanNames();
  const scores = getLightsaberScores();
  return names.map((element, i) => [element, scores[i]]);
  }


function writeStats () {

}




module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

// const padawan = new Padawans();
// console.log(padawan.getPadawanNames(padawans.txt));
// const people = parser.parse(fileName);
// parser.write("text.csv", people);

// class PerfectParser {
//   parse(fileName) {
//     const dataFromFile = fs.readFileSync(fileName, "utf8");
//     const arrayFromFile = dataFromFile
//       .split("\n")
//       .map((element) => element.split(","))
//       .slice(1, -1)
//       .map((element) => new Person(...element));
//     return arrayFromFile;
//     // console.log('-----> 14', arrayFromFile)
//   }
//   write(filename, people) {
//     let objectToString = JSON.stringify(people);
//     fs.writeFileSync(filename, objectToString);

//     // Saves the data for each person (new Person(...))
//     // to the specified file.
//   }
// }

// const parser = new PerfectParser();
// // console.log(parser.parse(fileName));
// const people = parser.parse(fileName);
// parser.write("text.csv", people);

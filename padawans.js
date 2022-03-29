//ни черта даже путь прописать не смог

const fs = require("fs");

function getPadawanNames() {
const some = fs.readFileSync('./padawans.txt', "utf8");
return some;
}

function getLightsaberScores() {

}

function getStats() {

}

function writeStats() {

}

console.log(getPadawanNames());

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

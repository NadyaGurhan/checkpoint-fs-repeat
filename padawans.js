const fs = require("fs");
const getPadawanNames = () => {
 
  const names = fs.readFileSync("./data/padawans.txt", "utf-8")
  console.log(names)
  let arrNames = names.split("\n")
  // arr.push(names.split("\n"))
  console.log(arrNames)


  return arrNames
}


const getLightsaberScores = () => {

}

const getStats = () => {

}

const writeStats = () => {

}


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

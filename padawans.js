const fs = require('fs');

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

const findNames= fs.readFileSync(`${__dirname}/data/padawans.txt`, "utf-8");

const findScores= fs.readFileSync(`${__dirname}/data/scores.txt`, "utf-8");


function getPadawanNames() {
 const arr = findNames.trim().split('\n')
return arr;
}



function getLightsaberScores {

}

function getStats {

}

function writeStats {


}


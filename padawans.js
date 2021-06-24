const fs = require('fs');


bestCrew = fs.readFileSync("./data/padawans.txt", 'utf8').split('\n');
function getPadawanNames() {
let pop = bestCrew.pop()
return bestCrew; 
}
// return console.log(getPadawanNames());



function getLightsaberScores() {

}

function getStats() {

}

function writeStats() {

}




module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

const fs = require('fs')
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};


function getPadawanNames (){

  let padawansFile = fs.readFileSync('./data/padawans.txt', 'utf8');
  let crewCapArrs = padawansFile.split('\n').map((item) => item);
  lastcrewCapArrs = crewCapArrs.pop()
  return crewCapArrs
}

function getLightsaberScores (){
  let Lightsaber = fs.readFileSync('./data/sco.txt', 'utf8');
  let Lightsaber = padawansFile.join((item) => item);
  return Lightsaber
}

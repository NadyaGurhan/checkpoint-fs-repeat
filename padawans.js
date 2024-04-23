const fs = require('fs')
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

function getPadawanNames(){
  const ter = fs.readFileSync('./data/padawans.txt', "utf8")
  return ter.split(' ')
}



function getLightsaberScores(){
  const ret = fs.readFileSync('./data/score.txt', "utf8")
  return ret.split(' ')
}

//все что осилил и то не работает ..... 
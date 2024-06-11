const fs = require('fs')

function getPadawanNames(){
  const newNames = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n'); // уточнить почему с trim не работает
  const result = [];
  for (let i = 0; i < newNames.length-1; i ++){
    result.push(newNames[i]);
  }
  return result;
}

function getLightsaberScores(){
  const newScores = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n'); // для себя - глянуть почему не работает с .map(Number);
  const result = [];
  for (let i = 0; i < newScores.length; i ++){
    result.push(+newScores[i]);
  }
  return newScores;
}

function getStats() {
  const newNames = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n'); 
  const newScores = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');

  const result = [];
  for (let i = 0; i < newScores.length; i ++){
    result.push(newNames[i], +newScores[i] );
  }

return result; 
}

function writeStats() {
//тут точно надо fs.appendFile
}


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};


getStats()
const fs = require('fs');


function getPadawanNames(){
  let padawansList = fs.readFileSync('data/padawans.txt', 'utf-8');
padawansList = padawansList.split("\n");
padawansList.splice(-1);
return padawansList
}

function getLightsaberScores(){
  let padawansScores = fs.readFileSync('data/scores.txt', 'utf-8');
  padawansScores = padawansScores.split("\n");
  
return padawansScores = padawansScores.map(el=> +el )
}


function getStats(){
  let padawansList = fs.readFileSync('data/padawans.txt', 'utf-8');
  let padawansScores = fs.readFileSync('data/scores.txt', 'utf-8');
  padawansList = padawansList.split("\n");
  padawansList.splice(-1);
  padawansScores = padawansScores.split("\n");
  let result = [];
for (let i = 0; i < padawansList.length; i++){
  result.push([padawansList[i],+padawansScores[i]])
}
return result 
}


function writeStats(){
    
  let result = getStats();
  for ( let i = 0; i < result.length; i++ ){
    result[i]=result[i].join(' ')
  }

  result = result.join('\n')
  fs.writeFileSync('data/stats.txt', result);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

const fs = require('fs');

function getPadawanNames(){
 return fs.readFileSync('./data/padawans.txt','utf-8').trim().split('\n');

}

function getLightsaberScores(){
  return fs.readFileSync('./data/scores.txt','utf-8').trim().split('\n');
}

function getStats (){
let files = fs.readdirSync('./data/','utf8');
console.log(files);
for (let i=0; i < files.length;i++){
let file = fs.readFileSync(`./data/${files[i]}`,'utf-8');
return file;
}
}

function writeStats(){
return fs.writeFileSync('/data/stats.txt',getStats(),'utf-8').join('\n');
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

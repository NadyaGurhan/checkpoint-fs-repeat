const fs = require('fs');

function getPadawanNames (){
  const someFile = fs.readFileSync('./data/padawans.txt', 'utf8');
  let names = someFile.split('\n');
  names = names.slice(0, 4);
  return names;
}

function getLightsaberScores() {
  const someFile = fs.readFileSync('./data/scores.txt', 'utf8');
  let scores = someFile.split('\n').map(el => el = Number(el));
  return scores;
}

function getStats(){
  const names = getPadawanNames();
  const scores = getLightsaberScores();
  let tablePadawans = [];
  for (let i = 0; i < names.length; i++){ 
    tablePadawans.push([names[i], scores[i]]);
    // someText = someText + names[i] + ' ' + scores[i] + '\n';
  }

  return tablePadawans;

}

function writeStats(){
  const table = getStats();
  let someText = '';
  // table.forEach((el) => (someText+= `${el[0]} ${el[1]}\n`));
  for (let i = 0; i < table.length; i++){
    // tablePadawans.push([names[i], scores[i]]);
    if (i === table.length-1){
      someText = someText + table[i][0] + ' ' + table[i][1];
    } else {
      someText = someText + table[i][0] + ' ' + table[i][1] + '\n';
    }
  }

  fs.writeFileSync('data/stats.txt', someText, 'utf8');
}

// console.log(getPadawanNames());
// console.log(getLightsaberScores());
// console.log(writeStats());

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

const fs = require('fs');

function getPadawanNames(){
    let b = fs.readFileSync('./data/padawans.txt', 'utf8').split('\n');//map в ретерне if
    b.pop();
    return b;
}
function getLightsaberScores(){
    return fs.readFileSync('./data/scores.txt', 'utf8').split('\n').map((strr) => Number(strr));
}
function getStats (){
    let b = fs.readFileSync('./data/padawans.txt', 'utf8').split('\n');
    let a = fs.readFileSync('./data/scores.txt', 'utf8').split('\n');
    let res = [];
    for(let i = 0; i < a.length; i++){
        res.push([b[i], Number(a[i])]);
    }
    return res;
}
function writeStats(){
    let a = getStats().map((pos) => pos.join(' '));;
    
    fs.writeFileSync('./data/stats.txt', a.join('\n'));
}
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

const fs = require('fs')

function getPadawanNames(){
  let name = fs.readFileSync('data/padawans.txt', 'utf-8').trim().split('\n')
  return name;
}

function getLightsaberScores(){
  let sword = fs.readFileSync('data/scores.txt', 'utf-8').trim().split('\n')
  .map((el)=> Number(el))
  return sword;
}

function getStats(){
 let padawans = getPadawanNames()
 let sword = getLightsaberScores()
 const arr = []
 const newArr = []
 let res = padawans.map((nam, sw) => nam + ' ' + sword[sw])
//  console.log(res);
  let result = res.join(' ')

 newArr.push(result.split(' '));
 console.log(newArr);
 }


function writeStats(){
  let stats = fs.writeFileSync('data/')
return stats
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

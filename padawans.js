const fs = require('fs');

class getPadawanNames {

}
class getLightsaberScores {

}
class getStats {

}
class writeStats {

}

let padavanInfo = []
const padavan = fs.readFileSync('data/padawans.txt', 'utf-8')
let newPadavan = padavan.split('\n')

const possession = fs.readFileSync('data/scores.txt', 'utf-8')
let newPossession = possession.split('\n')

for (let i = 0; i < newPadavan.length; i++) {
 let inf = newPadavan[i] + ',' + newPossession[i]

 padavanInfo.push(inf)

}


const arrPadavan = padavanInfo.map(el => el.split(','))
console.log(arrPadavan)

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

function getPadawanNames(names) {
const namesArr = [];
const param = require('./data/padawans.txt')
for (let i = 0; i < names.length; i += 1){
namesArr.push(param())
})
}
return namesArr;
}
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

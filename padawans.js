function getPadawanNames(name) {
  let resultName = []
  for (let i=0;i<name.length; i++) {
    resultName.push(name(i))
  }
  return resultName
}

function getPadawanScores (num) {
  let resultNum =[];
  for (let i=0;i<num.length; i++) {
     resultNum.push(num[i])
  }
  return resultNum
}


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

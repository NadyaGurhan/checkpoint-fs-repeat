const { log } = require('console');
const fs = require('fs');
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

function getPadawanNames() {
  const x = fs.readFileSync('./data/padawans.txt', 'utf-8');
  const cplitX = x.split('\r\n');
  const res = cplitX.pop();
  return cplitX;
}

function getLightsaberScores() {
  const y = [];
  const x = fs.readFileSync('./data/scores.txt', 'utf-8');
  const cplitX = x.split('\r\n');
  for (let el of cplitX) {
    y.push(Number(el));
  }
  return y;
}
function getStats() {
  const resArr = []
  const x = fs.readFileSync('./data/padawans.txt', 'utf-8');
  const cplitX = x.split('\r\n');
  const res = cplitX.pop();
  const y = fs.readFileSync('./data/scores.txt', 'utf-8');
  const cplitScores = y.split('\r\n');
  console.log(cplitScores[0]);
  for (let i = 0; i < cplitScores.length; i++){
      const oneName = structuredClone(cplitX[i])
      const oneCount = structuredClone(cplitScores[i])
      resArr.push([oneName, Number(oneCount)])
  }
  return resArr

}



function writeStats() {
  const resArr = []
  const x = fs.readFileSync('./data/padawans.txt', 'utf-8');
  const cplitX = x.split('\r\n');
  const res = cplitX.pop();
  const y = fs.readFileSync('./data/scores.txt', 'utf-8');
  const cplitScores = y.split('\r\n');
  
  for (let i = 0; i < cplitScores.length; i++){
      const oneName = structuredClone(cplitX[i])
      const oneCount = structuredClone(cplitScores[i])
      resArr.push([oneName, Number(oneCount)])
  }

  return resArr

}
console.log(writeStats());

function getPadawanNames () {
const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8')
const Newpadawans = padawans.trim().split('/n')
return Newpadawans
}

function getLightsaberScores () {
const scores = fs.readFileSync('./data/scores.txt', 'utf-8');
const newScores = scores.trim().split('\n');
const newArr=[];
for (let i = 0; i < newScores.length; i++) {
  const element = newScores[i];
  newArr.push(Number(element))
}
return newArr;
}

function getStats () {

}

function writeStats () {

}
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

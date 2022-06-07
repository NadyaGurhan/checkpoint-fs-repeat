function getPadawanNames(){
  let arr = fs.readFileSync('data/padawans.txt', 'utf8')
  let nameBlock = [];
 for(let i = 0; i < arr.length; i++) {
   nameBlock.push(arr[i])
 }
}

function getLightsaberScores() {

}

function getStats(){

}

function writeStats() {

}


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
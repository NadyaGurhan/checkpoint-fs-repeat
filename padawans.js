const fs = require(`fs`)
let namesPad = fs.readFileSync(`/Users/aleksandrsepilov/Elbrus/1 фаза/2 day/chek 1 day/checkpoint-fs/data/padawans.txt`,`utf-8`);
module.exports = {
  getPadawanNames(),
  getLightsaberScores,
  getStats,
  writeStats,
};

function getPadawanNames () {
  
  let result = namesPad.split(`\n`).filter(a=>a !=``)
  return result
}

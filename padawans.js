const fs = require('fs')
function getPadawanNames(){
  const name =[];
  const quary = 'select name from padawans.txt'
  const result = database.quary(quary);
  while(result.next()){
    
  }
}
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

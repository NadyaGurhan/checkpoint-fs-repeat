const fs = require('fs')

  function getPadawanNames() {
    const data = fs.readFileSync('data/padawans.txt', 'utf8');
    const names = data.split('\n').map(name => name.trim());

    // for (let i = 0; i < names.length; i++) {
     
      return names;
    
  }        


  


module.exports = {
  getPadawanNames,
  // getLightsaberScores,
  // getStats,
  // writeStats,
};

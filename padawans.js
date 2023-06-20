const { isUtf8 } = require('buffer')
const fs = require('fs')
module.exports = {

function getPadawanNames() {
    const data = fs.readFileSync('data/padawans.txt', 'utf8');
    const lines = data.split(',');
    return lines;
  }
  
}

  // function getLightsaberScores() {

  // },

  // function getStats() {

  // },

  // function writeStats() {

  // },
// };

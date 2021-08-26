const fs = require('fs');
function getPadawanNames() {
  fs.readFile("./data/padawans.txt", "utf8", function (error, data) {
    // console.log(data.split('\n').slice(0,4))
    if (error) throw error
    return data.split('\n').slice(0, 4);
  });
};

function getLightsaberScores() {
  fs.readFile("./data/scores.txt", "utf8", function (error, data) {
    // console.log(data.split('\n').slice(0,4))
    if (error) throw error
    return data.split('\n').slice(0, 4);
  });
}

function getStats() {
  fs.open('stats.txt', 'w', (err) => {

  });
  fs.writeFile("./data/stats.txt", function (error, data) {
    if (error) throw error
    return data;
  });
};

function writeStats() {

}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

const fs = require('fs');

    function getPadawanNames() {
      let data = fs.readFileSync('./data/padawans.txt', 'utf8');
      return data.trim().split("\n")
    }
    function getLightsaberScores() {
      let data = [];
      let str = '';
      str = fs.readFileSync('./data/scores.txt', 'utf8').trim();
      return data = str.split("\n").map((e) => e *1)
    }
    function getStats() {
      let arrOne = getPadawanNames();
      let arrTwo = getLightsaberScores();
      let newArr = [];
      for (let i = 0; i < 4; i++) {
        let arr = [];
        arr.push(arrOne[i], arrTwo[i]);
        newArr.push(arr);
      }
      return newArr;
    
    }
    function writeStats(arr) {
      let str = '';
      for(let i =0; i<4; i++){
        str = str + arr[i].join().replace(',', ' ')+'\n';
    
    
      }
      fs.writeFileSync("./data/stats.txt", str.trim())
    }
    
    
    
    module.exports = {
      getPadawanNames,
      getLightsaberScores,
      getStats,
      writeStats,
    };
  
    


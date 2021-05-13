const fs = require('fs');
// const padawans = fs.readFileSync('../padawans.txt', 'utf8');

// class Person {
  
//   constructor(name1, name2, name) {
//       this.first_name = first_name;
//       this.last_name = last_name;
//       this.email = email;
//       this.phone = phone;
//       this.born_at = born_at; //посатвить Date
//     }

//   }

  function getPadawanNames () {
      // const data = fs.readFileSync('../padawans.txt', 'utf8');
      const names = fs.readFileSync('./data/padawans.txt', 'utf8');
      const arr = names.split("\n");
      return arr.slice(0,-1)
      
      // return arr.slice(0,-1);
  }
  // console.log(getPadawanNames());
  
  function getLightsaberScores() {
    const scores = fs.readFileSync('./data/scores.txt', 'utf8');
    const scoreArr = scores.split("\n");
    return scoreArr.slice(0, -1);
  }
  
  function getStats() {
  
  }
  
  function writeStats () {
  
  }




module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

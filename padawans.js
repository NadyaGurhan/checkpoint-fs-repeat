const fs = require('fs');
// const padawans = fs.readFileSync('../padawans.txt', 'utf8');

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
    let scoreArr = scores.split("\n");
    scoreArr = scoreArr.map(el =>  Number(el))
    // console.log(scoreArr);
    return scoreArr;
  }
  
  function getStats() {
    const name = getPadawanNames ();
    const score = getLightsaberScores();

    let newScoreArr = [];

    for (let i= 0;  i< name.length; i++) {
       newScoreArr.push([name[i], score[i]])
    }
    
    // console.log(newScoreArr)
    return newScoreArr;
  
  }
  
  function writeStats () {
    let text = "";
    let arr = getStats();

    // let newArr = [];
  
    // for (let i = 0; i < arr.length; i++) {
    //   newArr.push(arr[i].join(' '));
    // }
   
    // let dataText = newArr.join("\n");

    // fs.writeFileSync('data/stats.txt', dataText)

    ////----////

    for (let i = 0; i< arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
       
       if (j==1) {
        text += arr[i][j] + '\n' ;
        // text += "\n";
       }else {
        text += `${arr[i][j]} `;
       }
        
      }
    }

    console.log(text);
  }




module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

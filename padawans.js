const fs = require("fs")

function getPadawanNames(){
 //let arr =[]
  fs.readFile(".data/padawans.txt", "utf8", (err, text) => {
    return text.split("\n");
  });
}



function getLightsaberScores(){
let myArr = []
  fs.readFile(".data/scores.txt","utf8",(err, namber) => {
    myArr.push(namber)
});
}


function getStats(){
  let hero = []
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < myArr.length; j++) {
      hero.push(arr[i,myArr[j]])
    
  }
  
}
return hero
}


function writeStats(){

}

//getPadawanNames()







module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

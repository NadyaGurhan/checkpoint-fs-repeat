const fs = require('fs')


const readFile = (path) =>{
  const data = fs.readFileSync(`./data/padawans.txt`,'utf-8');
  return data;
}



const getPadawanNames = (path) => fs.readdirSync(path){


  function (readFile) {
   const data = fs.readFileSync(`./data/padawans.txt`, 'utf-8')
   return data
  }
}


// const getPadawanNames =(path) 


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
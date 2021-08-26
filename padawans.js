const fs = require('fs');


function getPadawanNames(){
  fs.readFile('./data/padawans.txt', 'utf8', (err, data) => {
    if (err) throw new Error(err)
    data.split('\n').slice(0,-1) // return data
  });
  return data
}
// console.log(getPadawanNames())

module.exports = {
  getPadawanNames,
  // getLightsaberScores,
  // getStats,
  // writeStats,
};
// fs.writeFile('./hello.txt', newString, (err, data) => {
//       if (err) console.log('ERRROOORRR!!!!11', err);
//       // console.log(data);
//       fs.readFile('./hello.txt', 'utf-8', (err, data) => {
//         if (err) console.log('ERRROOORRR!!!!11', err);
//         // console.log(data);
//       })
//     })

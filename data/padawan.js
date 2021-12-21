function getPadawanNames(){
  const fs = require('fs');
   let result = fs.readFileSync("data/padawans.txt`", "utf8");
    let arr = result.split('\n');
    let res = arr.splice(0,4)
    console.log(arr)
    return arr

}
getPadawanNames();

module.exports = {
  getPadawanNames,
}

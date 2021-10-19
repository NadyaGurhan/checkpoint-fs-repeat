const fs = require('fs');




function getPadawanNames() {
  let names = fs.readFileSync("./padawans.txt", "utf8");
  return names
}

console.log(getPadawanNames())

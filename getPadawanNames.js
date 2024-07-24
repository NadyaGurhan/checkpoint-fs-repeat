let fs = require('fs');
function getPadawanNames(num) {
    let array = fs.readFileSync('padawans.txt').toString().split("\n");
    for (i in array) {
        console.log(array[i]);
    }
}
module.exports = getPadawanNames
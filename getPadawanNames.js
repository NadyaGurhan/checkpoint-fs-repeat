const fs = require('fs');

function getPadawanNames () {
    const padawans = fs.writeFile('./data/padawans.txt');
    const padawansArray = crew.split('\n');
    return padawansArray;

}

module.exports = {getPadawanNames};
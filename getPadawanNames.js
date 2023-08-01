const fs = require('fs')
const filePath = './data/padawans.txt';

function getPadawanNames() {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const fullNames = fileContent.split('\n').map((name) => name.trim());
    return fullNames;
}
module.exports = getPadawanNames;
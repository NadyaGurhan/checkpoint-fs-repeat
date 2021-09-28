const fs = require('fs');

const data = fs.readFile('/data/padawans.txt')

const total = fs.readFile(data, 'utf8')
console.log(total)

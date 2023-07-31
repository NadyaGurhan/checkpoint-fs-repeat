const fs = require('fs');

function getPadawanNames() {
  const names = fs.readFileSyncs('./data/padawans.txt', 'utf-8');
  console.log(names);
  const namesStr = names.split('\n');
  return namesStr;
}

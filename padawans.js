const fs = require('fs');
const path = require('path');

function getPadawanNames() {
  const filePath = path.join(__dirname, 'data', 'padawans.txt');

  if (!fs.existsSync(filePath)) {
    console.log('Файл не найден');
    return [];
  }

  const data = fs.readFileSync(filePath, 'utf8');

  const lines = data.split('\n');
  const names = [];

  for (let i = 0; i < lines.length; i++) {
    const name = lines[i].trim();
    if (name !== '') {
      names.push(name);
    }
  }

  return names;
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

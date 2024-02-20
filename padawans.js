const fs = require('fs');
const path = require('path');

const getPadawanNames = () => {
  const readPadawan = fs.readFileSync(
    path.join(__dirname, '../data/padawans.txt'),
    'utf8',
  );
  return readPadawan;
};

const getLightsaberScores = () => {
  const readLight = fs.readFileSync(
    path.join(__dirname, '../data/scores.txt'),
    'utf8',
  );
  return readLight;
};

export default {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

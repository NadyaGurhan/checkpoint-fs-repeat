const fs = require('fs');

function getPadawanNames() {
  const padawan = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n');
  const padawans = padawan.filter((item) => item !== '');
  return padawans;
}
function getLightsaberScores() {
  const skill = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');
  for (let i = 0; i < skill.length; i += 1) {
    skill[i] = +skill[i];
  }
  return skill;
}

function getStats() {
  const padawans = getPadawanNames();
  const skill = getLightsaberScores();
  const padSkill = [];
  for (let i = 0; i < padawans.length; i += 1) {
    const skills = [];
    for (let j = 0; j < 2; j += 1) {
      if (j === 0) {
        skills.push(padawans[i]);
      } else {
        skills.push(+skill[i]);
      }
    }
    padSkill.push(skills);
  }

  return padSkill;
}

function writeStats() {
  const skill = getStats();
  console.log(skill);
  skill.forEach((element) => {
    fs.writeFileSync('./data/stats.txt', element);
  });
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

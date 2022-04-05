const fs = require('fs');

function getPadawanNames() {
  let padawan = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n');
  let padawans = padawan.filter(item => item !== '');
  return padawans;
}
function getLightsaberScores() {
  let skill = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');
  for(let i = 0; i < skill.length; i++){
    skill[i] = +skill[i];
  }
  return skill;
}

function getStats() {
  let padawan = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n');
  let padawans = padawan.filter(item => item !== '');
  let skill = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');
  let padSkill = [];
  for(let i = 0; i < padawans.length; i++) {
    let skills = []
    for(let j = 0; j < 2; j++){
      if (j === 0){
        skills.push(padawans[i])
      } else{
        skills.push(+skill[i])
      }
      
    }
  padSkill.push(skills)
  }
  
  return padSkill;
  }

  function writeStats() {
    let padawan = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n');
    let padawans = padawan.filter(item => item !== '');
    let skill = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');
    let padSkill = [];
    for(let i = 0; i < padawans.length; i++) {
      let skills = []
      for(let j = 0; j < 2; j++){
        if (j === 0){
          skills.push(padawans[i])
        } else{
          skills.push(+skill[i])
        }
        
      }
    padSkill.push(skills)
    console.log(padSkill)
    }
    for( let i = 0; i < padSkill.length; i++) { 
      fs.writeFileSync('./data/stats.txt', padSkill[i]);
    }
  }

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

const fs = require("fs");

function getPadawanNames(){
    let padawans = fs.readFileSync('./padawans.txt','utf8').split('\n')
        padawans.splice(4,1);
        return padawans;
}
getPadawanNames()

function getSkillsPadawans(){
    let score = fs.readFileSync('./scores.txt','utf8').split('\n')
    return score;
}
getSkillsPadawans()


module.exports = {
    getPadawanNames,
    getSkillsPadawans};


function SkillsPadawans(){
   let name = getPadawanNames
   console.log(name);
}
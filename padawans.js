const fs = require('fs')

function getPadawanNames(){
  const arrNames = fs.readFileSync('../checkpoint-fs/data/padawans.txt', 'utf8');
  //console.log(arrNames);
  let resNames = arrNames.trim().split("\r\n");
  return resNames;
}

function getLightsaberScores(){
  const arrScores = fs.readFileSync('../checkpoint-fs/data/scores.txt', 'utf8');
  //console.log(arrScores);
  let resScores = arrScores.split("\r\n");
  let resScoresNum = resScores.map((item)=>{
    return +item;
  })
  //console.log(resScoresNum);
  return resScoresNum;
}

function getStats(){
  const arrScores = fs.readFileSync('../checkpoint-fs/data/scores.txt', 'utf8').split("\r\n");;
  //console.log(arrScores);
  const padawans = fs.readFileSync('../checkpoint-fs/data/padawans.txt', 'utf8').trim().split("\r\n");;
  //console.log(padawans);
  let res = []; 
  padawans.map((item, i)=>{
    res.push([item, Number(arrScores[i])]);
  });
  //console.log(res);
  return res;
}

function writeStats(stats){
  //console.log(stats.join('\n'));
  //fs.appendFileSync('../checkpoint-fs/data/stats.txt', `${stats.join('\n')}`)
  //fs.appendFileFile('../checkpoint-fs/data/stats.txt', `${stats}\n`);
  //let stats = getStats();
  let m ='';
  let print = stats.map((item, i)=>{
    //let tmp = stats[i].join(' ');
    //console.log(tmp);
    //console.log(stats[i].join(' '));
    // console.log(typeof(stats[i].join(' ')));
    // console.log(item[i]);
    m+=item.join(' ') + '\n';    
    // fs.appendFileSync('../checkpoint-fs/data/stats.txt', `${stats[i].join(' ')}\n`);
    return item.join(' ');
  })
  let res = print.join('\n');
  fs.appendFileSync('../checkpoint-fs/data/stats.txt', `${res}`);
  // fs.appendFileSync('../checkpoint-fs/data/stats.txt', `${m}`);
  // //console.log(m);
  // //console.log(print);
  // const data = fs.readFileSync('data/stats.txt', 'utf8');
  // console.log(data);
  console.log(res);
}













module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

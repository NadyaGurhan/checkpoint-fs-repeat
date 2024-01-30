const fs = require('fs')
let pad = "./data/padawans.txt";
let pad1 = "./data/scores.txt";
let result2 = []
let result =[]
const data = fs.readFileSync(pad,"utf-8").split('\n').slice(0,4).forEach((ar)=>{
  result2.push([ar])
})

const result3 = result2.map((ar)=>{
   return ar = ar.push(result)
})

const data1 = fs.readFileSync(pad1,"utf-8").split('\n').forEach((ar)=>{
  result.push([Number(ar)])
})

const getPadawanNames = ()=>{
  const data = fs.readFileSync(pad,"utf-8").split('\n').slice(0,4)
  return data
}

const getLightsaberScores = ()=> {
  let pad = "./data/scores.txt";
  let result =[]
const data1 = fs.readFileSync(pad1,"utf-8").split('\n').forEach((ar)=>{
  result.push(Number(ar))
})
return result
}

const getStats = ()=>{

}
console.log(result3)
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  // writeStats,
};
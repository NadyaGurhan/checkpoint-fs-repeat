const fs = require("fs")

function getPadawanNames() {
  const padawans = fs.readFileSync('data/padawans.txt', 'utf8')
  let y = padawans.split("\n")
  let arr1 = []
  for (let i = 0; i < y.length - 1; i++) {
    arr1.push(y[i])
  }
  return arr1
}

function getLightsaberScores() {
  const scores = fs.readFileSync('data/scores.txt', 'utf8')
  let x = scores.split("\n")
  let arr2 = []
  for (let i = 0; i < x.length; i++) {
    arr2.push(Number(x[i]))
  }
  return arr2
}

function getStats() {
  const padawans = fs.readFileSync('data/padawans.txt', 'utf8')
  let y = padawans.split("\n")
  let arr1 = []
  for (let i = 0; i < y.length - 1; i++) {
    arr1.push(y[i])
  }
  const scores = fs.readFileSync('data/scores.txt', 'utf8')
  let x = scores.split("\n")
  let arr2 = []
  for (let p = 0; p < x.length; p++) {
    arr2.push(Number(x[p]))
  }
  let arr3 = []
  for (let o = 0; o < arr1.length; o++) {
    let arr4 = [arr1[o]]
    arr3.push(arr4)
  }
  for (let u = 0; u < arr2.length; u++) {
    arr3[u].push(arr2[u])
  }
  return arr3
}

function writeStats() {
  const padawans = fs.readFileSync('data/padawans.txt', 'utf8')
  let y = padawans.split("\n")
  let arr1 = []
  for (let i = 0; i < y.length - 1; i++) {
    arr1.push(y[i])
  }
  const scores = fs.readFileSync('data/scores.txt', 'utf8')
  let x = scores.split("\n")
  let arr2 = []
  for (let p = 0; p < x.length; p++) {
    arr2.push(Number(x[p]))
  }
  let arr3 = []
  for (let o = 0; o < arr1.length; o++) {
    let arr4 = [arr1[o]]
    arr3.push(arr4)
  }
  for (let u = 0; u < arr2.length; u++) {
    arr3[u].push(arr2[u])
  }
  let str = []
  for (let t = 0; t < arr3.length; t++) {
    
        for (let r = 0; r < arr3[r].length; r++) {
          if (r % 2 == 0){ str.push(arr3[t][r])} else  str.push(` ${arr3[t][r]}`)
     
    }

    str.push("\n")
  }
  let fin = str.join("")
  fs.writeFileSync(`./data/stats.txt`, fin, "utf8")
   
  return fin
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

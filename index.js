const fs=require('fs');
let getPadawanNames = function getPadawanNames() {
  
  let names=fs.readFileSync('./data/padawans.txt','utf8');
  names=names.split('\n').slice(0,4);
  return names; 
}

console.log(getPadawanNames());

/*
const fs=require('fs');
let getPadawanNames = function getPadawanNames() {
  let arr=[];
  let names=fs.readFileSync('./data/padawans.txt','utf8');
 
  arr.push(names.split('\n'));
  arr[0]=arr[0].slice(0,4);
  return arr[0];
  
}

console.log(getPadawanNames());
*/


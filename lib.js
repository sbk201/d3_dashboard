import {curry} from "lodash";
import 'es7-object-polyfill';
import {differenceInDays} from 'date-fns';
export const objMap=(obj,fn)=> Object.entries(obj).map(([key,va])=>fn([key,va]));
export const objMap2=(obj,fn)=> Object.entries(obj).map(([key,va])=>({[key]:fn([key,va])}));

export const objLoop=(obj,fn)=> Object.entries(obj).reduce((acc,[key,va])=>(Object.assign({},acc,fn([key,va]))),{});
export const objLoop2=(obj,fn)=> Object.entries(obj).reduce((acc,[key,va])=>(Object.assign({},acc,{[key]:fn([key,va])})),{});
export const sumOfObjectBy=(array,key)=>array.reduce((self,value)=>self+value[key],0)

const toEntries=it=>Array.isArray(it)? it.map(e=>Object.entries(e)[0]) : Object.entries(it);
export const accum=(target,fn)=> toEntries(target).reduce((self,pair)=>self+fn(pair),0);
export const map=(target,fn)=> toEntries(target).map(pair=>fn(pair));
export const statBy=curry((theKey,array)=>
  array.map(e=>e[theKey]).reduce((self,key)=>{
  const amount= self[key] ? self[key]+1 : 1;
  // {amount:123,name:"key"}
  return Object.assign({},self,{[key]:amount})
  },{}))
// map(object,([key,va])=>{
  // return (key==='a' || key==='c') && 123
// })

window.lib={objMap,objMap2,objLoop,objLoop2,sumOfObjectBy,map,accum,statBy,toEntries,differenceInDays};

/*
Usage:
var array=[{a:1},{b:2},{c:3}];
var object={a:1,b:2,c:3};

objLoop2(obj,([key,va])=>va+5); //output {"a": 6, "b": 7, "c": 8 }
objLoop2(obj,([key,va])=>key==="a" ? va+10 : va); //output {"a": 11, "b": 2, "c": 3 }


lib.map(array,([key,va])=>{
  if (key==='a' || key==='c'){
  return va+10
  }else{
  return 0
  }
})
only add 10 if it's a or c,then return the added value;
output: [ 11, 0, 13 ]

lib.accum(array,([key,va])=>{
  if (key==='a' || key==='c'){
  return va+10
  }else{
  return 0
  }
})
only add 10 if it's a or c,then return the sum of them
output:24
1+10 + 3+10=24

var statArray=[
{fruit:"apple",other:"thing"},
{fruit:"banana",other:"things"},
{fruit:"apple",some:"thing"},
]
statBy(statArray,"fruit")
output : {apple:2,banana:1}
*/



import {curry} from "lodash";
import 'es7-object-polyfill';
import {differenceInDays,format} from 'date-fns';
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
export const assignWhere =(_object,_args)=>{
  const loop=(object,[key,fn])=>{
    const va=fn(object[key]);
    const pair={[key]:va};
    return Object.assign({},object,pair)
  }
  const loops=(object,args)=>{
    const [arg,...rest]=args;
    const newObj=loop(object,arg);
    if(rest.length===0) return newObj;
    return loops(newObj,rest)
  }
  const toArr=it=> (it.length===1) ? [it] : it;
  return loops(_object,toArr(_args));
}
export const assignWhereArr =(_array,_args)=>{
  const loop=(array,[key,fn])=> array.map(([k,v])=> ( k===key && [k,fn(v)] ) || [k,v]);
  const loops=(array,args)=>{
    const [arg,...rest]=args;
    const newArr=loop(array,arg);
    if(rest.length===0) return newArr;
    return loops(newArr,rest)
  }
  const toArr=it=> (it[0] && Array.isArray(it[0][0])) ? it : [it];
  return loops(_array,toArr(_args));
}

window.lib={objMap,objMap2,objLoop,objLoop2,sumOfObjectBy,map,accum,statBy,toEntries,differenceInDays,assignWhere,assignWhereArr,format};


/*
Usage:
var array=[{a:1},{b:2},{c:3}];
var object={a:1,b:2,c:3};

** objLoop2

objLoop2(obj,([key,va])=>va+5); //output {"a": 6, "b": 7, "c": 8 }
objLoop2(obj,([key,va])=>key==="a" ? va+10 : va); //output {"a": 11, "b": 2, "c": 3 }

** map

lib.map(array,([key,va])=>{
  if (key==='a' || key==='c'){
  return va+10
  }else{
  return 0
  }
})
only add 10 if it's a or c,then return the added value;
output: [ 11, 0, 13 ]

** accum

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

** statBy

var statArray=[
{fruit:"apple",other:"thing"},
{fruit:"banana",other:"things"},
{fruit:"apple",some:"thing"},
]
statBy(statArray,"fruit")
output : {apple:2,banana:1}

** assignWhere
assignWhere(object,[["a",v=>v+10]]) //{"a": 11, "b": 2, "c": 3 }
assignWhere(object,[["a",v=>v+10],["b",v=>v*100]]) //{"a": 11, "b": 200, "c": 3 }
*/



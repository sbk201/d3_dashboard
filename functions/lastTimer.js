import {differenceInSeconds} from "date-fns";

let lastTime=NaN;
// const timer=()=>setInterval(()=>console.log('interval'),1000);
export default function init(_lastTime) {
	lastTime=_lastTime;
	update(lastTime,new Date());
}
var switchValue=([val,...vals])=>
	val || (vals.length && switchValue(vals)) || null;
	// console.log(timer)
	// if (timer) clearInterval(myVar);
const update=(last,now)=>{
	const diff=differenceInSeconds(now,last);
	const diffMin= ~~(diff/60);
	const diffHour= ~~(diff/3600);
	const diffTime=switchValue([
		diff<20 && 'few seconds',
		diff<120 && 'a while',
		diff<3600 && `${diffMin}minutes`,
		diff<3600*2 && `an hour`,
		`${diffHour}hours`,
		])
	console.log(diff);
	document.querySelector('.updateTime').innerHTML=`Data Updated ${diffTime} ago`;
	if(last!==lastTime) return console.log('ended');
	setTimeout(function(){
		update(last,new Date());
	},1000)
}

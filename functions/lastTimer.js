import {differenceInSeconds} from "date-fns";

let lastTime=NaN;
// const timer=()=>setInterval(()=>console.log('interval'),1000);
export default function init(_lastTime) {
	lastTime=_lastTime;
	update(lastTime,new Date());
}
const switchValue=([val,...vals])=>
	val || (vals.length && switchValue(vals)) || null;
const update=(last,now)=>{
	if(last!==lastTime) return console.log('ended');
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
	document.querySelector('.updateTime').innerHTML=`Data Updated ${diffTime} ago`;
	setTimeout(function(){
		update(last,new Date());
	},1000*10)
}

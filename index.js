// import "./functions/testJson";
import "./lib/helper";
import {render as pieRender} from "./functions/pieChart";
import {render as histoRender} from "./functions/histo";
import renderTable from "./functions/table";
import getIdeas from './api';
import dataImport from './data.js';
import lastTimer from './functions/lastTimer';

const axios = require('axios');

(function (){
	const isDev=location.href.includes('localhost');
	const apiCall= ()=>isDev ? init(dataImport) : getIdeas(init);
	apiCall();
	window.apiCall=apiCall;
	setInterval(apiCall,1000*60*60*24);
})();
function init(dataImport) {
	lastTimer(new Date());
	// window.testTime=(time)=>lastTimer(time);
	pieRender({selector:"#pieChart1",filterKey:"Status"},dataImport);
	pieRender({selector:"#pieChart2",filterKey:"Area"},dataImport);
	histoRender(dataImport);
	renderTable(dataImport);
}
// https://jsonplaceholder.typicode.com/users
// const link=()=>`https://jsonplaceholder.typicode.com/users/`+~~(Math.random()*10+1)
// const call=()=>axios.get(link()).then(res=>console.log(res.data));
window.test=num=> init(dataImport.slice(0,num));
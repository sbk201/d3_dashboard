// import "./functions/testJson";
import "./lib/helper";
import {render as pieRender} from "./functions/pieChart";
import {render as histoRender} from "./functions/histo";
import renderTable from "./functions/table";
import getIdeas from './api';
import dataImport from './data.js';
import lastTimer from './functions/lastTimer';

const axios = require('axios');

const isDev=location.href.includes('localhost');
isDev ? init(dataImport) : getIdeas(init);
function init(dataImport) {
	lastTimer(new Date());
	window.testTime=(time)=>lastTimer(time);
	// console.log('run');
	// const now=format(new Date(),'DD/MM/YYYY');
	// console.log(dataImport);
	// document.querySelectorAll('.updateTime').forEach(node=>node.innerHTML=`Last Updated: ${now}`);
	pieRender({selector:"#pieChart1",filterKey:"Status"},dataImport);
	pieRender({selector:"#pieChart2",filterKey:"Area"},dataImport);
	histoRender(dataImport);
	renderTable(dataImport);
}
// https://jsonplaceholder.typicode.com/users
const link=()=>`https://jsonplaceholder.typicode.com/users/`+~~(Math.random()*10+1)
const call=()=>axios.get(link()).then(res=>console.log(res.data));
// setInterval(call,1000)
window.test=()=> init(dataImport.slice(0,20));
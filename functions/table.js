import * as d3 from "d3";
import {omit,flow} from 'lodash';
import css from "./table.css";
import {format} from "date-fns";
import {assignWhere} from '../lib/helper';
let rawData=null;
export default function(dataImported) {
	const convertDates=ele=>{
		const toDate=date=>format(date, 'DD/MM/YYYY');
		const where=[["Created",toDate],["DateDue",toDate]];
		return assignWhere(ele,where)
	};
	rawData=dataImported;
	const data=dataImported.map(arr=>omit(arr,"DateCompleted")).map(convertDates);
	const config= {entry:20,page:1};
	initPagination(data,config);
	onPage(data);
	window.data=data;
};
const initPagination=(data,{entry})=>{
	const before= document.querySelector('#tableContainer .before');
	const after= document.querySelector('#tableContainer .after');
	const add= ()=>{
		before.addEventListener('click',e=>clickedPage(e,data))
		after.addEventListener('click',e=>clickedPage(e,data))
	};
	// const remove= ()=>before.removeEventListener('click',clickedPage)
	const pages= Math.ceil(data.length/entry);
	before.style=after.style=`padding: 1em 0;`;
	const style=`width:2em;`
	const pageDom=Array(pages).fill().map((ele,i)=>`<span class="button"> ${i+1} </span>`).join('');
	const addDom=()=>{
		before.innerHTML=pageDom;
		after.innerHTML=pageDom;
	}
	const init=flow(addDom,add)();
	return init;
};
const clickedPage=({target},data)=>{
	if(target.className!=="button") return
	const page= target.innerHTML;
	onPage(data,{page})
}
const onPage=(data,config={})=>{
	const {entry=20,page=1}=config;
	const begin=entry*(page-1);
	const dataFinal=data.slice(begin,entry*page);
	drawData(dataFinal);
}
export const drawData = data=> {
	document.querySelector('#tableContainer .table').innerHTML="";
	let sortAscending = true;
	const table = d3.select('#tableContainer .table').append('table');
	const titles = d3.keys(data[0]);
	const headers = table.append('thead').append('tr')
	.selectAll('th')
	.data(titles).enter()
	.append('th')
	.text(d=>d)
	.on('click', function (d) {
		headers.attr('class', 'header');
		if (sortAscending) {
			rows.sort(function(a, b) { return b[d] < a[d]; });
			sortAscending = false;
			this.className = 'aes';
		} else {
			rows.sort(function(a, b) { return b[d] > a[d]; });
			sortAscending = true;
			this.className = 'des';
		}
	});
	const rows = table.append('tbody').selectAll('tr')
	.data(data).enter()
	.append('tr');
	rows.selectAll('td')
	.data(function (d) {
		return titles.map(function (k) {
			return { 'value': d[k], 'name': k};
		});
	}).enter()
	.append('td')
	.attr('data-th', function (d) {
		return d.name;
	})
	.html(d=> d.value);	
}

import * as d3 from "d3";
import data_ from '../data';
import {omit} from 'lodash';
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
	drawData(data);
};
// const listener=(function (){

// })();
// (function pagination(){
			
// })();
// const before= document.querySelector('#tableContainer .before');
// const pageDom=Array(5).fill().map((ele,i)=>`<button style="width:2em;"> ${i+1} </button>`).join('');

// before.innerHTML=pageDom;
// console.log(before);
// before.querySelectorAll('button').addEventListener('click',console.log)

// const prepare=(data,config={})=>{
// 	const {entry=20,page=1}=config;
	
	
// 	drawData(data);
// }
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

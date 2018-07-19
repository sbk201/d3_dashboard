import * as d3 from "d3";
import data_ from '../data';
import {omit} from 'lodash';
import css from "./table.css";
import {format} from "date-fns";
import {assignWhere} from '../lib/helper';
export default function(dataImported) {
	const convertDates=ele=>{
		const toDate=date=>format(date, 'DD/MM/YYYY');
		const where=[["Created",toDate],["DateDue",toDate]];
		return assignWhere(ele,where)
	};
	const data=dataImported.map(arr=>omit(arr,"DateCompleted")).map(convertDates);
	let sortAscending = true;
	const table = d3.select('#d3_table').append('table');
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
	let times=5;
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

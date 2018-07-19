// import "./functions/testJson";
import "./lib/helper";
import {render as pieRender} from "./functions/pieChart";
import {render as histoRender} from "./functions/histo";
import renderTable from "./functions/table";
import getIdeas from './api';
import dataImport from './data.js';
init(dataImport);
// getIdeas(init);
function init(dataImport) {
	// console.log(dataImport);
	pieRender({selector:"#pieChart1",filterKey:"Status"},dataImport);
	pieRender({selector:"#pieChart2",filterKey:"Area"},dataImport);
	histoRender(dataImport);
	renderTable(dataImport);
}
document.querySelector('#one').addEventListener('click',function() {
	// render({selector:"#pieChart1",filterKey:"Status"});	
	console.log(t1.update());
});
document.querySelector('#two').addEventListener('click',function() {
	// render({selector:"#pieChart1",filterKey:"Area"});
});

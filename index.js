// import "./functions/testJson";
import "./lib";
import {render as pieRender} from "./functions/pieChart";
import {render as histoRender} from "./functions/histo";
import "./functions/table";

// function init(data) {
	const statusDom=pieRender({selector:"#pieChart1",filterKey:"Status"});
	const areaDom=pieRender({selector:"#pieChart2",filterKey:"Area"});
	const histo=histoRender();
// }
document.querySelector('#one').addEventListener('click',function() {
	// render({selector:"#pieChart1",filterKey:"Status"});	
	console.log(t1.update());
});
document.querySelector('#two').addEventListener('click',function() {
	// render({selector:"#pieChart1",filterKey:"Area"});
});

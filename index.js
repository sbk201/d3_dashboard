// import "./functions/testJson";
import "./lib";
import {render} from "./functions/pieChart";
import "./functions/table";
import {draw} from "./functions/histo";

const t1=draw();
document.querySelector('#one').addEventListener('click',function() {
	// render({selector:"#pieChart1",filterKey:"Status"});	
	console.log(t1.update());
});
document.querySelector('#two').addEventListener('click',function() {
	// render({selector:"#pieChart1",filterKey:"Area"});
});

const statusDom=render({selector:"#pieChart1",filterKey:"Status"});
const areaDom=render({selector:"#pieChart2",filterKey:"Area"});

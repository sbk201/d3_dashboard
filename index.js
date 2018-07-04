// import "./functions/testJson";
import "./lib";
import {filterBy} from "./functions/pieChart";
import "./functions/table";
// import "./functions/sunburst";

const statusDom=filterBy({selector:"#pieChart1",filterKey:"Status"});
const areaDom=filterBy({selector:"#pieChart2",filterKey:"Area"});

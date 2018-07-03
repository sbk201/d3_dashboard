// import {d3} from "../index";
import * as d3 from "d3";
import theJson from './pieChartData';
import data_ from '../data';
import "./pieChart.css";
import {statBy} from '../lib';
console.log(data_);
const {svg,radius,g}=(function() {
    const width=0.4*window.innerWidth;
    const height=width;
    const radius=Math.min(width, height) / 2
    const svg=d3.select("#pieChart").append("svg").attr("width",width).attr("height",height);
    const g = svg.append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
    return {svg,radius,g}
})();
const colors=["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"];
const color = d3.scaleOrdinal(colors);

const pie = d3.pie()
    .sort(null)
    .value(d=>d.population);

const path = d3.arc()
    .outerRadius(radius - 10)
    .innerRadius(0);

const label = d3.arc()
    .outerRadius(radius - 40)
    .innerRadius(radius - 40);

const data=theJson;

const arc = g.selectAll(".arc")
.data(pie(data))
.enter().append("g")
  .attr("class", "arc");

arc.append("path")
  .attr("d", path)
  // .attr("fill",d=>color(d.data.age));
  .attr("fill",d=>color(d.data.age));


// arc.append("text")
//   .attr("transform", d=>`translate(${label.centroid(d)})`)
//   .attr("dy", "0.35em")
//   .text(d=>d.data.age);

const statDom=Object.entries(statBy(data_,"Status")).map(
    ([key,times])=>`<div>${key} : ${times}</div>`
    )
.join('');
console.log(statDom);

document.querySelector('#pieData').innerHTML=statDom;
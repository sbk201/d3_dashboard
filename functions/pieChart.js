// import {d3} from "../index";
import * as d3 from "d3";
import importData from '../data';
import "./pieChart.css";
import {statBy,objMap} from '../lib';
import {flow} from 'lodash';
console.log(importData);
export const filterBy=({filterKey,selector})=>{
    const {svg,radius,g}=(function() {
        const width=0.4*window.innerWidth; 
        const height=width;
        const radius=Math.min(width, height) / 2
        const svg=d3.select(selector).append("svg").attr("width",width).attr("height",height);
        const g = svg.append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
        return {svg,radius,g}
    })();
    const colors=["#98abc5", "#8a89a6", "#6fd500", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"];
    const color = d3.scaleOrdinal(colors);

    const pie = d3.pie()
        .sort(null)
        .value(d=>d.amount);

    const path = d3.arc()
        .outerRadius(radius - 10)
        .innerRadius(0);

    const label = d3.arc()
        .outerRadius(radius - 40)
        .innerRadius(radius - 40);

    const data=objMap(statBy(filterKey,importData),([key,amount])=>({name:key,amount}));

    const arc = g.selectAll(".arc")
    .data(pie(data))
    .enter().append("g")
      .attr("class", "arc");

    arc.append("path")
      .attr("d", path)
      // .attr("fill",d=>color(d.data.age));
      .attr("fill",d=>color(d.data.name));


    const statDom=(function() {
        const block= th=> `<svg width="16" height="16"><rect width="16" height="16" fill="${colors[th]}"></rect></svg>`;
        const toDom=data=>data.map(([key,times],th)=>`<div>${block(th)} ${key} : ${times}</div>`).join('');
        const theDom=flow(statBy(filterKey), Object.entries, toDom)(importData);
        return theDom
    })();
    d3.select(selector).append("div").attr("class","description");
    document.querySelector(`${selector} .description`).innerHTML=statDom;
        // const addTitle=dom=>`<div class="description">${dom}</div>`;

}

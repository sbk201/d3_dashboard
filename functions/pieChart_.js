// import {d3} from "../index";
import * as d3 from "d3";
import "./pieChart.css";
import {statBy,objMap} from '../lib/helper';
import {flow} from 'lodash';
export const render=({filterKey,selector,secondFilter},dataImport)=>{
    console.log(dataImport)
    const docSel=sel=>document.querySelector(sel);
    const thisDom=docSel(selector);
    thisDom.innerHTML='';
    const title=(function() {
        const a=`Filter By ${filterKey}`
        const b= (secondFilter && secondFilter !=='Total') ?
        `In ${secondFilter}` : '';
        return `<h2>${a}<br>${b}</h2>`
    })();
    thisDom.innerHTML+=title;

    const {svg,radius,g}=(function() {
        const width=300; 
        // const width=0.25*window.innerWidth; 
        const height=width;
        const radius=Math.min(width, height) / 2
        const svg=d3.select(selector).append("svg").attr("width",width).attr("height",height).attr("class","chart");
        const g = svg.append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
        return {svg,radius,g}
    })();
    const colors=["#98abc5", "#8a89a6", "#6fd500", "#6b486b", "#a05d56", "#d0743c", "#ff8c00", "000000"];
    const color = d3.scaleOrdinal(colors);

    const context= canvas.getContext("2d");
    const pie = d3.pie()
        .sort(null)
        .value(d=>d.amount);

    const path = d3.arc()
        .outerRadius(radius - 10)
        .innerRadius(radius - 60);

    const labelArc = d3.arc()
        .outerRadius(radius - 40)
        .innerRadius(radius - 40)
        .context(context)

    const secFilter=array=>{
        if(!secondFilter || secondFilter==='Total') return array;
        // console.log(filterKey,docSel('#pieChart2 select'))
        // const filter2_=docSel('#pieChart2 select').value;
        return array.filter(e=>e.Status===secondFilter)
    };
    const dataFine=statBy(filterKey,secFilter(dataImport));
    const data=objMap(dataFine,([key,amount])=>({name:key,amount}));
    
    var arcPath= g.selectAll(".arc") .data(pie(data));
    const arc=arcPath.enter().append("g").attr("class", "arc");
    arcPath.exit().remove();

    // const arc = g.selectAll(".arc")
    // .data(pie(data))
    // .enter().append("g")
    //   .attr("class", "arc");

    arc.append("path")
      .attr("d", path)
      .attr("fill",d=>color(d.data.name));

    arc.append("text")
      .attr("dy", ".35em")
      .text(d=>1234);
      // arcPath.enter().append("text")
      // .attr("class", "arc");
    // g.append("text")
      // .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
      // .attr("dy", ".35em")
      // .text(function(d) { return 1234});

    const statDom=(param={})=> {
        const block= th=> `<svg width="16" height="16"><rect width="16" height="16" fill="${colors[th]}"></rect></svg>`;
        const toDom=data=>data.map(([key_,times],th)=>{
            const key= filterKey==='Area' ? `Area ${key_}` : key_
            return `<div>${block(th)} ${key} : ${times}</div>`
            }).join('');
        const length=secFilter(dataImport).length;
        const addTotal=dom=>`<div>Total ${length}</div>`+dom;
        const domSelect=dom=>{
            const sel=`Status Filter <select>
              <option value="Total">-- Select --</option>
              <option value="Total">Total</option>
              <option value="Reviewed">Reviewed</option>
              <option value="Completed">Completed</option>
              <option value="In-Progress">Inprogress</option>
              <option value="Closed - Not Viable">Closed</option>
              <option value="Approved">Approved</option>
            </select><br/>`;
            return filterKey==='Area' ? (sel+dom) : dom;
        }
        // console.log(dataImport,data);
        const theDom=flow( Object.entries, toDom,addTotal,domSelect)(dataFine);
        return theDom
    };
    d3.select(selector).append("div").attr("class","description");
    docSel(`${selector} .description`).innerHTML=statDom();
    if(filterKey==='Area'){
        const updateChart=e=>{
            const secondFilter=e.target.value;
            render({filterKey,selector,secondFilter},dataImport)
            return
        }
        docSel('#pieChart2 select').addEventListener('change',updateChart)
    }
}

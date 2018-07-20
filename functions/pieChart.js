// import {d3} from "../index";
import * as d3 from "d3";
import "./pieChart.css";
import {statBy,objMap,objLoop,sumOfObjectBy} from '../lib/helper';
import {flow} from 'lodash';
export const render=({filterKey,selector,secondFilter},dataImport)=>{
    const Total=dataImport.length;
    const docSel=sel=>document.querySelector(sel);
    const thisDom=docSel(selector);
    thisDom.innerHTML='';
    const title=`<h2>Filter By ${filterKey}</h2>`;
    thisDom.innerHTML+=title;

    var width = 500,
    height = 500,
    radius = Math.min(width, height) / 2;

    const colors=["#98abc5", "#8a89a6", "#82d12d", "#6b486b", "#a05d56", "#d0743c", "#ff8c00", "#222222"];
    var color = d3.scaleOrdinal(colors);

    var arc = d3.arc()
        .outerRadius(radius - 10)
        .innerRadius(radius - 90);

    var pie = d3.pie()
        .sort(null)
        .value(d=>d.amount);

    var svg = d3.select(selector).append("svg")
        .attr("width", width)
        .attr("height", height)
        .style("float", "left")
        .append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    svg.append("circle")
        .attr("class","mouseInfo circle")
        .attr("r",Math.min(width, height) / 2 -10)
        .attr("fill","white")
        .attr('opacity',0)

    const secFilter=array=>{
        if(!secondFilter || secondFilter==='Total') return array;
        // console.log(filterKey,docSel('#pieChart2 select'))
        // const filter2_=docSel('#pieChart2 select').value;
        return array.filter(e=>e.Status===secondFilter)
    };
    const {data,dataFine}=(function() {
        const addArea=d=>objLoop(d,([k,v])=> filterKey==='Area' ? {["Area "+k]:v} : {[k]:v})
        const dataFine=flow(secFilter,statBy(filterKey),addArea)(dataImport);
        const statKey=d=>objMap(d,([key,amount])=>({name:key,amount}));
        const addColor=d=>d.map((ele,i)=>Object.assign({},ele,{color:colors[i]}));
        const data= flow(statKey,addColor)(dataFine);
        return {data,dataFine}
    })();
    console.log(filterKey,data);

    const defaultInfo=()=>{
        const background=d3.selectAll(`${selector} .mouseInfo.circle`);
        const title=docSel(`${selector} .mouseInfo.title`);
        const titleText= (filterKey==='Area' && secondFilter) ? secondFilter : "Total";
        const content=docSel(`${selector} .mouseInfo.content`);
        title.innerHTML=titleText;
        const Total=sumOfObjectBy(data,"amount");
        content.innerHTML= `${Total} (100%)`;
        background.transition()
        .duration(500)
        .attr("fill","#BBBBBB")
        .attr('opacity',.9)
    };
    const showInfo=d=>{
        const background=d3.selectAll(`${selector} .mouseInfo.circle`);
        const title=docSel(`${selector} .mouseInfo.title`);
        const content=docSel(`${selector} .mouseInfo.content`);
        const {name,amount,color}=d.data;
        const precent=~~(amount/Total*100);
        title.innerHTML=`${name}`;
        content.innerHTML= `${amount} (${precent}%)`;
        background.transition()
        .duration(500)
        .attr("fill",color)
        .attr('opacity',.9)
    };
    var g = svg.selectAll(".arc")
        .data(pie(data))
        .enter().append("g")
        .attr("class", "arc")
        .on("mouseover", showInfo)
        .on("mouseout", defaultInfo)
    
    g.append("path")
        .attr("d", arc)
        .style("fill", function(d) { return color(d.data.name); });
    
    svg.append("text")
        .attr("class","mouseInfo title")
        .attr("dy", "-0.5em")
        .style("font-size","2em")
    svg.append("text")
        .attr("class","mouseInfo content")
        .attr("dy", "0.8em")
        .style("font-size","2em")
    defaultInfo();

    const showAmount=d=>{
        const {amount}=d.data;
        if(amount<15) return ""
        return amount
    }
    g.append("text")
        .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
        .attr("dy", ".35em")
        .style("font-size","2em")
        .style("fill", "#333333")
        .text(showAmount)

    const statDom=(param={})=> {
        const block= th=> `<svg width="20" height="20"><rect width="20" height="20" fill="${colors[th]}"></rect></svg>`;
        const toDom=data=>data.map(([key],th)=> `<div>${block(th)} ${key}</div>` ).join('');
        const length=secFilter(dataImport).length;
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
        const theDom=flow( Object.entries, toDom,domSelect)(dataFine);
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

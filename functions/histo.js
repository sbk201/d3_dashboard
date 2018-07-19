import * as d3 from "d3";
import {statBy, objMap } from '../lib/helper';
import {flow} from 'lodash';
// const rawData = [
    // ["AL", 6354],
    // ["AZ", 2187],
    // ["CT", 3499],
    // ["DE", 3846],
    // ["FL", 8733],
    // ["GA", 2849],
    // ["IA", 3269],
    // ["IL", 9292],
    // ["IN", 4180],
    // ["KS", 1012]
// ];
const handleData= dataImport =>{
    const scopeObj = {
        "1 to 7 days": 7,
        "8 to 30 days": 30,
        "31 to 60 days": 60,
        "61 to 120 days": 120,
        "over 120 days": 999999
    };
    const patchSpent=arr=>arr.map(ele=>{
        const completed = ele.DateCompleted || (new Date());
        const DateSpent = lib.differenceInDays(completed, ele.Created);
        return Object.assign({},ele, {DateSpent} );   
    })
    const toDateSpent=arr=> arr.filter(e => e.DateSpent >= 0).map(e => e.DateSpent);
    const toScopeName=arr=>arr.map(ele=>{
        const scopeKeys=Object.keys(scopeObj);
        const scopeValues=Object.values(scopeObj);
        const getScope = num => {
            const index = scopeValues.reduce((times, limit) => times + (num > limit), 0);
            const scope = scopeKeys[index];
            return scope;
        }
        return getScope(ele);
    })
    const statSpent=arr=>{
        const scopeInit = lib.objLoop2(scopeObj, (([key, value]) => 0));
        return arr.reduce((self, scope) => {
            const times=self[scope] + 1;
            return Object.assign({},self,{[scope]: times})
            } , scopeInit)
    }
    return flow(patchSpent,toDateSpent,toScopeName,statSpent,Object.entries)(dataImport);
};
export const render = dataImport => histoGram(handleData(dataImport));

function histoGram(fD) {
    var barColor = 'steelblue';
    var hG = {},
        hGDim = {
            t: 60,
            r: 0,
            b: 30,
            l: 0
        };
    hGDim.w = 0.4*window.innerWidth - hGDim.l - hGDim.r,
    hGDim.h = 400 - hGDim.t - hGDim.b;
    // hGDim.w = 500 - hGDim.l - hGDim.r,
    // hGDim.h = 300 - hGDim.t - hGDim.b;
    //create svg for histogram.
    var hGsvg = d3.select('#histo .chart').append("svg").attr("width", hGDim.w + hGDim.l + hGDim.r).attr("height", hGDim.h + hGDim.t + hGDim.b).append("g").attr("transform", "translate(" + hGDim.l + "," + hGDim.t + ")");
    // create function for x-axis mapping.
    var x = d3.scaleBand().rangeRound([0, hGDim.w]).domain(fD.map(function(d) {
        return d[0];
    }));
    // Add x-axis to the histogram svg.
    hGsvg.append("g").attr("class", "x axis").attr("transform", "translate(0," + hGDim.h + ")").call(d3.axisBottom().scale(x));
    // Create function for y-axis map.
    var y = d3.scaleLinear().range([hGDim.h, 0]).domain([0, d3.max(fD, function(d) {
        return d[1];
    })]);
    // Create bars for histogram to contain rectangles and freq labels.
    var bars = hGsvg.selectAll(".bar").data(fD).enter().append("g").attr("class", "bar");
    //create the rectangles.
    bars.append("rect").attr("x", function(d) {
            return x(d[0]);
        }).attr("y", function(d) {
            return y(d[1]);
        }).attr("width", x.bandwidth()).attr("height", function(d) {
            return hGDim.h - y(d[1]);
        }).attr('fill', barColor).on("mouseover", mouseover) // mouseover is defined below.
        .on("mouseout", mouseout); // mouseout is defined below.
    //Create the frequency labels above the rectangles.
    bars.append("text").text(function(d) {
        return d3.format(",")(d[1])
    }).attr("x", function(d) {
        return x(d[0]) + x.bandwidth() / 2;
    }).attr("y", function(d) {
        return y(d[1]) - 5;
    }).attr("text-anchor", "middle");

    function mouseover() {}

    function mouseout() {}
    // function mouseover(d){  // utility function to be called on mouseover.
    //     // filter for selected state.
    //     var st = fData.filter(function(s){ return s.State == d[0];})[0],
    //         nD = d3.keys(st.freq).map(function(s){ return {type:s, freq:st.freq[s]};});
    //     // call update functions of pie-chart and legend.    
    //     pC.update(nD);
    //     leg.update(nD);
    // }
    // function mouseout(d){    // utility function to be called on mouseout.
    //     // reset the pie-chart and legend.    
    //     pC.update(tF);
    //     leg.update(tF);
    // }
    // create function to update the bars. This will be used by pie-chart.
    hG.test = 'testing';
    hG.update = function(nD, color = "#000000") {
        nD = [
            ["AL", 1234],
            ["AZ", 1101],
            ["CT", 932],
            ["DE", 832],
            ["FL", 4481],
            ["GA", 1619],
            ["IA", 1819],
            ["IL", 4498],
            ["IN", 797],
            ["KS", 162]
        ];
        // update the domain of the y-axis map to reflect change in frequencies.
        y.domain([0, d3.max(nD, function(d) {
            return d[1];
        })]);
        // Attach the new data to the bars.
        var bars = hGsvg.selectAll(".bar").data(nD);
        // transition the height and color of rectangles.
        bars.select("rect").transition().duration(500).attr("y", function(d) {
            return y(d[1]);
        }).attr("height", function(d) {
            return hGDim.h - y(d[1]);
        }).attr("fill", color);
        // transition the frequency labels location and change value.
        bars.select("text").transition().duration(500).text(function(d) {
            return d3.format(",")(d[1])
        }).attr("y", function(d) {
            return y(d[1]) - 5;
        });
    }
    return hG;
}
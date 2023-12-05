var fs = require('fs'); 

fs.readFile('./input.txt','utf8',(err, data) => {
    let sum = 0;
    data.split("\n").forEach((d, idx) => {[...d.matchAll(/\d+/g)].forEach(e => {if(([idx,...(idx > 0)?[idx-1]:[],...(idx<d.length-1)?[idx+1]:[]].filter(t => (/[^\w.\n\r]/.test(data.split("\n")[t].substring((e.index-1), (e.index+e[0].length+1))))).length > 0)) sum += parseInt(e[0])})})
    console.log("Part one:", sum)
});

fs.readFile('./input.txt','utf8',(err, data) => {
    let stars = {};
    data.split("\n").forEach((d, idx) =>{[...d.matchAll(/\d+/g)].forEach(e => {[idx,...(idx > 0)?[idx-1]:[],...(idx<d.length-1)?[idx+1]:[]].forEach(t =>{[...data.split("\n")[t].substring((e.index-1),(e.index+e[0].length+1)).matchAll(/\*/g)].forEach(s=>{stars[t+","+(e.index+s.index-(e.index == 0 ? 0 : 1))]?stars[t+","+(e.index+s.index-(e.index == 0 ? 0 : 1))].push(parseInt(e[0])):stars[t+","+(e.index+s.index-(e.index == 0 ? 0 : 1))]=[parseInt(e[0])]})})})})
    console.log("Part two: ", Object.values(stars).filter(d => d.length == 2).reduce((a,b)=>a+(b[0]*b[1]),0))
});
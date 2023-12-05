var fs = require('fs'); 

fs.readFile('./input.txt','utf8',(err, data) => {
    let sum = 0;
    //data.split("\n").reduce((a,b) =>a+((([...b.match(/((\d+)(?=\s{1}green))/g)].filter(e =>e>13).length)+([...b.match(/((\d+)(?=\s{1}blue))/g)].filter(e =>e>14).length)+([...b.match(/((\d+)(?=\s{1}red))/g)].filter(e =>e>12).length) > 0) ? 0 : parseInt(b.match(/\d+/)[0])),0)
    let arr = data.split("\n")
    arr.forEach((d, idx) => {
       let dat = [...d.matchAll(/\d+/g)] 
        if (dat) dat.forEach(e => { 
            let toTest = [idx]
            if(idx > 0) toTest.push(idx-1)
            if(idx < d.length-1) toTest.push(idx+1)
            if((toTest.filter(t => (/[^\w.\n\r]/.test(arr[t].substring((e.index-1), (e.index+e[0].length+1))))).length > 0)) sum += parseInt(e[0])
        })
    })
    console.log("Part one:", sum)
});

fs.readFile('./input.txt','utf8',(err, data) => {
    let matches = 0;
    let arr = data.split("\n")
    let stDict = {};
    arr.forEach((d, idx) => {
       let dat = [...d.matchAll(/\d+/g)] 
        if (dat) dat.forEach(e => { 
            let toTest = [idx]
            if(idx > 0) toTest.push(idx-1)
            if(idx < d.length-1) toTest.push(idx+1)
            
            toTest.forEach(t => {
                let stars = [...arr[t].substring((e.index-1), (e.index+e[0].length+1)).matchAll(/\*/g)]
               
                stars.forEach(s => {
                    stDict[t+","+(e.index+s.index-(e.index == 0 ? 0 : 1))] 
                    ? stDict[t+","+(e.index+s.index-(e.index == 0 ? 0 : 1))].push(parseInt(e[0]))
                    : stDict[t+","+(e.index+s.index-(e.index == 0 ? 0 : 1))] = [parseInt(e[0])]
                })
            })
        })
    })
    let sum = 0;
    Object.values(stDict).filter(d => d.length == 2).forEach(d => {
        sum += (d[0]*d[1]);

        if(d[0] == "805" || d[1] == "805") console.log(d)
    })
    console.log("Part 2: ", sum)
    console.log(matches)
});
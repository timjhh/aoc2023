var fs = require('fs'); 

// Part 1
// 12 red cubes, 13 green cubes, and 14 blue cubes
fs.readFile('./input.txt','utf8',(err, data) => {console.log("Part one:",data.split("\n").reduce((a,b) =>a+((([...b.match(/((\d+)(?=\s{1}green))/g)].filter(e =>e>13).length)+([...b.match(/((\d+)(?=\s{1}blue))/g)].filter(e =>e>14).length)+([...b.match(/((\d+)(?=\s{1}red))/g)].filter(e =>e>12).length) > 0) ? 0 : parseInt(b.match(/\d+/)[0])),0))});

// Part 2
fs.readFile('./input.txt','utf8',(err, data) => {console.log("Part two:",data.split("\n").reduce((a,b) => (a+(Math.max.apply(Math, [...b.match(/((\d+)(?=\s{1}green))/g)])*Math.max.apply(Math, [...b.match(/((\d+)(?=\s{1}blue))/g)])*Math.max.apply(Math, [...b.match(/((\d+)(?=\s{1}red))/g)]))), 0)) });

// function isValid(game, idx) {
//     let valid = true
//     game.split(": ")[1].split(";").forEach(f => {
//         f.split(",").forEach(g => {
//             let num = g.trim().split(" ")
//             if((num[0] > 14 && num[1] == "blue") || (num[0] > 13 && num[1] == "green") || (num[0] > 12 && num[1] == "red")) {
//                 valid = false
//             }
//         })
//     })
//     return valid
// }
// fs.readFile('./input.txt','utf8',(err, data) => { console.log("Part one:", data.split("\n").filter((e) => (!isValid(e))).reduce((a,b) => a + parseInt(b.match(/\d+/)[0]),0)) });

const data = 
{
    "a":{
       "1":"╔═╗",
       "2":"╠═╣",
       "3":"╩ ╩"
    },
    "b":{
       "1":"╔╗ ",
       "2":"╠╩╗",
       "3":"╚═╝"
    },
    "c":{
       "1":"╔═╗",
       "2":"║  ",
       "3":"╚═╝"
    },
    "d":{
       "1":"╔╦╗",
       "2":" ║║",
       "3":"═╩╝"
    },
    "e":{
       "1":"╔═╗",
       "2":"║╣ ",
       "3":"╚═╝"
    },
    "f":{
       "1":"╔═╗",
       "2":"║╣ ",
       "3":"╩  "
    },
    "g":{
       "1":"╔═╗",
       "2":"║ ╦",
       "3":"╚═╝"
    },
    "h":{
       "1":"╦ ╦",
       "2":"╠═╣",
       "3":"╩ ╩"
    },
    "i":{
       "1":"╦",
       "2":"║",
       "3":"╩"
    },
    "j":{
       "1":"╔═╗",
       "2":"  ║",
       "3":"╚═╝"
    },
    "k":{
       "1":"╦ ╦",
       "2":"║╦╝",
       "3":"╩╚═"
    },
    "l":{
       "1":"╦  ",
       "2":"║  ",
       "3":"╩═╝"
    },
    "m":{
       "1":"╔╦╗",
       "2":"║║║",
       "3":"╩ ╩"
    },
    "n":{
       "1":"╔╗╔",
       "2":"║║║",
       "3":"╝╚╝"
    },
    "o":{
       "1":"╔═╗",
       "2":"║ ║",
       "3":"╚═╝"
    },
    "p":{
       "1":"╔═╗",
       "2":"╠═╝",
       "3":"╩  "
    },
    "q":{
       "1":"╔═╗ ",
       "2":"║ ║ ",
       "3":"╚═╩╝"
    },
    "r":{
       "1":"╦═╗",
       "2":"╠╦╝",
       "3":"╩╚═"
    },
    "s":{
       "1":"╔═╗",
       "2":"╚═╗",
       "3":"╚═╝"
    },
    "t":{
       "1":"╔╦╗",
       "2":" ║ ",
       "3":" ╩ "
    },
    "u":{
       "1":"╦ ╦",
       "2":"║ ║",
       "3":"╚═╝"
    },
    "v":{
       "1":"╦  ╦",
       "2":"╚╗╔╝",
       "3":" ╚╝ "
    },
    "w":{
       "1":"╦ ╦",
       "2":"║║║",
       "3":"╚╩╝"
    },
    "x":{
       "1":"═╗ ╦",
       "2":"╔╩╦╝",
       "3":"╩ ╚═"
    },
    "y":{
       "1":"╦ ╦",
       "2":"╚╦╝",
       "3":" ╩ "
    },
    "z":{
       "1":"═╗ ",
       "2":" ║ ",
       "3":" ╚═"
    },
    "author":{
       "name":"Prakhar Gupta",
       "email":"pgupta7_be16@thapar.edu",
       "date":"2 July",
       "purpose":"Thapar Summer School 2019,JS workshop"
    }
 }
document.getElementById("button").onclick = ()=>{
    let k = document.getElementById("textinput").value;
    let strn = set(k);
    document.getElementById("placeholder").innerHTML = strn;
    document.getElementById("whatsapp").innerHTML = "```\n"+strn+"```";
}
let all = 'abcdefghijklmnopqrstuvwxyz'
function set(str){
   str = str.toLowerCase();
    let z = ``
    let firstLine = ``
    let secondLine = ``
    let thirdLine = ``
    for(let chr of str){
        if(all.indexOf(chr)!=-1){
         firstLine += data[chr]["1"];
         secondLine += data[chr]["2"];
         thirdLine +=data[chr]["3"];
        }
        else{
         firstLine +=` `;
         secondLine += ` `;
         thirdLine +=` `
        }
    }
    z =`
    <div>
        <pre>${firstLine}</pre><pre>${secondLine}</pre><pre>${thirdLine}</pre>
    </div>
    `
    return z;
}
document.getElementById("allChar").innerHTML = set(all);
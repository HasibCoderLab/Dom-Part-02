// let p = document.querySelector(".pa");
// // console.log(pa.getAttribute(".pa"));
// let value  = div.getAttribute("box");
// console.log(value);
//  =========== Style  ========  
let div = document.querySelector("");//("div")
div.style.backgroundColor = "green" ;
div.style.fontSize = "25px";
div.style.height = "280px";
div.style.width = "280px"; 
// Value Change
div.innerText = "Hello"
let pa = document.querySelector(".pa");
pa.setAttribute("pa" , "Para");
console.log(pa);

//  ================= Create Element ===========
// ========    /* Add btn to lasr */  =============    ==============
let newBtn  = document.createElement("button");
newBtn.innerText = "Click Me";
console.log(newBtn);
let addingDiv = document.querySelector("div");
addingDiv.append(newBtn)





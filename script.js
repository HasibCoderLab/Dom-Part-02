// let p = document.querySelector(".pa");
// // console.log(pa.getAttribute(".pa"));
// let value  = div.getAttribute("box");
// console.log(value);











//  ================= Create Element ===========
// ========    /* Add btn to fast */  =============    ==============
let newBtn1st = document.createElement("button");
newBtn1st.innerText = "Click Me 1st";
console.log(newBtn1st);
let divAdd1st = document.querySelector("div");
divAdd1st.prepend(newBtn1st)

// ========    /* Add btn to lasr */  =============    ==============
let newBtn  = document.createElement("button");
newBtn.innerText = "Click Me";
// console.log(newBtn);
let addingDiv = document.querySelector("div");
addingDiv.append(newBtn)





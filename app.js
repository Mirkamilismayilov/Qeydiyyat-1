 
 let form = document.querySelector("#form");
 let name1 = document.querySelector("#ad");
 let pass = document.querySelector("#parol");
 let btn = document.querySelector("#btn");
 
 let obj = {
     name1: "",
     pass: ""
 }
 form?.addEventListener("submit", (e)=>{
     e.preventDefault()
 })
 // console.log(obj.name1.innerHtml = ad.value);
 btn?.addEventListener("click", ()=>{
     obj.name1 = name1.value;
     obj.pass = pass.value;
 
     localStorage.setItem("dataObj", JSON.stringify(obj));


     // console.log(localStorage.getItem("dataObj"));




let dataN = name1.value
let dataP = pass.value

let Trim = dataN.trim();


console.log();

console.log(Trim);
console.log(Trim.length);



if (Trim.length == 0 && Trim.length == 0) {
    name1.style.border = "3px solid red"
   pass.style.border = "3px solid red"
   

}else{
   name1.value
  }

 })
 
 
 
 

 
 let form1 = document.querySelector("#form1");
 let girisAd = document.querySelector("#girisAd");
 let girisPass = document.querySelector("#girisPass");
 let Girisbtn = document.querySelector(".Girisbtn");


 Girisbtn?.addEventListener("click" , ()=>{

let yeniAd = 


console.log("salam");


 });

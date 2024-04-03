let prev= document.querySelector(".prev")
let next= document.querySelector(".next")


next.addEventListener("click",()=>{
 
 let item= document.querySelectorAll(".item");
 document.querySelector(".slide").appendChild(item[0]);   
})
prev.addEventListener("click",()=>{
 
    let item= document.querySelectorAll(".item");
    document.querySelector(".slide").prepend(item[item.length-1]);   
   })
   




let scrollcontainer = document.querySelector(".gallery");
let backbtn=document.getElementById("backbtn");
let nextbtn=document.getElementById("nextbtn");

scrollcontainer.addEventListener("wheel",(evt)=>{
    
    scrollcontainer.scrollLeft += evt.deltaY;
});

nextbtn.addEventListener("click",()=>{
    scrollcontainer.style.scrollBehavior="smooth";
    scrollcontainer.scrollLeft += 600;
});

backbtn.addEventListener("click",()=>{
    
    scrollcontainer.style.scrollBehavior="smooth";
    scrollcontainer.scrollLeft -= 600;
});
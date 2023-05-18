const btn = document.querySelector(".search_mobile_btn");
const canvasBtn = document.querySelector(".canvas_mobile_btn");
const input = document.querySelector(".search_mobile_input");
const canvasInput = document.querySelector(".canvas_mobile_input");
const lang = document.querySelector(".language");
const canvasLang = document.querySelector(".canvas_language");

btn.addEventListener('click' , () => {
    if (input.style.visibility === "hidden") {
        input.style.visibility = "visible";
        input.style.width = "384px";
        input.style.opacity = "1";
        lang.style.visibility = "hidden";
        lang.style.opacity = "0";
        lang.style.transition = "0.01";
        
    }else{
        input.style.visibility = "hidden";
        input.style.width = "0px";
        input.style.opacity = "0";
        lang.style.visibility = "visible";
        lang.style.opacity = "1";
        lang.style.transition = "0.7s";
    }
})

canvasBtn.addEventListener('click' , () => {
    if (canvasInput.style.visibility === "hidden") {
        canvasInput.style.visibility = "visible";
        canvasInput.style.width = "384px";
        canvasInput.style.opacity = "1";
        canvasLang.style.visibility = "hidden";
        canvasLang.style.opacity = "0";
        canvasLang.style.transition = "0.01";
        
    }else{
        canvasInput.style.visibility = "hidden";
        canvasInput.style.width = "0px";
        canvasInput.style.opacity = "0";
        canvasLang.style.visibility = "visible";
        canvasLang.style.opacity = "1";
        canvasLang.style.transition = "0.7s";
    }
})



const menubar = document.querySelector(".menu_bar img");
const menuX = document.querySelector(".canvas_close");
const canvas = document.querySelector(".canvas_mobile");


menubar.addEventListener("click" , () => {
    canvas.style.transform = "translate(0% , 0%)";
})

menuX.addEventListener("click" , () => {
    canvas.style.transform = "translate(-100% , 0%)";
})
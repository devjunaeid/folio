const hamMenu = document.querySelector("#hamMenu");
const menu = document.querySelector("#dropMenu");
hamMenu.addEventListener("click", ()=>{
    menu.classList.toggle("hidden");
})

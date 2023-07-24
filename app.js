const hamMenu = document.querySelector("#hamMenu");
const menu = document.querySelector("#dropMenu");
const links = document.querySelectorAll("li")
hamMenu.addEventListener("click", ()=>{
    menu.classList.toggle("hidden");
})
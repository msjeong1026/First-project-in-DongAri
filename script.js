const button = document.querySelector("#menu_a");
const nav = document.querySelector(".nav_section");
function show(){
    if(nav.style.display ==="flex"){
        nav.style.display ="none";
    } else {
        nav.style.display = "flex";
    }
}
button.addEventListener('click',show);
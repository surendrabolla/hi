let menubtn=document.getElementById("menu")
let headerbar=document.querySelector(".header-right")
menubtn.addEventListener("click",()=>{
    headerbar.classList.toggle("active")
})
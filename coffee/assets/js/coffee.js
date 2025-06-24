
// const menu = document.getElementById("menu");
// const navmenu = document.querySelector(".nav-menu");

// menu.addEventListener("click",()=>{
//     navmenu.classList.toggle("show");
// })
function showSidebar(){
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = 'block';
}

function hideSidebar(){
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = 'none';
}
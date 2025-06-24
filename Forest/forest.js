
function showSidebar(){
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = 'block';
}

function hideSidebar(){
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = 'none';
}


  function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const icon = document.getElementById('mode-toggle');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');

}
  

function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar');
  const menuIcon = document.getElementById('menu-toggle');

  
  if (sidebar.style.display === 'block') {
    sidebar.style.display = 'none';
    menuIcon.classList.remove('fa-xmark');
    menuIcon.classList.add('fa-bars');
  } else {
    sidebar.style.display = 'block';
    menuIcon.classList.remove('fa-bars');
    menuIcon.classList.add('fa-xmark');
  }
}




const videos = [
    { title: "Learn JavaScript in 30 Minutes", views: "150k views", img: "https://i.ytimg.com/vi/hdI2bqOjy3c/maxresdefault.jpg", link: "#javascript" },
    { title: "React JS Crash Course", views: "120k views", img: "https://i.ytimg.com/vi/w7ejDZ8SWv8/maxresdefault.jpg", link: "#react" },
    { title: "Node.js Tutorial for Beginners", views: "95k views", img: "https://i.ytimg.com/vi/TlB_eWDSMt4/maxresdefault.jpg", link: "#node" },
    { title: "Mastering Vue.js", views: "88k views", img: "https://i.ytimg.com/vi/4deVCNJq3qc/maxresdefault.jpg", link: "#vue" },
    { title: "Python Full Course for Beginners", views: "200k views", img: "https://i.ytimg.com/vi/_uQrJ0TkZlc/maxresdefault.jpg", link: "#python" },
    { title: "Django Crash Course", views: "77k views", img: "https://i.ytimg.com/vi/F5mRW0jo-U4/maxresdefault.jpg", link: "#django" },
    { title: "Build a Portfolio with HTML & CSS", views: "180k views", img: "https://i.ytimg.com/vi/gYzHS-n2gqU/maxresdefault.jpg", link: "#htmlcss" },
    { title: "Sass in 1 Hour", views: "46k views", img: "https://i.ytimg.com/vi/_a5j7KoflTs/maxresdefault.jpg", link: "#sass" },
    { title: "Introduction to Angular", views: "69k views", img: "https://i.ytimg.com/vi/2OHbjep_WjQ/maxresdefault.jpg", link: "#angular" },
    { title: "Tailwind CSS Full Course", views: "84k views", img: "https://i.ytimg.com/vi/dFgzHOX84xQ/maxresdefault.jpg", link: "#tailwind" },
    { title: "TypeScript for Beginners", views: "33k views", img: "https://i.ytimg.com/vi/BCg4U1FzODs/maxresdefault.jpg", link: "#typescript" }
  ];

  const container = document.getElementById('videos');

  videos.forEach(video => {
    const card = document.createElement('div');
    card.className = 'video-card';
    card.innerHTML = `
      <a href="${video.link}">
        <img src="${video.img}" alt="video thumbnail">
        <div class="video-info">
          <h4>${video.title}</h4>
          <p>${video.views}</p>
        </div>
      </a>
    `;
    container.appendChild(card);
  });

  function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('closed');
    document.getElementById('main').classList.toggle('full');
  }

  function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const icon = document.getElementById('mode-toggle');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
  }
window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
  
    if (window.scrollY > 100) {
      navbar.classList.add('navbar-visible');
    } else {
      navbar.classList.remove('navbar-visible');
    }
  });
  
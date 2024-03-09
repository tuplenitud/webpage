const links = document.querySelectorAll('.smooth-scroll');

links.forEach(link => {
  link.addEventListener('click', smoothScroll);
});

function smoothScroll(e) {
  e.preventDefault();
  
  const targetId = this.getAttribute('href');
  const targetElement = document.querySelector(targetId);
  if (targetElement) {
    
    targetElement.scrollIntoView({
      behavior: 'smooth'
    });
  }
}


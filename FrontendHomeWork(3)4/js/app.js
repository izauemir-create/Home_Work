const slides = document.querySelectorAll('.slide');

slides.forEach(slide => {
  slide.addEventListener('click', function() {
    slides.forEach(s => s.classList.remove('active'));
    this.classList.add('active');
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const stars = document.querySelectorAll('.star');
  
  stars.forEach(function(star, index) {
      star.addEventListener('click', function() {
          for (let i = 0; i < stars.length; i++) {
              if (i <= index) {
                  stars[i].classList.add('active');
              } else {
                  stars[i].classList.remove('active');
              }
          }
      });
  });
});
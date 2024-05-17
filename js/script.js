document.addEventListener('DOMContentLoaded', () => {
  const submitButton = document.querySelector('.btn.submit');
  const cancelButton = document.querySelector('.btn.cancel');
  const stars = document.querySelectorAll('.star');
  const ratingSection = document.querySelector('.rating-section h3:nth-of-type(2)');

  submitButton.addEventListener('click', (e) => {
      e.preventDefault();
      alert('Thank you for your feedback!');
  });

  cancelButton.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelector('textarea[name="opinion"]').value = '';
      stars.forEach(star => {
          star.style.color = '#ffba00';
      });
      ratingSection.style.display = 'none';
  });

  stars.forEach((star, index) => {
      star.addEventListener('click', () => {
          stars.forEach((s, i) => {
              if (i <= index) {
                  s.style.color = '#ffba00';
              } else {
                  s.style.color = '#ddd';
              }
          });
          ratingSection.style.display = 'block';
      });
  });
});
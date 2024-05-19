   // Toggle mobile menu
   let menu = document.querySelector('.navbar');

   document.querySelector('#menu-icon').onclick = () => {
       menu.classList.toggle('active');
       
   }
   
   // Hide menu on scroll
   window.onscroll = () => {
       menu.classList.remove('active');
   }
   
   // Smooth scrolling
   document.querySelectorAll('a[href^="#"]').forEach(anchor => {
       anchor.addEventListener('click', function(e) {
           e.preventDefault();
   
           document.querySelector(this.getAttribute('href')).scrollIntoView({
               behavior: 'smooth'
           });
       });
   });
   
   // Display alert message when clicking on the "Discover Now" button
   document.querySelector('.btn').addEventListener('click', function() {
       alert('Thank you for visiting our website!');
   });
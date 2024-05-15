// Get all the slider containers
var sliderContainers = document.querySelectorAll(".slider-container");

// Loop through each slider container
sliderContainers.forEach(function(container) {
  // Get all the sliders within the container
  var sliders = container.querySelectorAll(".slider");

  // Loop through each slider
  sliders.forEach(function(slider) {
    // Get all the slider images
    var sliderImages = slider.querySelectorAll(".slider-image");
    var currentSlideIndex = 0;

    // Function to show the current slide
    function showSlide(n) {
      // Hide all the slides
      for (var i = 0; i < sliderImages.length; i++) {
        sliderImages[i].classList.remove("active");
      }

      // Show the current slide
      sliderImages[n].classList.add("active");
    }

    // Function to move to the next slide
    function nextSlide() {
      currentSlideIndex++;
      if (currentSlideIndex >= sliderImages.length) {
        currentSlideIndex = 0;
      }
      showSlide(currentSlideIndex);
    }

    // Function to move to the previous slide
    function prevSlide() {
      currentSlideIndex--;
      if (currentSlideIndex < 0) {
        currentSlideIndex = sliderImages.length - 1;
      }
      showSlide(currentSlideIndex);
    }

    // event listeners to the previous and next buttons
    var prevButton = slider.querySelector(".prev");
    var nextButton = slider.querySelector(".next");

    prevButton.addEventListener("click", prevSlide);
    nextButton.addEventListener("click", nextSlide);

    // Show the first slide initially
    showSlide(currentSlideIndex);
  });
});

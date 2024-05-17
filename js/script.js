// Get all elements with the class 'reviews-box'
const reviewBoxes = document.querySelectorAll('.reviews-box');

// Loop through each review box
reviewBoxes.forEach((box, index) => {
    // Your code for each review box goes here
    console.log(Processing review box ${index + 1});

    // Example: Get the comment text of each review box
    const comment = box.querySelector('.client-comment p').textContent;
    console.log(Comment for review ${index + 1}: ${comment});
});

// Get all the star elements
const stars = document.querySelectorAll('.rating-section .star');
const ratingValue = document.querySelector('.rating-section .rating-value');

// Set the initial rating
let rating = 4.5;
updateStars(rating);

// Add event listeners to the stars
stars.forEach((star, index) => {
    star.addEventListener('click', () => {
        rating = index + 1;
        updateStars(rating);
    });
});

function updateStars(rating) {
    stars.forEach((star, index) => {
        if (index < rating) {
            star.classList.add('active');
        } else {
            star.classList.remove('active');
        }

        // Change the color of the stars based on the rating
        if (rating <= 2) {
            star.style.color = '#ff0000'; // Red for ratings <= 2
        } else if (rating <= 4) {
            star.style.color = '#ffc107'; // Yellow for ratings between 2 and 4
        } else {
            star.style.color = '#00ff00'; // Green for ratings > 4
        }
    });

    ratingValue.textContent = rating.toFixed(1);
}

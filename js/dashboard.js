const carForm = document.getElementById('car-form');
const messageEl = document.getElementById('message');

carForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission behavior

  const formData = new FormData(carForm); // Create FormData object for file upload

  // Basic validation (can be extended further)
  const cartitle = formData.get('cartitle');
  const carModel = formData.get('carModel');
  const carCategory = formData.get('carCategory');
  const caryear = formData.get('caryear');
  const cardescription = formData.get('description');


  if (!cartitle  !carModel  carCategory caryear cardescription === '') {
    messageEl.textContent = 'Please fill in all required fields.';
    return;
  }

  // Handle file upload (if a file is selected)
  const carImage = formData.get('carImage');
  if (carImage) {
    // You can add logic here to validate image type or size,
    // and perform actions like sending data to a server using fetch API.
  }

  // Process data (e.g., display a success message)
  messageEl.textContent = 'Car information submitted successfully!';
});
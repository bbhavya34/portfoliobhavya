// script.js

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent form from being submitted
  
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // Perform form validation
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
      alert('Please fill in all the fields.'); // Display an error message
      return;
    }
  
    // Send form data to the server (dummy example)
    // Replace this code with your actual form submission logic
    const formData = {
      name,
      email,
      message
    };
  
    // Display a success message
    alert('Form submitted successfully!');
    // You can add additional logic here, such as clearing the form or redirecting to another page
  }
  
  // Add event listener to form submission
  const form = document.querySelector('form');
  form.addEventListener('submit', handleFormSubmit);
  
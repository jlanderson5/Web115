    // JavaScript code for form validation
	// Prevent form from submitting
  document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
      // Retrieve the input field value
      const inputValue = document.getElementById('inputField').value.trim();
      // Regular expression pattern for alphanumeric input
      const alphanumericRegex = /^[a-zA-Z0-9]+$/;
      // Check if the input value matches the pattern
      if (alphanumericRegex.test(inputValue)) {
        // Valid input: display confirmation and submit the form
        alert('Input is valid');
        document.getElementById('myForm').submit();
    } else {  
        // Invalid input: display error message
        alert('Error: Input must be alphanumeric');
      }
  });
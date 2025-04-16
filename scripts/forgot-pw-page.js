function validateEmail(email) {
  // Regular expression for email validation
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}

function handleInput(input) {
  const email = input.value;
  const errorMessage = document.getElementById('error-message');
  const submitButton = document.getElementById('submit-button');

  if (validateEmail(email)) {
    input.classList.remove('input-error');
    input.classList.add('input-success');
    errorMessage.classList.add('hidden');
    submitButton.disabled = false;
  } else {
    input.classList.remove('input-success');
    input.classList.add('input-error');
    errorMessage.classList.remove('hidden');
    submitButton.disabled = true;
  }
}
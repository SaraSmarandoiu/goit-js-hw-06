const validationInput = document.getElementById("validation-input");
const expectedLength = parseInt(validationInput.dataset.length);

validationInput.addEventListener("blur", () => {
  const inputValue = validationInput.value.trim().length;
  
  if (inputValue === expectedLength) {
    validationInput.classList.add("valid");
    validationInput.classList.remove("invalid");
  } else {
    validationInput.classList.add("invalid");
    validationInput.classList.remove("valid");
  }
});
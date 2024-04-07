const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const formElements = loginForm.elements;

  const formData = {};
  for (let i = 0; i < formElements.length; i++) {
    const element = formElements[i];

    if (element.tagName === "INPUT" && element.value.trim() !== "") {
      formData[element.name] = element.value;
    } else if (element.tagName === "INPUT") {
      alert("Please fill in all fields.");
      return;
    }
  }
  console.log(formData);
  loginForm.reset();
});

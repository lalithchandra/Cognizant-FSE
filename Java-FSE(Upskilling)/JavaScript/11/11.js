document.querySelector("#registrationForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const { name, email, event: eventSelected } = e.target.elements;

  if (!name.value || !email.value) {
    alert("All fields required");
    return;
  }

  console.log("Form submitted:", name.value, email.value, eventSelected.value);
});

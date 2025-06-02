function submitRegistration(data) {
  setTimeout(() => {
    fetch("https://mockapi.io/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(() => alert("Registration successful"))
    .catch(() => alert("Registration failed"));
  }, 1000);
}

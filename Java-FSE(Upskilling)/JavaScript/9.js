// Using .then()
fetch('https://mockapi.io/events')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));

// Using async/await
async function loadEvents() {
  document.querySelector("#loading").style.display = "block";
  try {
    const response = await fetch('https://mockapi.io/events');
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.error("Error fetching events", err);
  } finally {
    document.querySelector("#loading").style.display = "none";
  }
}

const eventsContainer = document.querySelector("#events");

function renderEvents(events) {
  eventsContainer.innerHTML = ""; // clear old cards
  events.forEach(event => {
    const card = document.createElement("div");
    card.textContent = `${event.name} - ${event.date}`;
    eventsContainer.appendChild(card);
  });
}

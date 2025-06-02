const events = [
  { name: "Yoga Class", date: "2025-05-30", seats: 10 },
  { name: "Art Expo", date: "2024-12-25", seats: 0 },
];

events.forEach(event => {
  const isUpcoming = new Date(event.date) > new Date();
  if (isUpcoming && event.seats > 0) {
    console.log(`Valid Event: ${event.name}`);
  }
});

function registerEvent(event) {
  try {
    if (event.seats <= 0) throw new Error("No seats left");
    event.seats--;
    console.log("Registered successfully");
  } catch (error) {
    console.error(error.message);
  }
}

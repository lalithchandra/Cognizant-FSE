const event = {
  name: "Code Bootcamp",
  date: "2025-09-01",
  location: "Auditorium"
};

const { name, date } = event;

const newEvents = [...events]; // cloning

function greetUser(user = "Guest") {
  console.log(`Welcome, ${user}`);
}

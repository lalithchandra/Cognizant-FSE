const events = [];

events.push({ name: "Cooking Workshop", category: "Workshop" });
events.push({ name: "Jazz Night", category: "Music" });

const musicEvents = events.filter(event => event.category === "Music");

const displayCards = events.map(event => `Event: ${event.name}`);
console.log(displayCards);

function Event(name, date, seats) {
  this.name = name;
  this.date = date;
  this.seats = seats;
}

Event.prototype.checkAvailability = function() {
  return this.seats > 0;
};

const musicEvent = new Event("Rock Concert", "2025-07-01", 50);

console.log(musicEvent.checkAvailability());

console.log(Object.entries(musicEvent));

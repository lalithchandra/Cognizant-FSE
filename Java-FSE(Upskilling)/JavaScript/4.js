function addEvent(eventsList, event) {
  eventsList.push(event);
}

function registerUser(event) {
  if (event.seats > 0) {
    event.seats--;
    return true;
  }
  return false;
}

function filterEventsByCategory(events, category) {
  return events.filter(e => e.category === category);
}

// Closure to track total registrations by category
function registrationTracker() {
  const totals = {};
  return function(category) {
    if (!totals[category]) totals[category] = 0;
    totals[category]++;
    return totals[category];
  };
}

const track = registrationTracker();
console.log(track("Music")); // 1
console.log(track("Music")); // 2

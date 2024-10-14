export async function getAllEvents() {
  const response = await fetch(
    "https://job-search-db-7fd1e-default-rtdb.firebaseio.com/events.json"
  );
  const data = await response.json();

  const events = [];

  // handling data that is in json form
  for (const key in data) {
    events.push({
      id: key,
      ...data[key],
    });
  }
  return events;
}

export async function getFeaturedEvents() {
  const allEvents = await getAllEvents();
  return allEvents.filter((event) => event.isFeatured);
}

export async function getEventById(id) {
  const allEvents = await getAllEvents();
  return allEvents.find((event) => event.id === id);
}

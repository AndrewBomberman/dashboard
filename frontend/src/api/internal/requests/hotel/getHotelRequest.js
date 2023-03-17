export default async (id) => {
  const response = await fetch("http://localhost:8000/api/v1/hotels?_id=" + id);
  const hotels = await response.json();
  return hotels[0];
};

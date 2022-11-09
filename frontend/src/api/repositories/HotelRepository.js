export const getHotels = async () => {
  const response = await fetch("http://localhost:8000/api/v1/hotels?");
  const hotels = await response.json()
  console.log(hotels)
  return hotels
};
export const getHotel = async (id) => {
  const response = await fetch("http://localhost:8000/api/v1/hotels?_id=" + id);
  const json = await response.json();
  return json[0];
};
export const addHotel = async (hotel) => {
  const category = await fetch("http://localhost:8000/api/v1/hotels", {
    method: "POST",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(hotel),
  });
  return await category.json();
};
export const editHotel = async (hotel) => {
  const category = await fetch("http://localhost:8000/api/v1/hotels", {
    method: "PUT",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(hotel),
  });
  return await category.json();
};
export const deleteHotel = async (id) => {
  const category = await fetch(
    "http://localhost:8000/api/v1/hotels?_id=" + id,
    {
      method: "DELETE",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
    }
  );
  return await category.json();
};

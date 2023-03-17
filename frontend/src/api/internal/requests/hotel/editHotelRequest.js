export default async (id, hotel) => {
  console.log(hotel)
  return await fetch("http://localhost:8000/api/v1/hotels?_id=" + id, {
    method: "PUT",
    mode: "cors",
    body:hotel

  });
};

export default async (hotel) => {
  return await fetch("http://localhost:8000/api/v1/hotels", {
    method: "POST",
    mode: "cors",
    body: hotel,
  });
};

export default async (id) => {
  return await fetch("http://localhost:8000/api/v1/hotels?_id=" + id, {
    method: "DELETE",
    mode: "cors",
  });
};

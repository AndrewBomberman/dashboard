export default async (id, name) => {
  await fetch("http://localhost:8000/api/v1/hotels/name?_id=" + id, {
    method: "PUT",
    body: name,
  });
};

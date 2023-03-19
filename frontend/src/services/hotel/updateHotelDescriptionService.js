export default async (id, description) => {
  await fetch("http://localhost:8000/api/v1/hotels/description?_id=" + id, {
    method: "PUT",
    body: description,
  });
};

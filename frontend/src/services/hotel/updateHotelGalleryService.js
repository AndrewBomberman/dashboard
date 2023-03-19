export default async (id, gallery) => {
  await fetch("http://localhost:8000/api/v1/hotels/gallery?_id=" + id, {
    method: "PUT",
    body: gallery,
  });
};

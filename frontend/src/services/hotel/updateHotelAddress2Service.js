export default async (id, address2) => {
  await fetch("http://localhost:8000/api/v1/hotels/address2?_id=" + id, {
    method: "PUT",
    body: address2,
  });
};

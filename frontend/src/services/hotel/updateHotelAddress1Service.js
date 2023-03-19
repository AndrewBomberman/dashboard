export default async (id, address1) => {
  await fetch("http://localhost:8000/api/v1/hotels/address1?_id=" + id, {
    method: "PUT",
    body: address1,
  });
};

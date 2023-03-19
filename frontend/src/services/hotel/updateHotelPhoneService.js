export default async (id, phone) => {
  await fetch("http://localhost:8000/api/v1/hotels/phone?_id=" + id, {
    method: "PUT",
    body: phone,
  });
};

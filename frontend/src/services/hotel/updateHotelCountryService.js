export default async (id, country) => {
  await fetch("http://localhost:8000/api/v1/hotels/country?_id=" + id, {
    method: "PUT",
    body: country,
  });
};

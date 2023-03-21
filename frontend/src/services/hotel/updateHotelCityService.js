export default async (id, city) => {
    await fetch("http://localhost:8000/api/v1/hotels/city?_id=" + id, {
      method: "PUT",
      body: city,
    });
  };
  
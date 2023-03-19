export default async (id, email) => {
    await fetch("http://localhost:8000/api/v1/hotels/email?_id=" + id, {
      method: "PUT",
      body: email,
    });
  };
  
export default async (id, thumbnail) => {
    await fetch("http://localhost:8000/api/v1/hotels/thumbnail?_id=" + id, {
      method: "PUT",
      body: thumbnail,
      files:{
        thumbnail:null
      }
    });
  };
  
export const updateName = async (id, name) => {
  const auth = Cookies.get("auth")
  await fetch("http://localhost:8000/api/v1/hotels/name?_id=" + id, {
    method: "PUT",
    body: name,
    headers:{
      authorization:auth
    }
  });
};

export const updateDescription = async (id, description) => {
  const auth = Cookies.get("auth")
  await fetch("http://localhost:8000/api/v1/hotels/description?_id=" + id, {
    method: "PUT",
    body: description,
    headers:{
      authorization:auth
    }
  });
};

export const updateThumbnail = async (id, thumbnail) => {
  const auth = Cookies.get("auth")
  await fetch("http://localhost:8000/api/v1/hotels/thumbnail?_id=" + id, {
    method: "PUT",
    body: thumbnail,
    headers:{
      authorization:auth
    }
  });
};

export const updateGallery = async (id, gallery) => {
  const auth = Cookies.get("auth")
  await fetch("http://localhost:8000/api/v1/hotels/gallery?_id=" + id, {
    method: "PUT",
    body: gallery,
    headers:{
      authorization:auth
    }
  });
};

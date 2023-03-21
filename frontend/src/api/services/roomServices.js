export const updateName = async (id, name) => {
  await fetch("http://localhost:8000/api/v1/hotels/name?_id=" + id, {
    method: "PUT",
    body: name,
  });
};

export const updateDescription = async (id, description) => {
  await fetch("http://localhost:8000/api/v1/hotels/description?_id=" + id, {
    method: "PUT",
    body: description,
  });
};

export const updateThumbnail = async (id, thumbnail) => {
  await fetch("http://localhost:8000/api/v1/hotels/thumbnail?_id=" + id, {
    method: "PUT",
    body: thumbnail,
  });
};

export const updateGallery = async (id, gallery) => {
  await fetch("http://localhost:8000/api/v1/hotels/gallery?_id=" + id, {
    method: "PUT",
    body: gallery,
  });
};

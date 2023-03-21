export const updateNameService = async (id, name, route) => {
  await fetch("http://localhost:8000/api/v1/" + route + "/name?_id=" + id, {
    method: "PUT",
    body: name,
  });
};

export const updateDescriptionService = async (id, description, route) => {
  await fetch(
    "http://localhost:8000/api/v1/" + route + "/description?_id=" + id,
    {
      method: "PUT",
      body: description,
    }
  );
};
export const updateThumbnailService = async (id, thumbnail, route) => {
  await fetch(
    "http://localhost:8000/api/v1/" + route + "/thumbnail?_id=" + id,
    {
      method: "PUT",
      body: thumbnail,
    }
  );
};

export const updateGalleryService = async (id, gallery, route) => {
  await fetch("http://localhost:8000/api/v1/" + route + "/gallery?_id=" + id, {
    method: "PUT",
    body: gallery,
  });
};

export const addService = async (data, route) => {
  return await fetch("http://localhost:8000/api/v1/" + route, {
    method: "POST",
    mode: "cors",
    body: data,
  });
};

export const deleteService = async (id, route) => {
  return await fetch("http://localhost:8000/api/v1/" + route + "?_id=" + id, {
    method: "DELETE",
    mode: "cors",
  });
};

export const getService = async (id, route) => {
  const response = await fetch(
    "http://localhost:8000/api/v1/" + route + "?_id=" + id
  );
  const hotels = await response.json();
  return hotels[0];
};

export const getAllService = async (route) => {
  const response = await fetch("http://localhost:8000/api/v1/" + route);
  return await response.json();
};

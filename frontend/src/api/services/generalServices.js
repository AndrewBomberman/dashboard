import Cookies from "js-cookie";

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
export const updateDisplayService = async (id, display, route) => {
  await fetch("http://localhost:8000/api/v1/" + route + "/display?_id=" + id, {
    method: "PUT",
    body: display,
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

export const getService = async (route, query) => {
  const auth = Cookies.get("auth")
  
  let url = "http://localhost:8000/api/v1/" + route + "?";
  for (const [key, value] of Object.entries(query)) {
    url += key + "=" + value + "&";
  }
  const response = await fetch(url,{
    headers:{
      authorization:auth
    }
  });
  return await response.json();
};

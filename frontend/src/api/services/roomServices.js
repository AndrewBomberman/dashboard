import Cookies from "js-cookie"
const auth = Cookies.get('auth')
export const updateRoomAcService = async (id, ac) => {
  await fetch("http://localhost:8000/api/v1/rooms/ac?_id=" + id, {
    method: "PUT",
    body: ac,
    headers:{
      authorization:auth
    }
  });
};
export const updateRoomWifiService = async (id, wifi) => {
  await fetch("http://localhost:8000/api/v1/rooms/wifi?_id=" + id, {
    method: "PUT",
    body: wifi,
    headers:{
      authorization:auth
    }
  });
};
export const updateRoomServiceService = async (id, roomService) => {
  await fetch("http://localhost:8000/api/v1/rooms/roomService?_id=" + id, {
    method: "PUT",
    body: roomService,
    headers:{
      authorization:auth
    }
  });
};
export const updateRoomTvService = async (id, tv) => {
  await fetch("http://localhost:8000/api/v1/rooms/tv?_id=" + id, {
    method: "PUT",
    body: tv,
    headers:{
      authorization:auth
    }
  });
};
export const updateRoomBreakfastService = async (id, tv) => {
  await fetch("http://localhost:8000/api/v1/rooms/breakfast?_id=" + id, {
    method: "PUT",
    body: tv,
    headers:{
      authorization:auth
    }
  });
};



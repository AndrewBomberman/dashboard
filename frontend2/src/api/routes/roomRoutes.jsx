export default  roomRoutes = {
    path: "/hotel/hotel:id/rooms/room:id",
    loader: async () => {
      const response = await fetch("http://localhost:8000/api/v1/rooms");
      return await response.json();
    },
    path: "/hotel:id/rooms",
    loader: async () => {
      const response = await fetch("http://localhost:8000/api/v1/room/:room_id");
      return await response.json();
    },
}
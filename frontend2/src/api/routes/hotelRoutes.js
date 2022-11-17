import getHotels from "../../api/requests/hotelRequests/"
import getHotel from "../../api/requests/hotelRequests/"
export default hotelRoutes = {
    path: "/",
    loader: async () => {
      return await getHotels()
    },
    path: "/hotels",
    loader: async () => {
      return await getHotels()
    },
    path: "/hotels/:hotel_id",
    loader: async ({params}) => {
      return await getHotel(params.hotel_id)
    },
}
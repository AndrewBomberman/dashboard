import useGetHotels from "../queries/useGetHotels"
import HotelsPage from "../../components/pages/HotelsPage"
const useHotelRoutes = ()=> {
  return {
    path: "/",
    element:<HotelsPage />,
    loader: () => {
      return useGetHotels()
    },
  }
}
export default useHotelRoutes

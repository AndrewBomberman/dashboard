import { useLoaderData } from "react-router-dom"
import HotelEditFormFields from "./HotelFormFields/HotelEditFormFields"

export default function HotelPage(){
    const hotel = useLoaderData()

    return (
        <div className="HotelPage">
          <HotelEditFormFields hotel={hotel}/>
        </div>
    )
}
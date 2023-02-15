import { useLoaderData } from "react-router-dom"

export default function Hotel(){

    const hotel = useLoaderData()
    console.log(hotel)

    return (
        <div className="HotelPage">
            Hotel
        </div>
    )
}
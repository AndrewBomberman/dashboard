import { useLoaderData } from "react-router-dom"
import TableTemplate from "../../templates/TableTemplate"
export default function HotelRoomsPage (){
    const rooms = useLoaderData()
    console.log(rooms)

    return (
        <div className="HotelRoomsPage">
            <TableTemplate mode={"rooms"} data={rooms}/>
        </div>
    )
}
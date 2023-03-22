import TableTemplate from "../../../templates/TableTemplate";

export default function HotelEditRooms ({rooms}){
    
    return (
        <div className="HotelRooms">
           <TableTemplate data={rooms} mode={"room"}/>
        </div>
    )
}
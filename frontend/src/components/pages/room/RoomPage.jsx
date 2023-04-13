import { useLoaderData } from "react-router-dom";
import RoomEditFormFields from "../../templates/EditFormFields/room/RoomEditFormFields";

export default function RoomPage(){
    const room = useLoaderData()
   
    return (
        <div className="RoomPage">
            <RoomEditFormFields room={room[0]}/>
        </div>
    )
}
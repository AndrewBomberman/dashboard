import { useLoaderData } from "react-router-dom"
import HotelsTable from "../components/hotel/table"

export default function Home(){
    const hotels = useLoaderData()
    return (
        <div className="HomePage">
            <HotelsTable hotels={hotels}/>
        </div>
    )
}
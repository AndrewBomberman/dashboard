import { useParams } from "react-router-dom"
import { useGetHotelQuery } from "../../../api/internal/hotel/query/hotelQueries"
import { CircularProgress } from "@mui/material"
import FormTemplate  from "../../templates/form/formTemplate"

export default function HotelPage(){
    const  {id} = useParams()
    const { data:hotel, isFetching, isLoading } = useGetHotelQuery(id)
    while (isLoading || isFetching) {
        return <CircularProgress />;
    }

    return (
        <div className="HotelPage">
            <FormTemplate type={"hotel"} data={hotel}/>
        </div>
    )
}
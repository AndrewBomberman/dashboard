import FormTemplate from "../../templates/form/formTemplate";
import { useAddHotelQuery } from "../../../api/internal/hotel/query/hotelQueries";

export default function AddHotelPage(){
    const { mutate } = useAddHotelQuery()
    return (
        <div className="AddHotelPage">
            <FormTemplate type={"hotel"} datasubmit={mutate} />
        </div>
    )
}
import { useLoaderData } from "react-router-dom"
import FormTemplate from "../../templates/FormTemplate"
import HotelFormFields from "./HotelFormFields"
import { useState } from "react"
import { useEditHotelQuery } from "../../../../../frontend3/src/api/internal/hotel/query/hotelQueries"
export default function HotelPage(){
    const hotel = useLoaderData()

    return (
        <div className="HotelPage">
            <FormTemplate title={"Hotel"} changeMode={()=>setEditable(!editable)}>
                <HotelFormFields hotel={hotel}/>
            </FormTemplate>
        </div>
    )
}
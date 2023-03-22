import CountryAndCityList from "../../../templates/lists/CountryAndCityList"
import { updateHotelCountryService } from "../../../../api/services/hotelServices";
import { updateHotelCityService } from "../../../../api/services/hotelServices";

export default function HotelEditCountryAndCity({hotel}){
   return (
    <div className="HotelEditCountryAndCity">
         <CountryAndCityList model={hotel} updateCountry={updateHotelCountryService} updateCity={updateHotelCityService}/>
    </div>
   )
}
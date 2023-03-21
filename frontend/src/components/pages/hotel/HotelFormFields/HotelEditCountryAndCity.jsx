import CountryAndCityList from "../../../templates/lists/CountryAndCityList"
import updateHotelCountryService from "../../../../services/hotel/updateHotelCountryService"
import updateHotelCityService from "../../../../services/hotel/updateHotelCityService"

export default function HotelEditCountryAndCity({hotel}){
   return (
    <div className="HotelEditCountryAndCity">
         <CountryAndCityList model={hotel} updateCountry={updateHotelCountryService} updateCity={updateHotelCityService}/>
    </div>
   )
}
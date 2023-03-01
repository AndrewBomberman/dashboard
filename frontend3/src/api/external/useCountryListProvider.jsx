import { useQuery } from "react-query";

const useCountryListProvider = () => {
  return useQuery(
    "countryList",
    async () => {
      const response = await fetch("https://countriesnow.space/api/v0.1/countries");
      return await response.json();
    },
   
    {
      select: (data) => {
        return data.data.map(country=>{
          return {
            country: country.country,
            cities:country.cities
          }
        })
      },
    },
    
  );
};

export default useCountryListProvider
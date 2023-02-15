import { useQuery } from "react-query";

const useCountryListProvider = () => {
  return useQuery(
    "countryList",
    async () => {
      const response = await fetch("https://restcountries.com/v2/all");
      return await response.json();
    },
   
    {
      select: (data) => {
        if (data.length > 0) {
          return (
            data &&
            data.map(country=> {
              return {
                name: country.name,
                code: country.numericCode
              }
            })
          );
        }
        return [];
      },
    },
    
  );
};
export default useCountryListProvider

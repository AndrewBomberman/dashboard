import { useQuery } from "react-query";

const useCityListProvider = () => {
  return useQuery(
    "cityList",
    async (country) => {
      const response = await fetch("https://countriesnow.space/api/v0.1/countries/cities",{
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({country:country})
      });
      return await response.json();
    },
    {
      select: (data) => {
        if (data.length > 0) {
          return (
            data &&
            data.map(country=> {
              return country.name
            })
          );
        }
        return [];
      },
    },
    
  );
};
export default useCityListProvider

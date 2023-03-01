import useCountryListProvider from "../../api/external/useCountryListProvider";
import CircularProgress from "@mui/material/CircularProgress";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import { useEffect, useState } from "react";
import { FormControl, Stack } from "@mui/material";
export default function CountryList({enabled}) {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectCityOptions, setSelectedCityOptions] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [disableSelectCity, setDisableSelectCity] = useState(true)
  const { data, isLoading, isFetching } = useCountryListProvider();
  useEffect(() => {
    console.log(selectCityOptions);
  }, [selectedCountry, selectCityOptions, enabled]);

  while (isLoading || isFetching) {
    return <CircularProgress />;
  }
  console.log(enabled);

  return (
    <Stack spacing={2}>
      <FormControl>
        <InputLabel id="demo-simple-select-label">Country</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="selectCountry"
          value={selectedCountry}
          label="Country"
          name="country"
          defaultValue=""
          onChange={(e) => {
            setSelectedCountry(e.target.value);
            const filter = data.find((elem) => elem.country === e.target.value);
            setSelectedCityOptions(filter.cities);
            setDisableSelectCity(!disableSelectCity)
          }}
          disabled={enabled ? !enabled:true}
        >
          {data.map((country) => {
            return (
              <MenuItem key={Math.random() * 10000} value={country.country}>
                {country.country}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      <FormControl disabled={disableSelectCity}>
        <InputLabel id="demo-simple-select-label2">City</InputLabel>
        <Select
          labelId="demo-simple-select-label2"
          id="demo-simple-select2"
          value={selectedCity}
          label="City"
          name="city"
          defaultValue=""
          onChange={(e) => setSelectedCity(e.target.value)}
        >
          {selectCityOptions.map((city) => {
            return (
              <MenuItem key={Math.random() * 10000} value={city}>
                {city}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Stack>
  );
}

import { useEffect, useState } from "react";
import useCountryAndCityList from "../../../api/external/useCountryAndCityList";
import { CircularProgress, Stack } from "@mui/material";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import RefreshIcon from "@mui/icons-material/Refresh";

export default function CountryAndCityList({
  model,
  updateCountry,
  updateCity,
}) {
  const [selectedCountry, setSelectedCountry] = useState(model.address.country);
  const [selectedCity, setSelectedCity] = useState(model.address.city);
  const [countryList, setCountryList] = useState();
  const [cityList, setCityList] = useState();
  const [enabledCountryList, setEnabledCountryList] = useState(false);
  const [enabledCityList, setEnabledCityList] = useState(false);
  const { data, isLoading, isFetching } = useCountryAndCityList();

  while (isFetching || isLoading) {
    return <CircularProgress />;
  }

  const handleChange = (e) => {
    setSelectedCountry(e.target.value);
    setCityList(
      data.find((country) => country.country === e.target.value).cities
    );
    setSelectedCity(
      data.find((country) => country.country === e.target.value).cities[0]
    );
    setEnabledCityList(true);
    console.log(cityList);
  };

  const handleUpdateCountry = async () => {
    const formData = new FormData();
    formData.append("country", selectedCountry);
    await updateCountry(model._id, formData);
  };

  const handleUpdateCity = async () => {
    const formData = new FormData();
    formData.append("city", selectedCity);
    await updateCity(model._id, formData);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <Stack spacing={2}>
        <Stack direction={"row"} spacing={1}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Country</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectedCountry ?? data[0]}
              label="Country"
              onChange={handleChange}
              disabled={!enabledCountryList}
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
          <FormControl>
            <IconButton
              color="success"
              onClick={() => setEnabledCountryList(!enabledCountryList)}
            >
              <EditIcon />
            </IconButton>
          </FormControl>
          <FormControl>
            <IconButton
              disabled={!enabledCountryList}
              onClick={() => {
                setSelectedCountry(model.address.country);
                setSelectedCity(model.address.city);
              }}
            >
              <RefreshIcon />
            </IconButton>
          </FormControl>
          <FormControl>
            <IconButton
              color="primary"
              disabled={!enabledCountryList}
              onClick={async () => {
                if (enabledCountryList && enabledCityList) {
                  await handleUpdateCountry();
                  await handleUpdateCity();
                }
                setEnabledCountryList(false);
                setEnabledCityList(false);
              }}
            >
              <SaveIcon />
            </IconButton>
          </FormControl>
        </Stack>
        <Stack direction={"row"} spacing={1}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">City</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectedCity}
              label="City"
              onChange={(e) => setSelectedCity(e.target.value)}
              disabled={!enabledCityList}
            >
              {data
                .find((country) => country.country === selectedCountry)
                .cities.map((city) => {
                  return (
                    <MenuItem key={Math.random() * 10000} value={city}>
                      {city}
                    </MenuItem>
                  );
                })}
            </Select>
          </FormControl>
        </Stack>
      </Stack>
    </Box>
  );
}

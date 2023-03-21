export const updateHotelEmailService = async (id, email) => {
  await fetch("http://localhost:8000/api/v1/hotels/email?_id=" + id, {
    method: "PUT",
    body: email,
  });
};
export const updateHotelPhoneService = async (id, phone) => {
  await fetch("http://localhost:8000/api/v1/hotels/phone?_id=" + id, {
    method: "PUT",
    body: phone,
  });
};

export const updateHotelAddress1Service = async (id, address1) => {
  await fetch("http://localhost:8000/api/v1/hotels/address1?_id=" + id, {
    method: "PUT",
    body: address1,
  });
};
export const updateHotelAddress2Service = async (id, address2) => {
  await fetch("http://localhost:8000/api/v1/hotels/address2?_id=" + id, {
    method: "PUT",
    body: address2,
  });
};
export const updateHotelCountryService = async (id, country) => {
  await fetch("http://localhost:8000/api/v1/hotels/country?_id=" + id, {
    method: "PUT",
    body: country,
  });
};
export const updateHotelCityService = async (id, city) => {
  await fetch("http://localhost:8000/api/v1/hotels/city?_id=" + id, {
    method: "PUT",
    body: city,
  });
};

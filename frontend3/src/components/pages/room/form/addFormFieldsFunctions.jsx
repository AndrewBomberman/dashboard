import { useAddHotelRequest } from "../../../../api/requests/hotelRequests";
export const addFormHandleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", e.target["name"].value);
    formData.append("thumbnail", e.target["thumbnail"].files[0]);
    await useAddHotelRequest(formData);
};
import { useAddHotelRequest } from "../../../../../api/hotel/requests/hotelRequests";
export const addFormHandleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", e.target["name"].value);
    formData.append("discription", e.target["discription"].value);
    formData.append("address1", e.target["address1"].value);
    formData.append("address2", e.target["address2"].value);
    formData.append("country", e.target["country"].value);
    formData.append("city", e.target["city"].value);
    formData.append("thumbnail", e.target["thumbnail"].files[0]);
    for(let i=0;i<e.target["gallery"].files.length;i++) {
        console.log(e.target["gallery"].files[i])
        formData.append("gallery", e.target["gallery"].files[i])
    }
    
    await useAddHotelRequest(formData);
};
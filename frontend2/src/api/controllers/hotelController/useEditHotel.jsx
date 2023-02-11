const useEditHotel = async (hotel) =>{
    await fetch("http://localhost:8000/api/v1/hotels", {
      method: "PUT",
      mode: "cors",
      body: hotel,
    });
}
export default useEditHotel
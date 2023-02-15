const useEditHotel = async (id, hotel) =>{
  const response = await fetch("http://localhost:8000/api/v1/hotels?_id="+id, {
    method: "PUT",
    mode: "cors",
    body: hotel,
  });
  return await response.json()
}
export default useEditHotel



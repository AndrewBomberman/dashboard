
export default useGetHotel = async (id) =>{
    const response = await fetch("http://localhost:8000/api/v1/hotels?hotel_id="+id,{
        mode:"cors",
        headers:{"Content-Type": "application/json"},
    })
    return await response.json()
}
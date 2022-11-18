export default useDeleteHotel = async (id) =>{
    const response = await fetch("http://localhost:8000/api/v1/hotels?hotel_id="+id,{
        method:"DELETE",
        mode:"cors",
        headers:{"Content-Type": "application/json"},
    })
    return await response.json()
}
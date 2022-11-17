export default useEditHotel = async (hotel) =>{
    const response = await fetch("http://localhost:8000/api/v1/hotels?hotel_id="+hotel_id,{
        method:"PUT",
        mode:"cors",
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify(hotel)
    })
    return await response.json()
}
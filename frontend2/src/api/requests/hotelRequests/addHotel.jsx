export default useAddHotel = async (hotel) =>{
    const response = await fetch("http://localhost:8000/api/v1/hotels",{
        method:"POST",
        mode:"cors",
        headers:{"Content-Type": "application/json"},
        body:JSON.stringify(hotel)
    })
    return await response.json()

}
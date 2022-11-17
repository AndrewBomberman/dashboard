export default useDeleteHotel = async () =>{
    const response = await fetch("http://localhost:8000/api/v1/hotels",{
        mode:"cors",
        headers:{"Content-Type": "application/json"},
    })
    return await response.json()
}
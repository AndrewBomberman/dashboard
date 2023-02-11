const addHotelRequest = async (hotel)=>{
    console.log(hotel)
    return await fetch("http://localhost:8000/api/v1/hotels",{
        method:"POST",
        mode:"cors",
        body:hotel
    })
}
export default addHotelRequest
export default async (hotel)=>{
    await fetch("http://localhost:8000/api/v1/rooms",{
        method:"POST",
        mode:"cors",
        body:hotel
    })
}
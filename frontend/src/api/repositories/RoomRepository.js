export const getRooms = async (hotel_id) =>{
    const category = await fetch("http://localhost:8000/api/v1/room?hotel_id="+hotel_id)
    return await category.json()
}
export const addRoom = async (room) =>{
    const category = await fetch("http://localhost:8000/api/v1/room",{
        method:"POST",
        mode:"cors",
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify(room)
    })
    return await category.json()
}

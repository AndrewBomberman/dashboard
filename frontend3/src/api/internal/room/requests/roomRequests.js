export const useGetRoomsRequest = async (hotel_id)=>{
    console.log(hotel_id)
    const response = await fetch("http://localhost:8000/api/v1/rooms?hotel_id="+hotel_id)
    return await response.json()
}

export const useGetRoomRequest = async (id) =>{
    const response =  await fetch("http://localhost:8000/api/v1/rooms?_id=" + id)
    return await response.json()
}
export const useAddRoomRequest = async (room, hotel_id) =>{
    await fetch("http://localhost:8000/api/v1/rooms?hotel_id=" + hotel_id,{
        method: "POST",
        mode:"cors",
        body:room
    })
    
}

export const useEditRoomRequest = async (id, room) =>{
    await fetch("http://localhost:8000/api/v1/rooms?_id="+id,{
        method: "PUT",
        mode:"cors",
        body:room
    })
}
export const useDeleteRoomRequest = async (id) =>{
    await fetch("http://localhost:8000/api/v1/rooms?_id="+id,{
        method: "DELETE",
        mode:"cors",
    })
}
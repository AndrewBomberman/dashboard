export const useGetRoomsRequest = async ()=>{
    const response = await fetch("http://localhost:8000/api/v1/rooms")
    return await response.json()
}

export const useGetRoomRequest = async (id) =>{
    const response =  await fetch("http://localhost:8000/api/v1/rooms?_id=" + id)
    return await response.json()
}
export const useAddRoomRequest = async (room) =>{
    await fetch("http://localhost:8000/api/v1/rooms",{
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
export const useDeleteroomRequest = async (id) =>{
    await fetch("http://localhost:8000/api/v1/rooms?_id="+id,{
        method: "DELETE",
        mode:"cors",
    })
}
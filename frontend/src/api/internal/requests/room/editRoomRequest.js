export default async (id, room)=>{
    await fetch("http://localhost:8000/rooms?_id="+ id,{
        method:"PUT",
        mode:"cors",
        body:room
    })
}
export default async (id)=>{
    await fetch("http://localhost:8000/api/v1/rooms?_id="+id,{
        method:"DELETE",
        mode:"cors"
    })
}
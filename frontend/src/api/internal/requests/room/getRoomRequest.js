export default async (id)=>{
    const response = await fetch ("http://localhost:8000/api/v1/rooms?_id="+id,{
        mode:"cors"
    })
    return await response.json()
}
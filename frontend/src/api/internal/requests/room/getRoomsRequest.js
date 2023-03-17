export default async ()=>{
    const reponse = await fetch("http://localhost:8000/api/v1/rooms",{
        mode:"cors"
    })
    return await reponse.json()
}
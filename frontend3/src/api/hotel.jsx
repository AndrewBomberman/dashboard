export const useGetHotels = async ()=>{
    const response = await fetch("http://localhost:8000/api/v1/hotels")
    return await response.json()
}

export const useGetHotel = async ({ params }) =>{
    const response =  await fetch("http://localhost:8000/api/v1/hotels?_id=" + params.id)
    return await response.json()
}
export const useAddHotel = async ({request}) =>{
    await fetch("http://localhost:8000/api/v1/hotels",{
        method: "POST",
        mode:"cors",
        body:request.body
    })
}

export const useEditHotel = async ({request, params}) =>{
    await fetch("http://localhost:8000/api/v1/hotels?_id="+params.id,{
        method: "PUT",
        mode:"cors",
        body:request.body
    })
}
export const useDeleteHotel = async ({params}) =>{
    await fetch("http://localhost:8000/api/v1/hotels?_id="+params.id,{
        method: "DELETE",
        mode:"cors",
    })
}
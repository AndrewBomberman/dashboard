import Cookies from "js-cookie"
const auth = Cookies.get('auth')
console.log(auth)

export const useGetHotelsRequest = async ()=>{
    const response = await fetch("http://localhost:8000/api/v1/hotels",{
        headers:{
            "Authorization": auth
        }
    })
    return await response.json()
}

export const useGetHotelRequest = async ({params}) =>{
    console.log(params)
    const response =  await fetch("http://localhost:8000/api/v1/hotels?_id=" + id)
    return await response.json()
}
export const useAddHotelRequest = async (hotel) =>{
    
    await fetch("http://localhost:8000/api/v1/hotels",{
        method: "POST",
        mode:"cors",
        body:hotel
    })
    
}

export const useEditHotelRequest = async (id, hotel) =>{
    await fetch("http://localhost:8000/api/v1/hotels?_id="+id,{
        method: "PUT",
        mode:"cors",
        body:hotel
    })
}
export const useDeleteHotelRequest = async (id) =>{
    await fetch("http://localhost:8000/api/v1/hotels?_id="+id,{
        method: "DELETE",
        mode:"cors",
    })
}
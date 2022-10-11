export const get = async(id)=>{
    if(id){
        console.log(id)
        console.log("Params")
        const response = await fetch("http://localhost:8000/api/v1/category?_id="+id)
        const json = await response.json()
        console.log(json)
        return json
    }
    else{
        const response = await fetch("http://localhost:8000/api/v1/category")
        const json = await response.json()
        console.log(json)
        return json
    }
}
export const add = async (id) =>{
    const response = await fetch("http://localhost:8000/api/v1/category",{
        method:props.mode,
        mode:"cors",
        headers:{"Content-Type": "application/json"},
        body:JSON.stringify(category),
    })
    const json = await response.json()
    console.log(json)
    
}
export default async()=>{
    const response = await fetch("http://localhost:8000/api/v1/auth/google/url")
    return await response.json()
}
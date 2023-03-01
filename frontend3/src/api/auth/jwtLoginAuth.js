export default async (user) =>{
    const response = await fetch("http://localhost:8000/api/v1/auth/jwt/login", {
        method: 'POST',
        body:user
    })
    return await response.json()
}
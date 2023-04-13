export const HotelStatisctics = async () => {
    const res = await fetch("http://localhost:8000/api/v1/bookings")
    return await res.json()
}
export const MealPlanStatistics = async () => {
    const res = await fetch("http://localhost:8000/api/v1/bookings/meal")
    return await res.json()
}
export const FamillyTypeStatistics = async () => {
    const res = await fetch("http://localhost:8000/api/v1/bookings/familly")
    return await res.json()
}
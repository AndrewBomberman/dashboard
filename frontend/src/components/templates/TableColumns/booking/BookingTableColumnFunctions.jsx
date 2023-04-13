export const getArrivalYear = (params)=>{
    return Number(params.row.arrival_year)
}
export const getArrivalMonth = (params)=>{
    return Number(params.row.arrival_month)
}
export const getArrivalDay = (params)=>{
    return Number(params.row.arrival_date)
}
export const getMealPlan = (params)=>{
    return params.row.type_of_meal_plan
}
export const getNrAdults = (params)=>{
    return Number(params.row.no_of_adults)
}
export const getNrChildren = (params)=>{
    return Number(params.row.no_of_children)
}

export const getBookingLength = (params)=>{
    return Number(params.row.no_of_weekend_nights) + Number(params.row.no_of_week_nights)
}

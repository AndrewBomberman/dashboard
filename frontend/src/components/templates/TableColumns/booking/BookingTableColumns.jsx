import {
  getArrivalYear,
  getArrivalMonth,
  getArrivalDay,
  getMealPlan,
  getNrAdults,
  getNrChildren,
  getBookingLength
} from "./BookingTableColumnFunctions";
export default [
  {
    field: "length",
    headerName: "Booking Length",
    width: 200,
    valueGetter: getBookingLength,
  },
  {
    field: "no_of_adults",
    headerName: "Nr.Adults",
    width: 200,
    valueGetter: getNrAdults,
  },
  {
    field: "no_of_children",
    headerName: "Nr.Children",
    width: 200,
    valueGetter: getNrChildren,
  },
  {
    field: "year",
    headerName: "Year",
    width: 200,
    valueGetter: getArrivalYear,
  },
  {
    field: "month",
    headerName: "Month",
    width: 200,
    valueGetter: getArrivalMonth,
  },
  {
    field: "day",
    headerName: "Day",
    width: 200,
    valueGetter: getArrivalDay,
  },
  {
    field: "meal_plan",
    headerName: "Meal Plan",
    width: 200,
    valueGetter: getMealPlan,
  },
];

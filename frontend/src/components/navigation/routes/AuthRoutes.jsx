import { lazy } from 'react';
export default [
    {
        index:true,
        path: "/",
        component: lazy(() => import('../../pages/hotel/HotelsPage')),
        data:async()=>{
            const { getService } = await import("../../../api/services/generalServices");
            return await getService("hotels",{});
        }
    },
    {
        path: "/hotels/:id",
        component: lazy(() => import('../../pages/hotel/HotelPage')),
        data:async({params})=>{
            const { getService } = await import("../../../api/services/generalServices");
            return await getService("hotels",{_id:params.id});
        },
    },
    {
        path: "bookings",
        component: lazy(() => import('../../pages/bookings/BookingsPage')),
        data:async()=>{
            return []
        }
    },
    {
        path:"rooms",
        component: lazy(() => import('../../pages/room/RoomPage')),
        data:async ({ params }) => {
            const { getService } = await import(
              "../../../api/services/generalServices"
            );
            return await getService("hotels", { _id: params.id });
        }
    },
    {
        path:"rooms/:id",
        component: lazy(() => import('../../pages/room/RoomPage')),
        data:async ({ params }) => {
            const { getService } = await import(
              "../../../api/services/generalServices"
            );
            return await getService("rooms", { _id: params.id });
        }

    },
    {
        path:"statistics",
        component: lazy(() => import('../../pages/statistics/StatisticsPage')),
        data:async () => {
            const {
              HotelStatisctics,
              MealPlanStatistics,
              FamillyTypeStatistics,
            } = await import("../../../api/internal/statistics");
            return {
              last_year_bookings: await HotelStatisctics(),
              meal_plan_stats: await MealPlanStatistics(),
              family_type_stats: await FamillyTypeStatistics(),
            };
        }
    }
]
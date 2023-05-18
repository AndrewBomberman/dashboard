import { lazy } from 'react';
export default [
    {

        index:true,
        path: "",
        component: lazy(() => import('../../pages/auth/LoginPage')),
        data:async()=>{
            const { googleOAuthURL } = await import("../../../api/internal/auth");
            return await googleOAuthURL();
        }
    },
    
    {
        path: "register",
        component: lazy(() => import('../../pages/auth/RegisterPage')),
        data:async()=>{
            const { googleOAuthURL } = await import("../../../api/internal/auth");
            return await googleOAuthURL();
        }
    }
]
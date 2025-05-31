import { Navigate, useLocation } from "react-router-dom";


function CheckAuth({isAuthenticated, user, children}) {

    const location = useLocation();

    if(!isAuthenticated && !(location.pathname.includes('/login') || location.pathname.includes('/register'))){
        // if (user?.role === '') {
        //     return <Navigate to="/shop/home"/>
        // }
        // else if (location.pathname.includes("/shop/listing") || location.pathname.includes("/shop/checkout") || location.pathname.includes("/shop/account")){
        //     return <Navigate to="/auth/login" />
        // }
        // else{
            return <Navigate to="/auth/login"/>
        // }
        // else if (location.pathname.includes('/admin')) {
        //     return <Navigate to="/unauth-page"/>
        // }
        
    }

    if(isAuthenticated && (location.pathname.includes('/login') || location.pathname.includes('/register'))){
        if(user?.role === 'admin'){
            return <Navigate to="/admin/dashboard"/>
        }
        else{
            return <Navigate to="/shop/home"/>
        }
    }

    if(isAuthenticated && user?.role !== 'admin' && location.pathname.includes('/admin')){
        return <Navigate to="/unauth-page"/>
    }

    if(isAuthenticated && user?.role === 'admin' && location.pathname.includes('/shop')){
        return <Navigate to="/admin/dashboard"/>
    }

    return ( 
        <>{children}</>
     );
}

export default CheckAuth;
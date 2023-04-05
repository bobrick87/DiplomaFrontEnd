import { Navigate, Outlet } from "react-router-dom"

const PrivateRouter = ({ redirectPath = '/login' }) => {
    if(!localStorage.getItem('JWT')) {
        console.log("сработала приват в иф")
        return <Navigate to={redirectPath} replace/>
    }
    
    return <Outlet />  
}

export default PrivateRouter;
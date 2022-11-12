import { Outlet, Navigate } from "react-router-dom";
const ProtectedRoutes = ()=> {
    const isAutheticated = true;
 return (
    isAutheticated ? <Outlet/> : <Navigate to="/login"/>
    
 )
}
export default ProtectedRoutes;
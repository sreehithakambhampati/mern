
import { Navigate} from "react-router-dom";
import { useAuth } from "../context/auth";
import { useEffect } from "react";

export const LogOut = () => {
   
    const {LogOutUser} = useAuth();
    useEffect(() => {
    LogOutUser();
    
  }, [LogOutUser]);

    return(
       <Navigate to="/login"/>

       
    );
    
}
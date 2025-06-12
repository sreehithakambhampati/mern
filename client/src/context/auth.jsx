import { createContext, useContext,useState } from "react";
const AuthContext = createContext();


export const AuthProvider = ({children}) => {
    const[token,setToken] = useState("");
    const LogOutUser = () => {
        setToken("");
        return localStorage.removeItem("token");
    }
    const storeinLS = (serverToken) => {
        setToken(serverToken)
              return localStorage.setItem("token",serverToken)
    }
    let isLoggedIn = !!token
    console.log("isLoggedIn",isLoggedIn);

    return(
    <AuthContext.Provider value={{storeinLS,isLoggedIn,LogOutUser}}>
       {children}
    </AuthContext.Provider>)
}



export const useAuth=()=>{
    return useContext(AuthContext);
}
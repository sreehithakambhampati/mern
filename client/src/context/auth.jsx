import { createContext, useContext } from "react";
const AuthContext = createContext();


export const AuthProvider = ({children}) => {
    const storeinLS = (serverToken) => {
              return localStorage.setItem("token",serverToken)
    }
    return(
    <AuthContext.Provider value={{storeinLS}}>
       {children}
    </AuthContext.Provider>)
}



export const useAuth=()=>{
    return useContext(AuthContext);
}
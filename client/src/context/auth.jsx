import { createContext, useContext, useEffect, useState } from "react";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem("token") || "");
  const [user, setUser] = useState("");
  const[services,setServices]=useState("");
  const LogOutUser = () => {
    setToken("");
    return localStorage.removeItem("token");
  };

  const storeinLS = (serverToken) => {
    setToken(serverToken);
    return localStorage.setItem("token", serverToken);
  };
  let isLoggedIn = !!token;
  console.log("isLoggedIn", isLoggedIn);

  const userAuthentication = async () => {
    try {
      const response = await fetch("http://localhost:5000/user", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data.msg);
        setUser(data.msg);
      } else {
        console.error("Error fetching user data");
      }
    } catch (error) {}
  };
  const getServiceData = async() => {
        try {
            const response = await fetch("http://localhost:5000/service",{
                method:"GET",
                

            })
            if(response.ok)
            {
                const data = await response.json();
                setServices(data);
            }
        } catch (error) {
            console.log(error)
        }
  }
  useEffect(() => {
    console.log("In useeffect");
    if (token) {
      userAuthentication();
    }
    getServiceData();

  }, [token]);
  return (
    <AuthContext.Provider value={{ storeinLS, isLoggedIn, LogOutUser, user,services}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

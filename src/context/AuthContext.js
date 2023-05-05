import { createContext, useContext, useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import { EndPointContext } from "./EndPointContext";
const AuthContext = createContext()
const AuthProvider = ({ children }) => {
    const { endpoint } = useContext(EndPointContext)
    const [token, setToken] = useState(
        localStorage.getItem('token') ?
            localStorage.getItem('token') :
            null
    )
    const [User, setUser] = useState({})
    const retreiveUser = async (user_id) => {
        const response = await fetch(`${endpoint}/profiles/${user_id}/`)
        const data = await response.json()
        setUser(data)
    }
    useEffect(() => {
        try {
            var { user_id } = jwtDecode(token)
        }
        catch { }
        user_id ? retreiveUser(user_id) : setUser({})
    }, [token])
    return (
        <AuthContext.Provider value={{ token, setToken, User }}>
            {children}
        </AuthContext.Provider>
    )
}
export { AuthProvider, AuthContext };
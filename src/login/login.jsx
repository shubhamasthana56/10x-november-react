import { useState } from "react";
import { useLocalStorage } from "../custom-hooks/localstorage";
const Login = ()=> {
    const [userName, setUserName] = useState("")
    const {setLocalStorage} = useLocalStorage({})
    const userLogin = ()=> {
        //const [userLogin , setUserLogin] = useState(false)
        //username isAuthenticated
        setLocalStorage({user: userName, isAuthenticated: true});
        //windows.localStorage.setItem("user", userName)
        //windows.localStorage.setItem("isAuthenticated", true)

    }
    return (
        <>
        <input onChange={(e)=> {setUserName(e.target.value)}} value={userName}/>
        <button onClick={userLogin}>Login</button>
        </>
    )
}
export default Login;
import { useState } from "react"

const Login = ()=> {
    const [form, setForm] = useState({email: "", password: ""});
    const handleLogin = ()=> {
        //fetch
        const users = [{"name":"shubham","email":"shubham@gmail.com","password":"Abc@123"},{"name":"shubham1","email":"shubham1@gmail.com","password":"Abc@123d"},
        {"name":"shubham2","email":"shubham1@gmail.com","password":"Abc@123d"}]
        users.map((user)=> {
            if(user.email === form.email) {
                if(user.password=== form.password) {

                } else {
                    console.log("Invalid password") 
                }
            } else {
                console.log("user not exist")
            }
        })
    }
    return (
        <>
            <div>Login</div>
            <section>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" onChange={(e)=> {setForm({...form, email: e.target.value})}}/>
            </section>
            <section>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" onChange={(e)=> {setForm({...form, password: e.target.value})}}/>
            </section>
            <button onClick={handleLogin}>Submit</button>
            
        </>
    )
}
export default Login
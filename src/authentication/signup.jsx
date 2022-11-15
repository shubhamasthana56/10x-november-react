import { useState } from "react";
const Registration = ()=> {
    const [form, setForm] = useState({name: "", email: "", password: ""})
    const handleSubmit = ()=> {
         let users = []
         users.push(window.localStorage.getItem("users"));
        //[]
        if(users) {
            users.push(JSON.stringify(form))
            //const newUser = [...users, JSON.stringify(form)];
            //window.localStorage.setItem("users",newUser);
            window.localStorage.setItem("users",users);
        } else {
            window.localStorage.setItem("users",[JSON.stringify(form)]);
        }

    }
    return (
        <>
            <div>Registration Form</div>
            <section>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" onChange={(e)=> {setForm({...form, name: e.target.value})}}/>
            </section>
            <section>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" onChange={(e)=> {setForm({...form, email: e.target.value})}}/>
            </section>
            <section>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" onChange={(e)=> {setForm({...form, password: e.target.value})}}/>
            </section>
            <button onClick={handleSubmit}>Submit</button>
            
        </>
    )
}
export default Registration
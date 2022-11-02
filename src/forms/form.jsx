import { useState } from "react";

const Form = ()=> {
    const [userForm, setUserForm] = useState({username: "", email:"", age:"", password: ""})
    const handleSubmit = ()=> {
        //1 get formData
        //userForm
        console.log(userForm);
        // send form data to particular address
        // fetch("address", {
        //     method: "get/post/put/delete",
        //     body: "data for post put delete"
        // })
        fetch("https:cloudshare/shubham",{
            method: "POST",
            body: JSON.stringify(userForm)
        }).then((res)=> {
            console.log("We made a successfull request")
        }).catch((err)=> {
            console.log(err, "Failed to send request")
        })
    }
    return (
        <div>
            <form>
                <section>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" onChange={(event)=> {setUserForm({...userForm, username: event.target.value})}}/>
                </section>
                <section>
                    <label htmlFor="age">Age</label>
                    <input type="number" id="age" onChange={(event)=> {setUserForm({...userForm, age: event.target.value})}}/>
                </section>
                <section>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" onChange={(event)=>{setUserForm({...userForm, email: event.target.value})}}/>
                </section>
                <section>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" onChange={(event)=>{setUserForm({...userForm, password: event.target.value})}}/>
                </section>
                <section>
                    <input type="button" value="Submit User" onClick={handleSubmit}/>
                </section>
            </form>
            
        </div>
    )
}
export default Form;
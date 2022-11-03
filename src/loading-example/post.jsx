import { useState } from "react";

const Post = ()=> {
    const [form, setForm] = useState({email: "", password: ""});
    // const userList = [{email: "shubham@gmail.com", password:123}, {email: "abc@gmail.com", password:"abc"},
    // {email: "xyz@gmail.com", password:"xyz"}];
    const handleSubmit = ()=> {
        fetch("/https://dog.ceo/api/breeds/image/random", {
          method: "POST",
          body:  JSON.stringify(form) 
        }).then((res)=> {
            return res.json()
        }).then((data)=> {
            //console.log(data)
            //updated State
        }).catch((err)=> {
            console.log(err)
        });
    }
    return (
        <div>
            <div>
                <label htmlFor="email">Email</label>
                <input id="email" onChange={(event)=> {setForm({...form, email: event.target.value})}} type="email"></input>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input id="password" onChange={(event)=> {setForm({...form, password: event.target.value})}} type="password"></input>
            </div>
            <button onClick={()=> {handleSubmit()}}>Sumbit</button>
        </div>
    )
}
export default Post;
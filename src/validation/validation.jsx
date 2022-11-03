import { useState } from "react";
import "./validation.css";
const FormValidation = ()=> {
    const [formValue, setFormValue] = useState({name: "", email: "", password: "", confirmPassword: ""});
    const [errors, setErrors] = useState({});
    const handleSubmit = (event)=> {
        event.preventDefault();
        //vaildator(formValue);
    }
    const vaildator = (form, type)=> {
        //name
        //regex 
        switch(type) {
           case "name":
            if(form.name.length >= 8) {
                const nameRegx = /^[a-zA-Z]*$/;
                if(!nameRegx.test(form.name)) {
                    setErrors({...errors, nameErrorMessage: "Invalid username special characters and numbers are not allowed"});
                }

            } else {
                setErrors({...errors, nameErrorMessage: "Username cant be empty"});
            }  
            case "confirmPassword":
             if(form.password === form.confirmPassword)  {

            }
        }
        //""true false
        // if(!nameRegx.test(form.name)) {
        //     setErrors({...errors, nameErrorMessage: "please enter valid username"});
        // } else {
        //     setErrors({...errors, nameErrorMessage: ""})
        // }
        //match test
        // const invalid = ["!", "@", "$"]
        // form.name.forEach(()=> {
        //     ///number
        //     //parseInt true nan
        // })
        //email
        //password
        //identical password
        //form.password === form.confirmPassword
    }
    return (
        <div>
            <form className="form">
                <div className="form-attr">
                    <label>Name:</label>
                    <input type="text" onChange={(event)=> {setFormValue({...formValue, name: event.target.value})}} onBlur={()=>{vaildator(formValue, "name")}}/>
                    {errors.nameErrorMessage &&<p className="error">{errors.nameErrorMessage}</p>}
                </div>
                <div className="form-attr">
                    <label>Email:</label>
                    <input type="email" onChange={(event)=> {setFormValue({...formValue, email: event.target.value})}} onBlur={()=>{}}/>
                </div>
                <div className="form-attr">
                    <label>Password:</label>
                    <input type="password" onChange={(event)=> {setFormValue({...formValue, password: event.target.value})}} onBlur={()=>{}}/>
                </div>
                <div className="form-attr">
                    <label>Confirm Password:</label>
                    <input type="password" onChange={(event)=> {setFormValue({...formValue, confirmPassword: event.target.value})}} onBlur={()=>{}}/>
                </div>
                <input type="submit" onClick={handleSubmit} disabled={!(formValue.name.length&&formValue.email.length&&formValue.password.length&&formValue.confirmPassword.length)}/>
            </form>
        </div>
    )
}
export default FormValidation;
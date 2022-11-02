import { useState } from "react";
import "./verification.css";

const AgeVerification = ()=> {
    const [userState, setUserState] = useState({name: "", age: null})
    const [isAlert, setAlert] = useState(false)
   // let isAlert = true;
    const verifyAge = (event)=> {
        //event.stopPropogation()
        //isAlert = false;
        setAlert(true);
        console.log(userState);
    }
    return (       
        <div> 
                {userState?.age && isAlert==true &&  <div className={`alert ${userState.age>=18 ? "success": "failure"}`}>{userState.age>=18 ?"You are eligible": "You are not eligible" }</div>}
                {/* {age ? <div className="alert">"You are eligible"</div>: null} */}
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" onChange={(event)=> {setUserState({...userState, name: event.target.value })}}/>
                </div>
                <div>
                    <label htmlFor="age">Age:</label>
                    <input type="number" onChange={(event)=>{setUserState({...userState, age: event.target.value });setAlert(false)}}/>
                </div>
                <button onClick={verifyAge}>Verify Age</button>
        </div>
    )
}
export default AgeVerification;
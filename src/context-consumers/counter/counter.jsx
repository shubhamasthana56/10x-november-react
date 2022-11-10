import { NotificationContext } from "../../context/context";
import { useContext } from "react";
const Counter = ()=> {
    const {handleCounter} = useContext(NotificationContext);
    return (
        <div>
            <button onClick={()=> {handleCounter("Increment")}}>+</button>
            <button onClick={()=>{handleCounter("Decrement")}}>-</button>
        </div>
    )
}
export default Counter;
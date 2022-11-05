import { NotificationContext } from "../../../context/context";
import { useContext } from "react";
const Delete = (props)=> {
    debugger
    const {notification, count} = useContext(NotificationContext);
    return (
        <div>
               <div>I am comment delete {count}</div>
        <div>{notification}</div>
        </div>
     
    )
}
export default Delete;
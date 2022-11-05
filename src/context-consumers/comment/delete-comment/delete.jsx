import { NotificationContext } from "../../../context/notification-context";
import { useContext } from "react";
const Delete = ()=> {
    const contextData = useContext(NotificationContext);
    return (
        <div>
               <div>I am comment delete</div>
        <div>{contextData?.notification}</div>
        </div>
     
    )
}
export default Delete;
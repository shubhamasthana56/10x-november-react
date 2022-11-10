import { useContext } from "react";
import { NotificationContext } from "../../../context/context";
import "./edit.css";
const Edit = (props)=> {
    const contextData = useContext(NotificationContext)
    //{notification: "",count:"", handleCounter: fn()}
    return (
        <div className={props.theme ? "dark": ""}>I am comment Edit {contextData.count}</div>
    )
}
export default Edit;
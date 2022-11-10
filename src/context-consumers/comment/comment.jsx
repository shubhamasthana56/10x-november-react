import Edit from "./edit-comment/edit";
import Delete from "./delete-comment/delete";
import { ThemeContext } from "../../context/context";
import { useContext } from "react";
const Comment = ()=> {
    const {theme} = useContext(ThemeContext)
    return (
        <>
            <Edit theme={theme}/>
            <Delete theme={theme}/>
            
        </>
    )
}
export default Comment;
import { useContext } from "react";
import { NotificationContext } from "../../context/context";
const Post = ()=> {
    const {count} = useContext(NotificationContext)
    return (
        <div> I am Post component</div>
    )
}
export default Post;
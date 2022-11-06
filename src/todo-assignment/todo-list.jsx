import { EDIT, DELETE } from "./action"
const ToDoList = ({listData, dispatch})=> {
    return (
        <>
            {listData.map((todo, i)=> {
                return (
                        <section key={`${todo.value}-${i}`}>
                            <article>{todo.value}</article>
                            <article>
                                <button onClick={()=> {dispatch({type: EDIT, payload: todo})}}>Edit</button>
                                <button onClick={()=> {dispatch({type: DELETE, payload: todo})}}>Delete</button>
                            </article>
                        </section>
                )
                
            })}
        </>
    )
}
export default ToDoList
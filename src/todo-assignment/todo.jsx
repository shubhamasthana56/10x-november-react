import { set } from "mongoose";
import { useReducer, useState } from "react";
import { ADD, EDIT, DELETE } from "./action";
import ToDoList from "./todo-list";
const ToDo = ()=> {
    const [todo, setTODO] = useState({value: "", order: ""});
    const [isAdd, setAdd] = useState(true);
    const reducer = (state, action)=> {
        switch(action.type) {
            case ADD:
                const updatedState = [...state, {value:todo.value, order: state.length + 1 }];
                setTODO({value: "", order: ""});
                return updatedState;
            case EDIT:
                let updateState = [...state];
                if(isAdd) {
                    setAdd(false);
                    setTODO(action.payload);
                } else {
                    updateState.forEach((st)=> {
                        if(st.order === todo.order) {
                            st.value = todo.value;
                        }
                    })
                    setAdd(true);
                    setTODO({value: "", order: ""});
                }
                 
                return updateState;
            case DELETE:
                let newState = state.filter((st)=> {
                    return st.order !== action.payload.order
                })
                return newState
            default:
                return state
        }
    }
    const [state, dispatch] = useReducer(reducer, []);
    const handleDispatch = ()=> {
        if(isAdd) {
            dispatch({type: ADD})
        } else {
            dispatch({type: EDIT})
        }
    }
    //{value: "", order: ""}
    return (
        <>
            <section className="container">
                <section className="todo">
                    <h3>TODO APP</h3>
                    <section className="todo-input">
                        <input onChange={(e)=> {setTODO({...todo, value:e.target.value})}} value={todo.value}></input>
                       <button onClick={()=> {handleDispatch()}}>{isAdd ? "ADD": "EDIT"} TODO</button>
                    </section>
                </section>
                <ToDoList listData={state} dispatch={dispatch}/>
            </section>
        </>
    )
}
export default ToDo;
import { useReducer, useState } from "react";
import { INCREMENT, DECREMENT, RESET } from "./actions";
const CounterReducer = ()=> {
    // const [count, setCount] = useState();
    // const [countValue, setCountValue] = useState(0);

    // const handleIncrement = (e)=> {
        
    //     setCount((prev)=> {
    //         console.log(prev, "form set 1")
    //         return prev +1
    //     });
    //     setCount((prev)=> {
    //         console.log(prev, "form set 2")
    //         return prev + 1
    //     });
        
    // }
    // const handleDecrement = ()=> {
    //     if(count > 0) {
    //         setCount(count-1)
    //     }
    // }
    // const handleChange = (e)=> {
    //     setCountValue(parseInt(e.target.value));
    // }
    // return (
    //     <div>
    //         <button onClick={(e)=>{handleIncrement(e)}}>+</button>
    //         <div id="count">{count}</div>
    //         <button onClick={handleDecrement}>-</button>
    //         <section>
    //             {/* <input onChange={handleChange} type="number" value={countValue}/>
    //             <button onClick={()=> {setCount(count + countValue)}}>Increment By</button>
    //             <button onClick={()=> {setCount(count - countValue)}}>Decrement By</button> */}
    //         </section>
            
    //     </div>
    // )
    const initialState = {count: 0};
    const reducer = (state,action)=> {
        switch(action.type) {
            case INCREMENT:
                return {...state, count: state.count +1 }
            case DECREMENT: 
                return {...state, count: state.count -1}
            case RESET:
                return initialState
            default:
                return state
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <>
            <button onClick={()=>{dispatch({type: INCREMENT})}}>+</button>
            <button onClick={()=>{dispatch({type: DECREMENT})}}>-</button>
            <button onClick={()=>{dispatch({type: RESET})}}>RESET</button>
            <button onClick={()=>{dispatch({type: "MyOWNACTION"})}}>INVALID</button>
            <div>{state.count}</div>
        </>
    )
}
export default CounterReducer
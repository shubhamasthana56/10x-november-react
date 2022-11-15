import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../redux/reducer/counter-reducer";
const ReduxCounter = ()=> {
    //using the store
    const store = useSelector((store)=> {return store});
    console.log(store)
    const dispatch = useDispatch()
    return (
        <>
            <button onClick={()=>{dispatch(increment())}}>+</button>
            <button onClick={()=>{dispatch(decrement())}}>-</button>
            <div>{store.counter.counter}</div>
        </>
    )
}
export default ReduxCounter;
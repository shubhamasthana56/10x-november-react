import { useState } from "react";
import PerformanceChild from "./performance-child"

const Performance = ()=> {
    const [count, setCount] = useState(0);
    const [value, setValue] = useState({result:"performance testing"})
    return (
    <>
        <PerformanceChild value={value}/>
        <button onClick={()=> {setCount(count + 1)}}>+</button>
        <button onClick={()=> {setCount(count - 1)}}>-</button>
        <button onClick={()=> {setValue({result:"I am changed"})}}>Change prop value</button>
        <div>{count}</div>
    </>
    )
}
export default Performance;
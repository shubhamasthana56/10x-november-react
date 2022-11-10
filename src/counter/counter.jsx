import { useState } from "react";
const Counter = ()=> {
    const [count, setCount] = useState();
    //[0, f()]
    const [countValue, setCountValue] = useState(0);
    
    //let count = 0;

    const handleIncrement = (e)=> {
        // count = count + 1;
        // console.log(count);
        // const countNode = document.getElementById("count");
        // countNode.innerText = count;
        //setCount((1209482839*7284364*26378642*267364)/20*239927423 + 7238974-7238742*)
        //value or cb
        //(state)=> {}
        //(0)=>{}
        setCount((prev)=> {
            console.log(prev, "form set 1")
            return prev +1
        });
        setCount((prev)=> {
            console.log(prev, "form set 2")
            return prev + 1
        });
        
    }
    const handleDecrement = ()=> {
        // count = count - 1;
        // console.log(count);
        if(count > 0) {
            setCount(count-1)
        }
    }
    const handleChange = (e)=> {
        setCountValue(parseInt(e.target.value));
    }
    return (
        <div>
            <button onClick={(e)=>{handleIncrement(e)}}>+</button>
            <div id="count">{count}</div>
            <button onClick={handleDecrement}>-</button>
            <section>
                {/* <input onChange={handleChange} type="number" value={countValue}/>
                <button onClick={()=> {setCount(count + countValue)}}>Increment By</button>
                <button onClick={()=> {setCount(count - countValue)}}>Decrement By</button> */}
            </section>
            
        </div>
    )
}
export default Counter;
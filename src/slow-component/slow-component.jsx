import { useEffect, useState, useMemo, useCallback } from "react";
import ExampleUseCallback from "./example-Callback";
import List from "./list";
import "./slow.css";
const SlowComponent = ()=> {
    const [number, setNumber] = useState(0);
    const [theme, setTheme] = useState(true);
    const slowFunction = (number)=> {
        
        for(let i=0;i<1000000000;i++) {}
        console.log("slow Function")
        return number*number
    }
    const getList = ()=> {
        return [number, number*2, number*3]
    }
    const callbackSlow = useCallback(()=> {
        return slowFunction(number)
    }, [number])
    const memoisedSlow = useMemo(()=> {
        return slowFunction(number);
    }, [number]);
    debugger
    //slowFunction(number);
    // useEffect(()=> {
        
    // })
    return (
        <>
        <input type="number" onChange={(e)=> {setNumber(e.target.value)}}/>
        <button onClick={()=> {setTheme(!theme)}}>Toggle Theme</button>
        <div className={`container ${theme ? "light": "dark"}`}>I am toggle theme</div>
        <List getList={getList} number={number}/>
        <ExampleUseCallback number={number}/>
        </>
    )
}
export default SlowComponent;
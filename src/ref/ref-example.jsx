import { useEffect,useRef } from "react";

const RefExample = ()=> {
   const testRef = useRef(123);
   ///testRef = {current: null}
    debugger
    useEffect(()=> {
        debugger
        console.log(testRef);
    },[])
    return (
        <>
            <div ref={testRef}>I am referrence div</div>
        </>
    )
}
export default RefExample;
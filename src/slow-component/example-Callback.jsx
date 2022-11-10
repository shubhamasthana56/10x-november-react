import { useCallback } from "react"

const ExampleUseCallback = ({number})=> {
    const add = (arg1, arg2)=> {
        console.log("called add")
        return arg1 + arg2
    }
    const addChache = useCallback(()=> {
        return add(number, number + 1)
    }, [number])
    const multiply = (arg1, arg2)=> {
        console.log("called multuply")
        return arg1 * arg2
    }
   addChache()
    multiply(number, number+1);
    return (
        <>
        </>
    )
}
export default ExampleUseCallback;
import { useEffect } from "react";

const Debugging = ()=> {
    debugger
    const data = [{firstName: "Shubham", lastname: "asthana"},{firstName: "Shubham", lastname: "asthana"}];
    const header = Object.keys(data[0]);
    useEffect(()=> {
        debugger
    }, [])

    return (
        <>
        </>
    )
}
export default Debugging
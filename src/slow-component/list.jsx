import { useEffect, useState } from "react";
import HigherOrder from "../higher-order/higher-order";
const List = ({number, getList})=> {
    //2--> double triplet
    const [numbers, setNumbers] = useState([])
    useEffect(()=> {
        setNumbers(getList());
    },[number])
    return (
        <>
            {numbers.map((val,key)=> {
                return <div key={key}>{val}</div>
            })}
        </>
    )
}
export default HigherOrder(List);
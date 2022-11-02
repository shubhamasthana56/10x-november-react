import { useState } from "react";
import Child from "./child";

const Parent = ()=> {
    const [childData, setChildData] = useState([]);
    const data = [{name: "parent"}];
    let d1 = [];
    let d2 = {};
    console.log(d1,d2)
    console.log(childData);
    return (
        <div>
            <div>{childData[0]?.name}</div>
            <Child parentData={data} getData={setChildData} up1={d1} up2={d2}/>
        </div>
    )
}
export default Parent;
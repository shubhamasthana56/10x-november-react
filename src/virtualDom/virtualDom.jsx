import { useState } from "react"

const VirtualDom = ()=> {
    const [value, setValue] = useState(0)
    debugger
    return (
        <div>
            <div>I am fixed div</div>
            <div>{value}</div>
            <button onClick={()=> {setValue(1)}}>Change Value</button>
        </div>
    )

}
export default VirtualDom
//virtual
{/* <div>
<div>I am fixed div</div>
<div>1</div>
<button onClick={()=> {setValue(1)}}>Change Value</button>
</div> */}

//actual
{/* <div>
<div>I am fixed div</div>
<p>Hello</p>
<button onClick={()=> {setValue(1)}}>Change Value</button>
</div> */}
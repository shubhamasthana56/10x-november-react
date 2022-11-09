import React from "react";
const PerformanceChild = (props)=> {
    debugger
    // to memorize props value and update when value is changed
    return (
    <>
    <div>I am data from props and data is {props.value.result}</div>
    </>
    )
}
export default React.memo(PerformanceChild);
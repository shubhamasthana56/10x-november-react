const Child = (props)=> {
    const data = [{name: "child"}];

    props.up2.name = "shubham"
    return (
        <div>
            <button onClick={()=> {props.getData(data)}}>Send Data to parent</button>
        </div>
    )
}
export default Child;
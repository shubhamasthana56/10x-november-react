import { Link } from "react-router-dom"
const Content = ()=> {
    const list = [{key:"CounterReducer", path:"/count"}, {key:"TODO", path:"/todo"}, {key:"RefExample", path:"/ref"}, {key:"FORMExample", path:"/form"}, {key:"SlowComponent", path:"/slow"}, {key:"ClassComponent", path:"/class"}]
    return (
        <>
            <ul>
                {list.map((ele, i)=> {
                    return (
                        <li key={i}>
                            <Link to={ele.path}>{ele.key}</Link>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}
export default Content;
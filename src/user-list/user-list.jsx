import { useState } from "react"

const UserList = ()=> {
    const [isPra, setPara] = useState(false)
    const data = [{firstName: "Shubham", lastName: "Asthana", rating: "5"},{firstName: "Shubham", lastName: "Asthana", rating: "5"},
    {firstName: "Shubham", lastName: "Asthana", rating: "5"},{firstName: "Shubham", lastName: "Asthana", rating: "5"}]
    const tableHeader = ["FirstName", "LastName", "Rating"]
    return (
        <div>
            {/* <table>
               <tr>
                   {tableHeader.map((headerValue, index)=> {
                       return <th key={index}>{headerValue}</th>
                   })}
               </tr>
               {data.map((tableData,index)=> {
                return (
                    <tr key={index}>
                        <td>{tableData.firstName}</td>
                        <td>{tableData.lastName}</td>
                        <td>{tableData.rating}</td>
                    </tr>
                )
               })}
            </table> */}
            {isPra ? <p>I am </p>: null}

        </div>
    )
}
export default UserList
import { useEffect, useState } from "react"
const UserSideEffect = ()=> {
    const [userData, setUserData] = useState([]);
    useEffect(()=> {
        fetch("https://randomuser.me/api/").then((res)=> {
            return res.json()
        }).then((userList)=> {
            console.log(userList, "response from users")
            setUserData(userList.results);
        })
        .catch((error)=> {
            console.log(error);
        })
    }, [])
   
    return (
        <div>
            {userData.map((user,i)=> {
                return (
                    <div key={i}>
                        <img src={user.picture.medium}/>
                        <div>{`${user.name.first} ${user.name.last}`}</div>
                        <div>{user.gender}</div>
                        <div>{user.email}</div>
                    </div>
                )
            })}
        </div>
    )
}
export default UserSideEffect;
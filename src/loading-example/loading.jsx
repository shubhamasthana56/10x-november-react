import { useEffect, useState } from "react"
import loader from "./giphy.gif";

const LoadingExample = ()=> {
    const [age, setAge] = useState(null);
    const [name, setName] = useState("");
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(()=> {
        //make true here
        setIsLoading(true);
        fetch(`https://api.agify.io/?name=${name}`).then((res)=> {
            return res.json()
        }).then((user)=> {
            //store userAge
            setTimeout(()=> {
                //is it right place to setLoader true
                setAge(user.age)
            },500)
        }).catch((err)=> {
            setError(err);
        }).finally(()=> {
            setIsLoading(false)
        })
    }, [name])
    return (
        <div>
            <input onChange={(event)=> {setName(event.target.value)}}/>
            {isLoading && <img src={loader} alt="loader"/>}
            {age && <div>Age:{age}</div>}
            {error && <div>Error: {error}</div>}
        </div>
    )
}
export default LoadingExample
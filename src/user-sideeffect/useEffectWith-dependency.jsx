import { useEffect, useState } from "react";

const CountryInfo = ()=> {
    const [countryInfo, setCountryInfo] = useState({});
    const [zipcode, setZipCode] = useState({zip: ""})

    useEffect(()=> {
        fetch(`https://api.zippopotam.us/us/${zipcode}`).then((res)=> {
            return res.json();
        }).then((country)=> {
            setCountryInfo(country)
        }).catch((error)=> {
            console.log(error)
        })
    },[zipcode.zip])
    return (
        <div>
            <input onChange={(event)=> {setZipCode({...zipcode,zip:event.target.value})}}/>
            <div>{countryInfo.country}</div>
            <div>{countryInfo?.places?.[0]["place name"]}</div>
            <div>{countryInfo?.places?.[0]["state"]}</div>
        </div>
    )
}
export default CountryInfo;
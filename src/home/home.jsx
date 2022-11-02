import Card from "../card/card";
const Home = ()=> {
    const data = [
        {title: "Grocerry", imageUrl: "", description:"Contains grocerry items", buttonText: "More Info"},
        {title: "Electronics", imageUrl: "", description:"Contains electronics items", buttonText: "More Info"},
        {title: "Fashion", imageUrl: "", description:"Contains fashion items", buttonText: "More Info"}
    ]     
    return (
        <div>
            Home Works!
            {data.map((cardData, i)=> {
                return <Card cardData={cardData} key={i}/>
            })}
            {/* <Card cardData={data[0]}/>
            <Card cardData={data[1]}/>
            <Card cardData={data[2]}/> */}
        </div>
    )
}
export default Home;
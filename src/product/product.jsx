import Card from "../card/card";
const Product = ()=> {
    //data
    const data = [{title: "Rice", imageUrl: "", description:"Basmati Rice", buttonText: "BUY NOW", secondaryText:"Add to Cart"},
                  {title: "Red Millet", imageUrl: "", description:"Millet from organic farms", buttonText: "BUY NOW", secondaryText:"Add to Cart"}
]
    return (
        <div>
            <div>
            Product Works
            <Card cardData={data[0]} isAddtoCart={true}/>
            <Card cardData={data[1]} isAddtoCart={true}/>
            </div>
        </div>
    )
}
export default Product;
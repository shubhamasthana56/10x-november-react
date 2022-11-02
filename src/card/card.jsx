const Card = ({cardData, isAddtoCart})=> {
    //props = {cardData: {}}
    return (
        <div className="card-container">
            <section className="title">{cardData?.title}</section>
            <section className="card-image"></section>
            <section className="card-description">{cardData?.description}</section>
            <button className="primary-button">{cardData?.buttonText}</button>
            {isAddtoCart && <button className="secondarButton">{cardData?.secondaryText}</button>}
        </div>
    )
}
export default Card;
function Card({ card, cardOpen }) {
    function handleCardClick() {
        cardOpen(card);
    }

    return (
        <li className="element" >
            <img src={card.link} alt={`${card.name} by ${card.owner.name}`} className="element__photo" onClick = {handleCardClick}/>
            <button type="button" className="element__delete-button"
                    aria-label="Удалить фотографию"></button>
            <div className="element__info">
                <h2 className="element__title">{card.name}</h2>
                <div className="element__like-counter">
                    <button type="button" className="element__like-button"
                            aria-label="Отметить фотографию как понравившуюся"></button>
                    <p className="element__like-number">{card.likes.length}</p>
                </div>
            </div>
        </li>
    );
}

export default Card;
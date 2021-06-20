function ImagePopup(props) {
    return (

        <div className={`popup popup_use_view-full-photo ${props.card.link ? "popup_is-opened" : ""}`}>

            <div className="popup__full-photo-container">
                <img className="popup__full-photo"
                     //src={props.card ? props.card.link : ''} - упростил до:
                     src={props.card?.link}

                     // alt={props.card ? props.card.name : ''}/>  - упростил до:
                     alt={props.card?.name}/>

                <p className="popup__full-photo-title"> {props.card ? props.card.name : ''} </p>
                <button className="close-icon"
                        type="button"
                        id="close-popup-view-full-photo"
                        onClick={props.onClose}
                        aria-label="Закрыть"/>
            </div>
        </div>
    )
}

export default ImagePopup;
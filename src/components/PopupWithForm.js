function PopupWithForm(props) {

    return (
        <div className={`popup popup_type_${props.name} ${props.isOpen && "popup_is-opened"}`}>
        {/*<div className={`popup popup_type_${props.name} ${props.isOpen && "popup__opened"}`}>*/}
            {/*<div className="popup popup_use_edit-profile">*/}


            <div className="popup__content">

                <form
                    className= {'form form_type_${props.name}'}
                    name={props.name}
                    noValidate>

                    <h2 className="form__title">{props.title}</h2>
                    {/*Редактировать профиль*/}

                    <fieldset className="form__container">
                        {props.children}
                        {/* можно и просто {children}, если записать: function PopupWithForm(props, {children})*/}

                    <button type="submit" className="form__submit-button"
                            id="submit-update-avatar-image">{props.buttonText}
                    </button>
                        {/*Сохранить id="submit-profile-info"*/}

                    </fieldset>
                </form>

                <button className="close-icon"
                        type="button"
                        aria-label="Закрыть"
                        onClick = {props.onClose}
                />
                {/*id="close-popup-edit-profile"*/}

            </div>
        </div>
    )
}

export default PopupWithForm;
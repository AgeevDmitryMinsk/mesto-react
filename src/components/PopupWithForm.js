function PopupWithForm(props) {

    return (
        <div className={`popup popup_type_${props.name} ${props.isOpen && "popup_is-opened"}`}>
        {/*<div className={`popup popup_type_${props.name} ${props.isOpen && "popup__opened"}`}>*/}
            {/*<div className="popup popup_use_edit-profile">*/}


            <div className="popup__content">

                <form
                    className= {`form form_type_${props.name}`}
                    name={props.name}
                    // noValidate - Если нет своей валидации, то лучше удалить атрибут noValidate из тега form, чтобы
                    // встроенная валидация работала и не давала отправить пустые данные на сервер. Gennadiy Barsegyan, ревьюер
                >

                    <h2 className="form__title">{props.title}</h2>
                    {/*Редактировать профиль*/}

                    <fieldset className="form__container">
                        {props.children}
                        {/* можно и просто {children}, если записать: function PopupWithForm(props, {children})*/}

                    <button type="submit" className="form__submit-button">{props.buttonText}
                    </button>

                    </fieldset>
                </form>

                <button className="close-icon"
                        type="button"
                        aria-label="Закрыть"
                        onClick = {props.onClose}
                />

            </div>
        </div>
    )
}

export default PopupWithForm;
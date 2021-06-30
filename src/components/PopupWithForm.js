import React from "react";

export default PopupWithForm;

// function PopupWithForm(props) {
function PopupWithForm({isOpen, onClose, onSubmit, name, title, children, buttonText} ) {
    return (
        <div
            className={`popup popup_type_${name} ${
                isOpen && "popup__opened"
            }`}>
            <div className="popup__container">


                <form
                    className={`popup__form form_type_${name}`}
                    name={name}
                    // noValidate - Если нет своей валидации, то лучше удалить атрибут noValidate из тега form, чтобы встроенная
                    // валидация работала и не давала отправить пустые данные на сервер Gennadiy Barsegyan, ревьюер
                    onSubmit={onSubmit}>
                    <h2 className="popup__title">{title}</h2>
                    {children}
                    <button className="popup__button" type="submit">
                        {buttonText}
                    </button>
                </form>

                <button
                    className="popup__close"
                    type="button"
                    onClick={onClose}></button>

            </div>
        </div>
    );
}

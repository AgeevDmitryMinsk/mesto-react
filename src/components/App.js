import React from "react";
import '../index.css';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen]   = React.useState(false);
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false)
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen]       = React.useState(false)
    const [isDeletePlacePopupOpen, setIsDeletePlacePopupOpen] = React.useState(false)
    //const [selectedCard, setSelectedCard]                     = React.useState('') исправил на:
    const [selectedCard, setSelectedCard]                     = React.useState({})
    //Карточка по умолчанию должна быть либо пустым объектом по чек-листу Gennadiy Barsegyan, ревьюер 19/06/21
    const [isImagePopupOpen, setImagePopupOpen]               = React.useState(false);


    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true);
    }

    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true)
    }


    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true)
    }


    function handleDeletePlaceClick() {
        setIsDeletePlacePopupOpen(true)
    }

    function closeAllPopups() {
        setIsDeletePlacePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setIsEditAvatarPopupOpen(false);
        setIsEditProfilePopupOpen(false);
        //setSelectedCard(null) нужно возвращать обратно к данным по умолчанию,
        // а по умолчанию Вы сделали на 15й строчке пустой объект {}- исправил на:
        setSelectedCard({})

        setImagePopupOpen(false)

    }

    function handleCardClick(selectedCard) {
        setSelectedCard(selectedCard)
        setImagePopupOpen(true);
    }


    return (
        <div className="project-area">
            <Header
                // для тестирования:
                testDeletePlaceClick={handleDeletePlaceClick}
                isOpen={isDeletePlacePopupOpen}
            />
            <Main
                onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick}
                onEditAvatar={handleEditAvatarClick}
                onCardClick={handleCardClick}
            />

            <Footer/>


            {/*«Редактировать профиль»*/}
            <PopupWithForm
                title="Редактировать профиль"
                name="profile"
                buttonText="Сохранить профиль"
                isOpen={isEditProfilePopupOpen}
                onClose={closeAllPopups}>
                <input className="form__input" type="text" name="username" id="username" minLength={2}
                       maxLength={40} placeholder="Имя" required/>
                <span className="form__input-error-message username-error"/>
                <input className="form__input" type="text" name="bio" id="bio" minLength={2}
                       maxLength={200} placeholder="О себе" required/>
                <span className="form__input-error-message bio-error"/>
            </PopupWithForm>


            {/*// «Новое место»*/}
            <PopupWithForm
                title="Новое место"
                name="photo"
                buttonText="Создать"
                isOpen={isAddPlacePopupOpen}
                onClose={closeAllPopups}>
                <div className="spinner"><i/></div>
                <input className="form__input" type="text" name="name" id="location-name"
                       placeholder="Название" minLength={2} maxLength={30} required/>
                <span className="form__input-error-message location-name-error"/>
                <input className="form__input" type="url" name="link" id="photo-url"
                       placeholder="Ссылка на картинку" required/>
                <span className="form__input-error-message photo-url-error"/>
            </PopupWithForm>

            <PopupWithForm
                name="avatar"
                title="Обновить аватар"
                buttonText="Сохранить"
                isOpen={isEditAvatarPopupOpen}
                onClose={closeAllPopups}>

                <input className="form__input" type="url" name="link" id="avatar-image-url"
                       placeholder="Ссылка на фотографию аватарки" required/>
                <span className="form__input-error-message avatar-image-url-error"/>
            </PopupWithForm>


            {/*для тестирования:*/}
            «Вы уверены?»
            <PopupWithForm
                name="remove-card"
                title="Вы точно уверены?"
                buttonText="Да-а!"
                isOpen={isDeletePlacePopupOpen}
                onClose={closeAllPopups}>
            </PopupWithForm>

            <ImagePopup
                card={selectedCard}
                onClose={closeAllPopups}
                isOpen={isImagePopupOpen}
            />

        </div>
    );
}

export default App;

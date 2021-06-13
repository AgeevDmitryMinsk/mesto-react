import avatar from "../images/avatar.png";


function Main() {

    function handleEditAvatarClick(){

    }

    function handleEditProfileClick(){
        
    }
    
    function handleAddPlaceClick() {
        
    }

    return (
        <main className="content project-area__section-position">
            <section className="profile">
                <div className="profile__all-user-info">
                    <div className="profile__avatar">
                        <img src={avatar} alt="Фотография профиля" className="profile__avatar-image"/>
                        {/*<img src="#" alt="Фотография профиля" className="profile__avatar-image" />*/}
                        <div className="profile__avatar-edit-button"/>
                    </div>
                    <div className="profile__info">
                        <div className="profile__username-editing">
                            <h1 className="profile__username">Жак-Ив Кусто </h1>
                            <button type="button" id="edit-profile" className="profile__edit-button"
                                    aria-label="Редактировать профиль"/>
                        </div>
                        <p className="profile__bio"> Исследователь океана</p>
                    </div>
                </div>
                <button type="button" className="profile__add-button" id="add-element" aria-label="Добавить место"/>
            </section>
            <ul className="elements">
            </ul>
            <div className="popup popup_use_edit-profile">
                <div className="popup__content">
                    <form className="form form_function_edit-profile" name="Edit-profile-form" noValidate>
                        <h2 className="form__title">Редактировать профиль</h2>
                        <fieldset className="form__container">
                            <input className="form__input" type="text" name="username" id="username" minLength={2}
                                   maxLength={40} required/>
                            <span className="form__input-error-message username-error"/>
                            <input className="form__input" type="text" name="bio" id="bio" minLength={2}
                                   maxLength={200} required/>
                            <span className="form__input-error-message bio-error"/>
                            <button type="submit" className="form__submit-button"
                                    id="submit-profile-info">Сохранить
                            </button>
                        </fieldset>
                    </form>
                    <button type="button" className="close-icon" id="close-popup-edit-profile"
                            aria-label="Закрыть"/>
                </div>
            </div>
            <div className="popup popup_use_add-photo">
                <div className="popup__content">
                    <form className="form form_function_add-photo" name="Add-new-location-photo" noValidate>
                        <h2 className="form__title">Новое место</h2>
                        <fieldset className="form__container">
                            <div className="spinner"><i/></div>
                            <input className="form__input" type="text" name="name" id="location-name"
                                   placeholder="Название" minLength={2} maxLength={30} required/>
                            <span className="form__input-error-message location-name-error"/>
                            <input className="form__input" type="url" name="link" id="photo-url"
                                   placeholder="Ссылка на картинку" required/>
                            <span className="form__input-error-message photo-url-error"/>
                            <button type="submit" className="form__submit-button" id="submit-photo-info">Создать
                            </button>
                        </fieldset>
                    </form>
                    <button type="button" className="close-icon" id="close-popup-add-photo" aria-label="Закрыть"/>
                </div>
            </div>
            <div className="popup popup_use_update-avatar-image">
                <div className="popup__content">
                    <form className="form form_function_update-avatar-image" name="Update-avatar-image" noValidate>
                        <h2 className="form__title">Обновить аватар</h2>
                        <fieldset className="form__container">
                            <input className="form__input" type="url" name="link" id="avatar-image-url"
                                   placeholder="Ссылка на фотографию" required/>
                            <span className="form__input-error-message avatar-image-url-error"/>
                            <button type="submit" className="form__submit-button"
                                    id="submit-update-avatar-image">Сохранить
                            </button>
                        </fieldset>
                    </form>
                    <button type="button" className="close-icon" id="close-popup-update-avatar-image"
                            aria-label="Закрыть"/>
                </div>
            </div>
            <div className="popup popup_use_view-full-photo">
                <div className="popup__full-photo-container">
                    <img className="popup__full-photo" src="#" alt="#"/>
                    <p className="popup__full-photo-title"/>
                    <button type="button" className="close-icon" id="close-popup-view-full-photo"
                            aria-label="Закрыть"/>
                </div>
            </div>
            <div className="popup popup_use_confirm-remove-photo">
                <div className="popup__content">
                    <form className="form form_function_confirm-remove-photo" name="Confirm-remove-photo"
                          noValidate>
                        <h2 className="form__title">Вы уверены?</h2>
                        <fieldset className="form__container form__container_content_submit-button-only">
                            <button type="submit" className="form__submit-button"
                                    id="submit-confirm-remove-photo">Да
                            </button>
                        </fieldset>
                    </form>
                    <button type="button" className="close-icon" id="close-popup-confirm-remove-photo"
                            aria-label="Закрыть"/>
                </div>
            </div>
        </main>
    )
}

export default Main;
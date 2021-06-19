import {useEffect, useState} from "react";
import api from "../utils/api";
import Card from './Card.js';

// import { Spinner } from './Spinner.js';


function Main(props) {
    const {onEditProfile, onAddPlace, onEditAvatar, onCardClick} = props;
    const [userName, setUserName]                                = useState('')
    const [userDescription, setUserDescription]                  = useState('')
    const [userAvatar, setUserAvatar]                            = useState('')
    // const [isLoading, setIsLoading] = useState(false);
    const [cards, setCards]                                      = useState([]);

    useEffect(() => {
        // setIsLoading(true);
        const promises = [api.getUserData(), api.getInitialCards()];
        Promise.all(promises)
            .then(([userData, cardsData]) => {
                setUserName(userData.name);
                setUserDescription(userData.about);
                setUserAvatar(userData.avatar);
                setCards(cardsData);
            })
            .catch(err => {
                console.log(`Невозможно загрузить данные с сервера. Ошибка ${err}`);
            })
            .finally(() => {
                // setIsLoading(false);
            });
    }, []);

    return (
            <main className="content project-area__section-position">
                <section className="profile">
                    <div className="profile__all-user-info">
                        <div className="profile__avatar">
                            <img src={userAvatar} alt="Фотография профиля" className="profile__avatar-image"/>
                            {/*<img src="#" alt="Фотография профиля" className="profile__avatar-image" />*/}
                            <div className="profile__avatar-edit-button" onClick={onEditAvatar}/>
                        </div>
                        <div className="profile__info">
                            <div className="profile__username-editing">
                                <h1 className="profile__username">{userName} </h1>
                                <button type="button" id="edit-profile" className="profile__edit-button"
                                        onClick={onEditProfile}
                                        aria-label="Редактировать профиль"/>
                            </div>
                            <p className="profile__bio"> {userDescription}</p>
                        </div>
                    </div>
                    <button type="button" className="profile__add-button" id="add-element"
                            onClick={onAddPlace}

                            aria-label="Добавить место"/>
                </section>

                <ul className="elements">
                    {cards.map((card) => (
                        <Card
                            key={card._id}
                            card={card}
                            cardOpen={onCardClick}

                        />
                    ))}


                </ul>

            </main>
    )
}

export default Main;
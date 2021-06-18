class Api {
    constructor(options) {
        this._url     = options.url;
        this._headers = options.headers
    }

    _getResponseData(result) {
        if (!result.ok) {
            return Promise.reject(`Ошибка: ${result.status}`);
        }
        return result.json();
    }

    getInitialCards() {
        return fetch(`${this._url}cards`, {
            headers: this._headers,
        })
            .then(result => this._getResponseData(result)
            );
    }

    addNewCard(newPhotoName, newPhotoURL) {
        return fetch(`${this._url}cards`, {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify({name: newPhotoName, link: newPhotoURL}),
        })
            .then(result => this._getResponseData(result)
            );
    }

    deleteCard(id) {
        return fetch(`${this._url}cards/${id}`, {
            method: "DELETE",
            headers: this._headers,
        })
            .then(result => this._getResponseData(result)
            );
    }

    likeCard(id) {
        return fetch(`${this._url}cards/likes/${id}`, {
            method: "PUT",
            headers: this._headers,
        })
            .then(result => this._getResponseData(result)
            );
    }

    dislikeCard(id) {
        return fetch(`${this._url}cards/likes/${id}`, {
            method: "DELETE",
            headers: this._headers,
        })
            .then(result => this._getResponseData(result)
            );
    }

    updateAvatarPhoto(avatarURL) {
        return fetch(`${this._url}users/me/avatar`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({avatar: avatarURL})
        })
            .then(result => this._getResponseData(result)
            );

    }

    getUserData() {
        return fetch(`${this._url}users/me/`, {
            method: "GET",
            headers: this._headers,
        })
            .then(result => this._getResponseData(result)
            );
    }

    updateUserData(newUsername, newBio) {
        return fetch(`${this._url}users/me/`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({name: newUsername, about: newBio})
        })
            .then(result => this._getResponseData(result)
            );
    }

    getDataForPageRender() {
        return Promise.all([this.getInitialCards(), this.getUserData()])
    }

    getCardInfo(id) {
        return fetch(`${this._url}cards/likes/${id}`, {
            method: "GET",
            headers: this._headers,
        })
            .then(result => this._getResponseData(result)
            );
    }
}

const api = new Api({
    url: 'https://mesto.nomoreparties.co/v1/cohort-24/', // Идентификатор группы: cohort-24 by Nasy126@mail.ru Анастасия Житкова
    headers: {
        authorization: 'f00e309e-31f2-4bad-9fcd-5ea849544e69', // Токен by Nasy126@mail.ru Анастасия Житкова
        'Content-type': 'application/json',
    }
})

export default api;
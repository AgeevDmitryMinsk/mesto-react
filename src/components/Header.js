import headerLogo from "../images/logo.svg";

// //для тестирования:
// function handleDeletePlaceClick() {
//     document.querySelector('.header__logo').addEventListener('click', document.querySelector('.popup_type_remove-card').classList.add('popup_is-opened'))
// }

function Header(props) {
    // для тестирования:
    const {testDeletePlaceClick} = props;


    return (
        <header className="header project-area__section-position">
            <img src={headerLogo} alt="Лого проекта Mesto Russia" className="header__logo"
            onClick={testDeletePlaceClick}/>
        </header>

    )
}

export default Header;

import headerLogo from "../images/logo.svg";


function Header() {
    return (
        <header className="header project-area__section-position">
            <img src={headerLogo} alt="Лого проекта Mesto Russia" className="header__logo"/>
        </header>

    )
}

export default Header;

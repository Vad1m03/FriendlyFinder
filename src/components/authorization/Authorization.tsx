import "./Authorization.scss";


const Authorization = () => {

    return (
        <div className="authorization">
            <form className="authorization__form">
                <div className="authorization__close">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 8.78572L18.7857 0L19.9986 1.21286L11.2129 9.99857L20 18.7857L18.7857 20L10 11.2129L1.21429 20L0 18.7857L8.78572 10L0 1.21286L1.21286 0L9.99857 8.78572H10Z" fill="white" />
                    </svg>
                </div>
                <p className="authorization__title">Авторизация</p>
                <div className="authorization__input">
                    <input className="input__item" type="text" placeholder="Логин" />
                    <input className="input__item" type="text" placeholder="Пароль" />
                </div>
                <a href="#" className="authorization__button"><p>Войти</p></a>
                <a href="#" className="registration__link"><p className="registration__title__link">Зарегистрироваться</p></a>
            </form>
        </div>
    );
};

export default Authorization;
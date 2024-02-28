import "./Header.scss";

import { Link } from 'react-router-dom';
import { useState } from 'react';

// import Authorization from "../authorization/Authorization";
import UsuallyButton from "../UI/buttons/usuallyButton/UsuallyButton";
import ModalCenter from "../UI/modals/modalCenter/ModalCenter";

import logoImg from "./../../assets/images/logo.png";


const Header = () => {
    const [showRegistrationForm, setShowAuthorizationForm] = useState(false);
    console.log(showRegistrationForm);

    const modal = showRegistrationForm
        ? <ModalCenter></ModalCenter>
        : null;

    return (
        <div className="header">
            <div className="header__container container">
                <div className="header__row">
                    <div className="header__logo">
                        <Link to="/">
                            <img className="logo" src={logoImg} alt="logo" />
                        </Link>
                    </div>
                    <div className="search__box">
                        <input className="search__input" type="text" placeholder="Искать здесь..." />
                        <button className="search__button">
                            <a href="#">
                                <svg className="search__icon" width="30" height="30" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.8182 24.6364C19.3452 24.6364 24.6364 19.3452 24.6364 12.8182C24.6364 6.29118 19.3452 1 12.8182 1C6.29118 1 1 6.29118 1 12.8182C1 19.3452 6.29118 24.6364 12.8182 24.6364Z" stroke="black" strokeWidth="2" strokeLinejoin="round" />
                                    <path d="M29.4481 30.7336C29.8032 31.0885 30.3788 31.0885 30.7339 30.7336C31.0888 30.3785 31.0888 29.8029 30.7339 29.4478L29.4481 30.7336ZM30.7339 29.4478L21.643 20.3569L20.3572 21.6427L29.4481 30.7336L30.7339 29.4478Z" fill="black" />
                                </svg>
                            </a>
                        </button>
                    </div>
                    <nav className="nav">
                        <ul>
                            <li>
                                <Link to="/rooms">
                                    <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M18.3214 20H8.8207C8.4461 20 8.14208 19.68 8.14208 19.2857V17.8571C8.14208 15.5514 9.43961 13.5643 11.3092 12.6607C10.615 12.0071 10.1779 11.0564 10.1779 10C10.1779 8.02857 11.698 6.42857 13.571 6.42857C15.444 6.42857 16.9641 8.02857 16.9641 10C16.9641 11.0564 16.5271 12.0071 15.8329 12.6607C17.7025 13.5643 19 15.5514 19 17.8571V19.2857C19 19.68 18.696 20 18.3214 20ZM12.8938 4.28571V1.42857H4.07036V18.5714H6.10758C6.48218 18.5714 6.7862 18.8914 6.7862 19.2857C6.7862 19.68 6.48218 20 6.10758 20H0.677263C0.303344 19.9993 0 19.6793 0 19.2857C0 18.8921 0.303344 18.5721 0.677263 18.5714H2.71448C2.71448 18.5714 2.71312 4.12286 2.71312 0.714286C2.71312 0.525 2.78438 0.342857 2.91196 0.209286C3.03886 0.075 3.21191 0 3.39174 0H13.571C13.9456 0 14.2497 0.319286 14.2497 0.714286C14.2503 1.93 14.251 4.27357 14.251 4.28571C14.251 4.68 13.947 5 13.5724 5C13.1978 5 12.8938 4.68 12.8938 4.28571ZM13.4659 13.5729C11.2658 13.6314 9.49932 15.5271 9.49932 17.8571V18.5714H17.6428V17.8571C17.6428 15.49 15.82 13.5714 13.571 13.5714L13.4659 13.5729ZM13.571 7.85714C14.6948 7.85714 15.6069 8.81714 15.6069 10C15.6069 11.1829 14.6948 12.1429 13.571 12.1429C12.4472 12.1429 11.5352 11.1829 11.5352 10C11.5352 8.81714 12.4472 7.85714 13.571 7.85714Z" fill="white" />
                                    </svg>
                                    <p className="link__item">Комнаты</p>
                                </Link>
                            </li>
                            <li>
                                <a href="#">
                                    <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.93249 8.32053C8.54703 8.32053 9.85588 6.68177 9.85588 4.66026C9.85588 2.63876 8.54703 1 6.93249 1C5.31794 1 4.00909 2.63876 4.00909 4.66026C4.00909 6.68177 5.31794 8.32053 6.93249 8.32053Z" stroke="white" strokeWidth="1.3" />
                                        <path d="M12.8376 18C12.8376 17.0267 12.6844 16.063 12.3868 15.1639C12.0892 14.2647 11.6531 13.4478 11.1032 12.7598C10.5534 12.0719 9.90064 11.5263 9.18233 11.1543C8.46401 10.7823 7.69419 10.5911 6.91685 10.5917C5.3476 10.5917 3.84263 11.3723 2.73301 12.7616C1.62338 14.1509 1 16.0352 1 18H12.8376Z" stroke="white" strokeWidth="1.3" />
                                        <path d="M15.2238 9.87529C16.5245 9.87529 17.5789 8.55512 17.5789 6.92661C17.5789 5.2981 16.5245 3.97793 15.2238 3.97793C13.9232 3.97793 12.8688 5.2981 12.8688 6.92661C12.8688 8.55512 13.9232 9.87529 15.2238 9.87529Z" stroke="white" strokeWidth="1.3" />
                                        <path d="M14.5503 18H20C20 17.2154 19.8764 16.4384 19.6362 15.7137C19.396 14.989 19.044 14.3307 18.6003 13.7765C18.1567 13.2224 17.63 12.7832 17.0506 12.4843C16.4712 12.1854 15.8504 12.0325 15.2237 12.0344C14.4432 12.0331 13.6745 12.2725 12.9854 12.7314" stroke="white" strokeWidth="1.3" />
                                    </svg>
                                    <p className="link__item">Друзья</p>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.9953 13.9125C16.2367 13.0237 15.198 11.7647 15.198 10.4801V6.39003C15.198 2.86681 12.4634 0 8.96831 0C5.47255 0 2.7594 2.86681 2.7594 6.39003V10.4801C2.7594 11.7428 1.63228 12.936 0.917918 13.8624C0.275057 14.6942 -0.232602 15.3519 0.110604 16.0089C0.411559 16.587 1.16622 16.6609 1.78958 16.6609H5.51415C5.51545 18.5049 7.06703 20 8.98066 20C10.8943 20 12.4472 18.5055 12.4478 16.6609H16.2595C16.656 16.6609 17.5829 16.6609 17.9021 16.0108C18.2238 15.3531 17.709 14.7487 16.9953 13.9125ZM8.98001 18.6878C7.81779 18.6878 6.87462 17.7808 6.87332 16.6616H11.0867C11.0847 17.7808 10.1429 18.6878 8.98001 18.6878ZM16.2595 15.3274H1.78893C1.68948 15.3274 1.60628 15.3243 1.53803 15.3199C1.67193 15.1201 1.86823 14.8646 2.02879 14.6572C2.8205 13.6319 4.14457 12.1838 4.14457 10.4801V6.39003C4.14457 3.60152 6.23761 1.3335 8.96961 1.3335C11.7016 1.3335 13.8154 3.60214 13.8154 6.39003V10.4801C13.8154 12.242 15.0362 13.7146 15.9273 14.7593C16.0775 14.9353 16.2569 15.1458 16.3966 15.3262C16.355 15.3274 16.3095 15.3281 16.2608 15.3281L16.2595 15.3274Z" fill="white" />
                                    </svg>
                                    <p className="link__item">Уведомления</p>
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <UsuallyButton onClick={() => setShowAuthorizationForm(true)}>
                        <p>Войти</p>
                    </UsuallyButton>
                    {/* <div className="button__open" style={{ marginTop: '300px' }}>
                        <a href="#" className="button__open__text" onClick={() => setShowAuthorizationForm(true)} >Войти</a>
                        {showRegistrationForm && <Authorization />}
                    </div> */}
                </div>
                {modal}
            </div>
        </div >
    );
};

export default Header;
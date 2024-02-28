import "../footer/Footer.scss";
import friendsLogo from "../../assets/images/friends_logo.png";

const Footer = () => {

    return (
        <footer className="footer">
            <div className="footer__container container">
                <div className="footer__wrapper">
                    <div className="footer__logo">
                        <img src={friendsLogo} alt="friends" />
                    </div>
                    <div className="footer__row">
                        <div className="footer__box">
                            <div className="footer__links">
                                <a href="#">
                                    <p>Войти</p>
                                </a>
                                <a href="#">
                                    <p>Главная</p>
                                </a>
                                <a href="#">
                                    <p>Друзья</p>
                                </a>
                                <a href="#">
                                    <p>Категории</p>
                                </a>
                            </div>
                            <div className="footer__copyright">
                                <p>© 2024 FriendlyFinder. Все права защищены.</p>
                            </div>
                        </div>
                        <div className="footer__social__network">
                            <p>Подписаться на нас</p>
                            <div className="social__network__item">
                                <a href="#">
                                    <svg width="41" height="38" viewBox="0 0 41 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.186 0C9.03419 0 0 8.46615 0 18.914C0 29.3618 9.03549 37.828 20.186 37.828C31.3377 37.828 40.3719 29.3618 40.3719 18.914C40.3719 8.46615 31.3364 0 20.186 0ZM30.1005 12.9579L26.7874 27.5864C26.5426 28.6236 25.8836 28.875 24.9642 28.3869L19.9177 24.9018L17.4836 27.0983C17.2154 27.3496 16.9875 27.5632 16.4665 27.5632L16.8247 22.7505L26.1766 14.8335C26.5843 14.4979 26.0868 14.3075 25.5489 14.6431L13.9908 21.4607L9.00945 20.0037C7.92722 19.684 7.90248 18.9896 9.23735 18.5015L28.6992 11.4692C29.603 11.1641 30.3922 11.6754 30.0992 12.9567L30.1005 12.9579Z" fill="white" />
                                    </svg>
                                </a>
                                <a href="#">
                                    <svg width="39" height="33" viewBox="0 0 39 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M38.9111 4.52079C37.505 5.14974 35.9793 5.56904 34.3937 5.76372C36.0242 4.79034 37.2657 3.2479 37.8491 1.40597C36.3233 2.30447 34.648 2.96338 32.853 3.32278C31.417 1.79532 29.3677 0.836914 27.1089 0.836914C22.771 0.836914 19.2408 4.37104 19.2408 8.71381C19.2408 9.32779 19.3007 9.9268 19.4503 10.5108C12.9134 10.1814 7.10958 7.05158 3.23535 2.27452C2.56222 3.44258 2.17331 4.79034 2.17331 6.24292C2.17331 8.96839 3.56444 11.3794 5.67357 12.802C4.38715 12.7571 3.17552 12.3977 2.11347 11.8137V11.9035C2.11347 15.7222 4.82094 18.9118 8.42592 19.6307C7.76775 19.8104 7.0647 19.9152 6.3467 19.9152C5.83811 19.9152 5.34449 19.8703 4.86582 19.7804C5.86803 22.9102 8.76996 25.1864 12.2104 25.2463C9.51788 27.3578 6.12232 28.6157 2.44256 28.6157C1.81431 28.6157 1.18605 28.5858 0.5578 28.5109C4.04311 30.7422 8.17162 32.045 12.6143 32.045C27.094 32.045 35.007 20.035 35.007 9.62729C35.007 9.28286 35.007 8.93844 34.992 8.60899C36.5327 7.48585 37.864 6.10815 38.9111 4.52079Z" fill="white" />
                                    </svg>
                                </a>
                                <a href="#">
                                    <svg width="41" height="38" viewBox="0 0 41 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M40.4686 18.797C40.4214 15.1704 39.2758 11.632 37.1668 8.59862C35.0578 5.56522 32.0735 3.1631 28.5651 1.67519C25.0564 0.18727 21.17 -0.324473 17.3633 0.200188C13.5567 0.724873 9.98835 2.2641 7.07854 4.63667C4.1687 7.00922 2.03859 10.1163 0.939056 13.5919C-0.160454 17.0675 -0.183618 20.7669 0.87234 24.2546C1.9283 27.7423 4.01937 30.8726 6.89931 33.2774C9.77922 35.6822 13.3281 37.2611 17.1279 37.828V24.3398H12.0813V18.797H17.1279V14.5864C17.0111 13.6074 17.1236 12.6161 17.4577 11.6825C17.7918 10.7489 18.3391 9.89587 19.061 9.18351C19.7829 8.47113 20.6618 7.91683 21.6358 7.55974C22.6098 7.20262 23.6552 7.0514 24.6979 7.11677C26.2113 7.1363 27.7213 7.26355 29.2146 7.49739V12.2551H26.6913C26.2563 12.2034 25.8142 12.2445 25.3983 12.3754C24.9822 12.5063 24.6027 12.7237 24.2878 13.0114C23.9729 13.2992 23.7307 13.65 23.579 14.0378C23.4271 14.4258 23.3698 14.8409 23.411 15.2525V18.8446H29.0127L28.1043 24.3873H23.4362V37.709C28.205 36.998 32.5456 34.6991 35.6705 31.2292C38.7954 27.7594 40.4976 23.3487 40.4686 18.797Z" fill="white" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
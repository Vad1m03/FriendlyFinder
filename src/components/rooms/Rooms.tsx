import "../rooms/Rooms.scss";

const Rooms = () => {

    return (
        <div className="rooms">
            <div className=".rooms__container container">
                <div className="rooms__block">
                    <h1>Список комнат</h1>
                    <div className="rooms__list">
                        <div className="rooms__item">
                            <div className="rooms__title">
                                <p>Название / уникальный код</p>
                            </div>
                            <div className="rooms__img">
                                <p>NON IMAGE</p>
                            </div>
                            <div className="rooms__group">
                                <div className="group__item">
                                    <svg width="28" height="35" viewBox="0 0 28 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14 0C10.1354 0 7 3.35938 7 7.5C7 11.6406 10.1354 15 14 15C17.8646 15 21 11.6406 21 7.5C21 3.35938 17.8646 0 14 0ZM10.5 17.5C4.6849 17.5 0 22.5195 0 28.75V30C0 32.7734 2.07812 35 4.66667 35H23.3333C25.9219 35 28 32.7734 28 30V28.75C28 22.5195 23.3151 17.5 17.5 17.5H10.5Z" fill="#2E3436" />
                                    </svg>
                                </div>
                                <div className="group__item">
                                    <svg width="28" height="35" viewBox="0 0 28 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14 0C10.1354 0 7 3.35938 7 7.5C7 11.6406 10.1354 15 14 15C17.8646 15 21 11.6406 21 7.5C21 3.35938 17.8646 0 14 0ZM10.5 17.5C4.6849 17.5 0 22.5195 0 28.75V30C0 32.7734 2.07812 35 4.66667 35H23.3333C25.9219 35 28 32.7734 28 30V28.75C28 22.5195 23.3151 17.5 17.5 17.5H10.5Z" fill="#2E3436" />
                                    </svg>
                                </div>
                                <div className="group__item">
                                    <svg width="28" height="35" viewBox="0 0 28 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14 0C10.1354 0 7 3.35938 7 7.5C7 11.6406 10.1354 15 14 15C17.8646 15 21 11.6406 21 7.5C21 3.35938 17.8646 0 14 0ZM10.5 17.5C4.6849 17.5 0 22.5195 0 28.75V30C0 32.7734 2.07812 35 4.66667 35H23.3333C25.9219 35 28 32.7734 28 30V28.75C28 22.5195 23.3151 17.5 17.5 17.5H10.5Z" fill="#2E3436" />
                                    </svg>
                                </div>
                                <div className="group__item">
                                    <svg width="28" height="35" viewBox="0 0 28 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14 0C10.1354 0 7 3.35938 7 7.5C7 11.6406 10.1354 15 14 15C17.8646 15 21 11.6406 21 7.5C21 3.35938 17.8646 0 14 0ZM10.5 17.5C4.6849 17.5 0 22.5195 0 28.75V30C0 32.7734 2.07812 35 4.66667 35H23.3333C25.9219 35 28 32.7734 28 30V28.75C28 22.5195 23.3151 17.5 17.5 17.5H10.5Z" fill="#2E3436" />
                                    </svg>
                                </div>
                            </div>
                            <div className="rooms__date">
                                <p>Дата создания / теги</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Rooms;
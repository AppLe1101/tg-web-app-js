import React from 'react';
import Button from "../Buttons/Buttons";

const Header = () => {
    const tg = window.Telegram.WebApp;
    const onClose = () => {
        tg.close();
    }
    return (
        <div className={"Header"}>
            <Button onClick={onClose}>Close</Button>
            <span className={'username'}>
                {tg.initDataUnsafe?.user?.first_name}
            </span>
        </div>
    );
};

export default Header;
import React from 'react';
import Button from "../Buttons/Buttons";
import {useTelegram} from "../../hooks/useTelegram";

const Header = () => {
    const {tg, user} = useTelegram();

    const onClose = () => {
        tg.close();
    }
    return (
        <div className={"Header"}>
            <Button onClick={onClose}>Close</Button>
            <span className={'username'}>
                {user?.username}
            </span>
        </div>
    );
};

export default Header;
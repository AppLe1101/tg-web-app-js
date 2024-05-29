import React from 'react';
import Button from "../Buttons/Buttons";
import {useTelegram} from "../../hooks/useTelegram";
import {Rank} from "../../hooks/updateRank";
import './Header.css';

const Header = () => {
    const {tg, user} = useTelegram();
    const {currentRankIndex} = Rank();

    const onClose = () => {
        tg.close();
    }
    /*let coinsPerClick = 1;
    let autoEarningPerSeconds = 0;*/



    return (
        <div className={"Header"}>
            <Button onClick={onClose}>Close</Button>
            <span className={'username'}>
                {user?.first_name}
            </span>
            <span className={'rank'} id={'rank'}>
                {currentRankIndex}
            </span>
        </div>
    );
};

export default Header;
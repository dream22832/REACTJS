import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import {Navigate} from "react-router";

const Header = (props) => {


    return (
            <header className={s.header}>
                <img src='https://cdn.icon-icons.com/icons2/790/PNG/512/twitter_icon-icons.com_65436.png' />


                <div className={s.loginBlock}>
                    {props.isAuth ?
                        <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                    : <NavLink to={'/login'}>Login</NavLink>}
                </div>
            </header>
    )
}

export default Header;
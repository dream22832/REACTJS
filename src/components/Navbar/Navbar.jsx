import React from "react";
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';


const Navbar = () => {
    return (
        <nav className={s.nav}>

            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/profile" style={({isActive}) => ({color: isActive ? 'var(--color-active)' : 'white'})}>Profile</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/dialogs" style={({isActive}) => ({color: isActive ? 'var(--color-active)' : 'white'})}>Messages</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to='/news' style={({isActive}) => ({color: isActive ? 'var(--color-active)' : 'white'})}>News</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to='/music' style={({isActive}) => ({color: isActive ? 'var(--color-active)' : 'white'})}>Music</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to='/settings' style={({isActive}) => ({color: isActive ? 'var(--color-active)' : 'white'})}>Settings</NavLink>
            </div>
                <div className={`${s.item} ${s.active}`}>
                    <NavLink to='/friends' style={({isActive}) => ({color: isActive ? 'var(--color-active)' : 'white'})}>Friends</NavLink>
                </div>
                <div className={`${s.users} ${s.active}`}>
                    <NavLink to='/users' style={({isActive}) => ({color: isActive ? 'var(--color-active)' : 'white'})}>Users</NavLink>
                </div>
        </nav>)
}

export default Navbar;
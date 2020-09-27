import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {


    return (
        <>
            <div className="menu_style">
                <NavLink exact activeClassName="active_class" to="/">Home</NavLink>
                <NavLink exact activeClassName="active_class" to="/about">ABout Us</NavLink>
                <NavLink exact activeClassName="active_class" to="/service">Services</NavLink>
                <NavLink exact activeClassName="active_class" to="/search">Search</NavLink>
                <NavLink exact activeClassName="active_class" to="/user/Sudarshan">User</NavLink>

                <NavLink exact activeClassName="active_class" to="/contact">Contact</NavLink>
                <NavLink exact activeClassName="active_class" to="/contact/name">Name</NavLink>
            </div>

        </>

    );

}
export default Menu;
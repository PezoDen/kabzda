import React from "react";
import classes from './Navbar.module.css'

export function Navbar() {
    return (
        <nav className={classes.nav}>
            <a href={'/profile'} className={`${classes.item} ${classes.active}`} rel="noopener">Profile</a>
            <a href={'/dialogs'} className={`${classes.item} ${classes.active}`} rel="noopener">Messages</a>
            <a href={'#a'} className={`${classes.item} ${classes.active}`} rel="noopener">News</a>
            <a href={'#a'} className={`${classes.item} ${classes.active}`} rel="noopener">Music</a>
            <a href={'#a'} className={`${classes.item} ${classes.active}`} rel="noopener">Settings</a>
        </nav>
    )
}
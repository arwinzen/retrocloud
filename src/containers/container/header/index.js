import React from 'react';
import knight from '../../../assets/images/theknight.png'

import classes from "./header.module.css";

class Header extends React.Component {
    render(){
        return (
            <div className={classes.headerWrapper}>
                <header>
                    <input placeholder="Search by Title" autoComplete="false"/>
                    <div className={classes.accountInfo}>
                        <p className={classes.accountName}>Anon</p>
                        <img className={classes.avatar} src={knight} alt="" />
                    </div>
                </header>
            </div>
        );
    }
}

export default Header;
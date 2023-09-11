import React from 'react';
import styles from './header.module.css'
import logo from './logo.svg'

function Header(props) {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.inner}>
                    <a className={styles.logo} href="/">
                        <img src={logo} alt="logo"/>
                        <span className={styles.text}>TimeKeeper</span>
                    </a>
                    <a className={styles.link_git} href="#">
                        Github
                    </a>
                </div>
            </div>
        </header>
    );
}

export default Header;
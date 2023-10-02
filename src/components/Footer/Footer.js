import React from 'react';
import styles from './footer.module.css';
import logo from './logo.svg';
import github from './github.svg';

function Footer(props) {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.inner}>
                    <div className={styles.left_box}>
                        <div>
                            <a href="https://chocopie777.github.io/timekeeper/" className={styles.logo}>
                                <img src={logo} alt="logo"/>
                                <span className={styles.text}>TimeKeeper</span>
                            </a>
                            <p className={styles.sub_text}>Organize your future plans</p>
                        </div>
                        <div className={styles.copy}>
                            <p className={styles.text_copy}>Developed by Egor
                                Bardin. Designed by Ahmed Rafiullah.</p>
                        </div>
                    </div>
                    <div className={styles.right_box}>
                        <a href="https://github.com/chocopie777/timekeeper">
                            <img src={github} alt="github"/>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
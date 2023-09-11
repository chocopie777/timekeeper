import React from 'react';
import styles from './footer.module.css';
import logo from './logo.svg'

function Footer(props) {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.inner}>
                    <div className={styles.left_box}>
                        <a href="/" className={styles.logo}>
                            <img src={logo} alt="logo"/>
                            <span className={styles.text}>TimeKeeper</span>
                        </a>
                        <p className={styles.sub_text}>Organize your future plans</p>
                    </div>
                    <div className={styles.center_box}>

                    </div>
                    <div className={styles.right_box}>

                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
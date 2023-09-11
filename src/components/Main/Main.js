import React from 'react';
import styles from './main.module.css';
import Panel from "./Panel/Panel";
import Cards from "./Cards/Cards";

function Main(props) {
    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <Panel/>
                <Cards/>
            </div>
        </main>
    );
}

export default Main;
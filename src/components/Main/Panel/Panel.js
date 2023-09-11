import React from 'react';
import styles from './panel.module.css';

function Panel(props) {
    return (
        <div className={styles.panel}>
            <h1 className={styles.title}>Timers</h1>
            <div className={styles.wrapper}>
                <button className={styles.btn_add_card}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="white"/>
                    </svg>
                    Add Card
                </button>
                <div className={styles.custom_input}>
                    <input className={styles.input_search} type="text" placeholder="Search"/>
                </div>
                <button className={styles.btn_filter}>
                    Filter
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M3 6V8H21V6H3ZM3 18H9V16H3V18ZM15 13H3V11H15V13Z"
                              fill="black"/>
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default Panel;
import React from 'react';
import styles from './card.module.css';

function Card(props) {
    return (
        <div className={styles.card}>
            <div className={styles.card__top}>
                <p className={styles.title}>
                    Give Ielts Exam as soon as possible
                </p>
                <button className={styles.setting_btn}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
            <div className={styles.card__bottom}>
                <div className={styles.card__time}>
                    <div className={styles.card__time_top}>
                        <span className={styles.card__month_count}>3</span>
                        <span className={styles.card__month_text}>Months Left</span>
                    </div>
                    <div className={styles.card__time_bottom}>
                        <div className={styles.card__wrap}>
                            <span className={styles.card__day_count}>7</span>
                            <span className={styles.card__day_text}>Days</span>
                        </div>
                        <div className={styles.card__wrap}>
                            <span className={styles.card__hour_count}>12</span>
                            <span className={styles.card__hour_text}>Hours</span>
                        </div>
                        <div className={styles.card__wrap}>
                            <span className={styles.card__min_count}>45</span>
                            <span className={styles.card__min_text}>Minutes</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
import React from 'react';
import styles from './card.module.css';

function Card({title, date, type}) {
    let month;
    let day;
    let hour;
    let minute;
    let nowDate = new Date();
    let startDate = date;

    if (type === 0) {
        month = nowDate.getMonth() - startDate.getMonth();
        day = nowDate.getDay() - startDate.getDay();
        hour = nowDate.getHours() - startDate.getHours();
        minute = nowDate.getMinutes() - startDate.getMinutes();
    } else {
        month = startDate.getMonth() - nowDate.getMonth();
        day = startDate.getDay() - nowDate.getDay();
        hour = startDate.getHours() - nowDate.getHours();
        minute = startDate.getMinutes() - nowDate.getMinutes();
    }
    // if (month < 0 || day < 0 || hour < 0 || minute < 0) {
    //     month = 0;
    //     day = 0;
    //     hour = 0;
    //     minute = 0;
    // }

    return (
        <div className={styles.card}>
            <div className={styles.card__top}>
                <p className={styles.title}>
                    {title}
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
                        <span className={styles.card__month_count}>{month}</span>
                        <span className={styles.card__month_text}>Months {
                            type === 0
                                ? "Passed"
                                : "Left"
                        }</span>
                    </div>
                    <div className={styles.card__time_bottom}>
                        <div className={styles.card__wrap}>
                            <span className={styles.card__day_count}>{day}</span>
                            <span className={styles.card__day_text}>Days</span>
                        </div>
                        <div className={styles.card__wrap}>
                            <span className={styles.card__hour_count}>{hour}</span>
                            <span className={styles.card__hour_text}>Hours</span>
                        </div>
                        <div className={styles.card__wrap}>
                            <span className={styles.card__min_count}>{minute}</span>
                            <span className={styles.card__min_text}>Minutes</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
import React, {useState} from 'react';
import styles from './card.module.css';
import * as dayjs from 'dayjs'
import CardSettings from "./CardSettings/CardSettings";
import ModalEditCard from "../../../Common/ModalEditCard/ModalEditCard";

function Card({title, date, type, onDeleteCard}) {
    const [isEditCard, setIsEditCard] = useState(false);
    // TODO TODO TODO TODO TODO TODO TODO
    // перенести функцию editCard из main через пропсы сюда
    // перенести функцию editCard из main через пропсы сюда
    // перенести функцию editCard из main через пропсы сюда
    // перенести функцию editCard из main через пропсы сюда
    let month;
    let day;
    let hour;
    let minute;
    let nowDate = new Date();

    if (type === 0) {
        month = dayjs(nowDate).diff(dayjs(date), 'month');
        nowDate = dayjs(nowDate).subtract(month, 'month')
        day = dayjs(nowDate).diff(dayjs(date), 'day');
        nowDate = dayjs(nowDate).subtract(day, 'day');
        hour = dayjs(nowDate).diff(dayjs(date), 'hour');
        nowDate = dayjs(nowDate).subtract(hour, 'hour');
        minute = dayjs(nowDate).diff(dayjs(date), 'minute');
    } else {
        month = dayjs(date).diff(dayjs(nowDate), 'month');
        date = dayjs(date).subtract(month, 'month')
        day = dayjs(date).diff(dayjs(nowDate), 'day');
        date = dayjs(date).subtract(day, 'day');
        hour = dayjs(date).diff(dayjs(nowDate), 'hour');
        date = dayjs(date).subtract(hour, 'hour');
        minute = dayjs(date).diff(dayjs(nowDate), 'minute');
    }
    if (month < 0 || day < 0 || hour < 0 || minute < 0) {
        month = 0;
        day = 0;
        hour = 0;
        minute = 0;
    }

    return (
        <>
            <div className={styles.card}>
                <div className={styles.card__head}>
                    <p className={styles.title}>
                        {title}
                    </p>
                    <CardSettings onDeleteCard={onDeleteCard}
                                  onSetIsEditCard={setIsEditCard}/>
                </div>
                <div className={styles.card__body}>
                    <span className={styles.card__month_count}>{month}</span>
                    <span className={styles.card__month_text}>Months {
                        type === 0
                            ? "Passed"
                            : "Left"
                    }</span>
                </div>
                <div className={styles.card__footer}>
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
            {isEditCard && <ModalEditCard onClose={() => {
                document.body.classList.remove('off-scroll');
                document.querySelector('.simple-bar').classList.remove('off-scroll');
                setIsEditCard(false)
            }}
            />}
        </>
    );
}

export default Card;
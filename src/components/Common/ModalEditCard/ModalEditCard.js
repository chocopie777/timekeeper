import React, {useState} from 'react';
import styles from './modalEditCard.module.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import icon_calendar from './icon_calendar.svg';
import modal from './modalEditCard.css';
import {v4} from 'uuid';

function ModalEditCard({editCard, onClose}) {
    const [date, setDate] = useState(new Date());
    const [type, setType] = useState(0);
    const [title, setTitle] = useState('');

    return (
        <div className={styles.wrap}>
            <div className={styles.modal_create_card}>
                <div className={styles.header}>
                    <h3 className={styles.title_head}>Edit a time card</h3>
                    <button className={styles.btn_close} onClick={onClose}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"
                             fill="none">
                            <path
                                d="M21 2.115L18.885 0L10.5 8.385L2.115 0L0 2.115L8.385 10.5L0 18.885L2.115 21L10.5 12.615L18.885 21L21 18.885L12.615 10.5L21 2.115Z"
                                fill="black"/>
                        </svg>
                    </button>
                </div>
                <div className={styles.body}>
                    <h4 className={styles.type_title}>Card type</h4>
                    <div className={styles.wrap_radio_btns}>
                        <label>
                            <input className={styles.radio_inp}
                                   type="radio"
                                   name="sort"
                                   value="count up"
                                   checked={type === 0}
                                   onChange={() => {setType(0)}}/>
                            <div className={styles.radio_style}>
                                <span className={styles.radio_btn}>
                                </span>
                                <div className={styles.radio_wrap}>
                                    <p className={styles.radio_title}>
                                        Count up
                                    </p>
                                    <p className={styles.radio_text}>
                                        The timer will count the time passed since the start date
                                    </p>
                                </div>
                            </div>
                        </label>
                        <label>
                            <input className={styles.radio_inp}
                                   type="radio"
                                   name="sort"
                                   value="count down"
                                   checked={type === 1}
                                   onChange={() => setType(1)}/>
                            <div className={styles.radio_style}>
                                <span className={styles.radio_btn}>
                                </span>
                                <div className={styles.radio_wrap}>
                                    <p className={styles.radio_title}>
                                        Count Down
                                    </p>
                                    <p className={styles.radio_text}>
                                        The timer will count the time until the end date
                                    </p>
                                </div>
                            </div>
                        </label>
                    </div>
                    <h4 className={styles.date_title}>Start Date</h4>
                    <DatePicker className={styles.date_style} selected={date} onChange={(date) => setDate(date)}/>
                    <h4 className={styles.title_text}>Title</h4>
                    <input className={styles.title_inp}
                           type="text"
                           placeholder="Enter title..."
                           value={title}
                           onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div className={styles.footer}>
                    <button className={styles.btn_create}
                            onClick={() => {
                                editCard(
                                    {
                                        id: v4(),
                                        type: type,
                                        date: date,
                                        title: title
                                    })
                                onClose();
                            }}>
                        Edit
                    </button>
                </div>
            </div>
        </div>
    )
        ;
}

export default ModalEditCard;
import React from 'react';
import styles from './modalCreateCard.module.css';

function ModalCreateCard(props) {
    function currentDate() {
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();

        return today =  yyyy + '-' + mm + '-' + dd;
    }

    return (
        <div className={styles.wrap}>
            <div className={styles.modal_create_card}>
                <div className={styles.header}>
                    <h3 className={styles.title_head}>Create a time card</h3>
                    <button className={styles.btn_close} onClick={props.onClose}>
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
                            <input className={styles.radio_inp} type="radio" name="sort" value="count up" checked/>
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
                            <input className={styles.radio_inp} type="radio" name="sort" value="count down"/>
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
                    <input className={styles.date_inp} type="date" value={currentDate()}/>
                </div>
                <div className={styles.footer}>
                    <button className={styles.btn_create}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="25" viewBox="0 0 20 25" fill="none">
                            <path
                                d="M20 14.4626H11.4286V24.6666H8.57143V14.4626H0V11.0612H8.57143V0.857117H11.4286V11.0612H20V14.4626Z"
                                fill="white"/>
                        </svg>
                        Create
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ModalCreateCard;
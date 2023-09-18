import React from 'react';
import styles from './empty_card.module.css';
import empty_icon from './empty_icon.svg';

function EmptyCard({onSetIsAddCard}) {
    return (
        <div className={styles.empty_card}>
            <div className={styles.empty_card__inner}>
                <img className={styles.empty_card__img} src={empty_icon} alt="empety icon"/>
                <h3 className={styles.title}>
                    Create a time card
                </h3>
                <p className={styles.sub_title}>
                    Time Cards can track
                    <strong> time since</strong> or
                    <strong> time until</strong> for any thing important to you
                </p>
                <button className={styles.btn_add_card} onClick={() => {
                    document.body.classList.add('off-scroll');
                    onSetIsAddCard(true)
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="white"/>
                    </svg>
                    Add Card
                </button>
            </div>
        </div>
    );
}

export default EmptyCard;
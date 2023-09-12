import React from 'react';
import styles from './empty_card.module.css';
import empty_icon from './empty_icon.svg';

function EmptyCard(props) {
    return (
        <div className={styles.empty_card}>
            <img className={styles.empty_card__img} src={empty_icon} alt="empety icon"/>
        </div>
    );
}

export default EmptyCard;
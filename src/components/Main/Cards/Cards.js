import React from 'react';
import styles from './cards.module.css';
import Card from "./Card/Card";
import EmptyCard from "./EmptyCard/EmptyCard";

function Cards(props) {
    return (
        <div className={styles.cards}>
            <EmptyCard/>
        </div>
    );
}

export default Cards;
import React from 'react';
import styles from './cards.module.css';
import Card from "./Card/Card";
import EmptyCard from "./EmptyCard/EmptyCard";

function Cards({cards, sortBy, groupBy, search, onSetIsAddCard, onDeleteCard, onEditCard}) {
    let nextCards = cards.slice();

    if (search !== '') {
        nextCards = nextCards.filter((item) => item.title.includes(search));
    }
    for (let item of sortBy) {
        if (item.checked) {
            if (item.title === 'Title') {
                if (item.increase) {
                    nextCards.sort((a, b) => {
                        if (a.title > b.title) {
                            return 1;
                        } else if (a.title < b.title) {
                            return -1;
                        } else {
                            return 0;
                        }
                    })
                } else {
                    nextCards.sort((a, b) => {
                        if (a.title < b.title) {
                            return 1;
                        } else if (a.title > b.title) {
                            return -1
                        } else {
                            return 0;
                        }
                    })
                }
            }
            if (item.title === 'Date') {
                if (item.increase) {
                    nextCards.sort((a, b) => {
                        const aDate = new Date(a.date);
                        const bDate = new Date(b.date);
                        if (aDate.getTime() > bDate.getTime()) {
                            return 1;
                        } else if (aDate.getTime() < bDate.getTime()) {
                            return -1;
                        } else {
                            return 0;
                        }
                    })
                } else {
                    nextCards.sort((a, b) => {
                        const aDate = new Date(a.date);
                        const bDate = new Date(b.date);
                        if (aDate.getTime() < bDate.getTime()) {
                            return 1;
                        } else if (aDate.getTime() > bDate.getTime()) {
                            return -1
                        } else {
                            return 0;
                        }
                    })
                }
            }
        }
    }
    for (let item of groupBy) {
        if (item.checked) {
            if (item.title === 'Card type') {
                nextCards.sort((a, b) => {
                    if (a.type < b.type) {
                        return 1;
                    } else if (a.type > b.type) {
                        return -1
                    } else {
                        return 0;
                    }
                });
            }
        }
    }
    return (
        <>
            {
                nextCards.length > 0
                    ? (
                        <div className={styles.cards}>
                            {
                                nextCards.map((item) => {
                                    return <Card key={item.id}
                                                 title={item.title}
                                                 date={item.date}
                                                 type={item.type}
                                                 id={item.id}
                                                 onDeleteCard={() => {
                                                     onDeleteCard(item.id)
                                                 }}
                                                 onEditCard={onEditCard}
                                    />
                                })
                            }
                        </div>
                    )
                    : <EmptyCard onSetIsAddCard={onSetIsAddCard}/>
            }
        </>
    );
}

export default Cards;
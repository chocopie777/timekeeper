import React, {useState} from 'react';
import styles from './main.module.css';
import Panel from "./Panel/Panel";
import Cards from "./Cards/Cards";

function Main(props) {
    const [cards, setCards] = useState([]);
    function addCard(item) {
        setCards([
            ...cards,
            item
        ])
    }
    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <Panel addCard={addCard}/>
                <Cards cards={cards}/>
            </div>
        </main>
    );
}

export default Main;
import React, {useState} from 'react';
import styles from './main.module.css';
import Panel from "./Panel/Panel";
import Cards from "./Cards/Cards";

function Main(props) {
    const [cards, setCards] = useState([]);
    const [sortBy, setSortBy] = useState([
        {
            id: 0,
            title: 'Title',
            checked: false,
            increase: true
        },
        {
            id: 1,
            title: 'Date',
            checked: false,
            increase: true
        }
    ]);
    const [groupBy, setGroupBy] = useState([
        {
            id: 0,
            title: 'Card type',
            checked: false
        }
    ]);
    function addCard(item) {
        setCards([
            ...cards,
            item
        ])
    }
    function handleSortBy(id) {
        setSortBy(sortBy.map((item) => {
            if (item.id === id) {
                return {
                    ...item,
                    checked: true,
                    increase: !item.increase
                }
            } else {
                return {
                    ...item,
                    increase: true,
                    checked: false
                }
            }
        }));
    }

    function handleGroupBy(id) {
        setGroupBy(groupBy.map((item) => {
            if (item.id === id) {
                return {
                    ...item,
                    checked: true
                }
            } else {
                return item;
            }
        }));
    }

    function handleClear() {
        setSortBy([
            {
                id: 0,
                title: 'Title',
                checked: false,
                increase: true
            },
            {
                id: 1,
                title: 'Date',
                checked: false,
                increase: true
            }
        ]);
        setGroupBy([
            {
                id: 0,
                title: 'Card type',
                checked: false
            }
        ]);
    }

    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <Panel addCard={addCard}
                       sortBy={sortBy}
                       groupBy={groupBy}
                       onSort={handleSortBy}
                       onGroup={handleGroupBy}
                       onClear={handleClear}/>
                <Cards cards={cards}
                       sortBy={sortBy}
                       groupBy={groupBy}/>
            </div>
        </main>
    );
}

export default Main;
import React, {useState} from 'react';
import styles from './main.module.css';
import Panel from "./Panel/Panel";
import Cards from "./Cards/Cards";
import ModalCreateCard from "../Common/ModalCreateCard/ModalCreateCard";
import ModalEditCard from "../Common/ModalEditCard/ModalEditCard";

function Main(props) {
    const [isAddCard, setIsAddCard] = useState(false);
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
    const [search, setSearch] = useState('');

    function addCard(item) {
        setCards([
            ...cards,
            item
        ])
    }

    function editCard(item) {

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

    function handleDeleteCard(id) {
        setCards(
            cards.filter((card) => card.id !== id)
        );
    }

    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <Panel addCard={addCard}
                       sortBy={sortBy}
                       groupBy={groupBy}
                       onSort={handleSortBy}
                       onGroup={handleGroupBy}
                       onClear={handleClear}
                       onSearch={setSearch}/>
                <Cards cards={cards}
                       sortBy={sortBy}
                       groupBy={groupBy}
                       search={search}
                       onSetIsAddCard={setIsAddCard}
                       onDeleteCard={handleDeleteCard}
                />
            </div>
            {isAddCard && <ModalCreateCard onClose={() => {
                document.body.classList.remove('off-scroll');
                document.querySelector('.simple-bar').classList.remove('off-scroll');
                setIsAddCard(false)
            }}
                                           addCard={addCard}
            />}
        </main>
    );
}

export default Main;
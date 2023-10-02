import React, {useEffect, useReducer, useState} from 'react';
import styles from './main.module.css';
import Panel from "./Panel/Panel";
import Cards from "./Cards/Cards";
import ModalCreateCard from "../Common/ModalCreateCard/ModalCreateCard";
import cardsReducer from "./cardsReducer";

function Main(props) {
    const [isAddCard, setIsAddCard] = useState(false);
    const [cards, dispatch] = useReducer(cardsReducer,
        JSON.parse(localStorage.getItem('cards')) || [])
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

    useEffect(() => {
        localStorage.setItem('cards', JSON.stringify(cards));
    }, [cards]);

    function handleAddCard(item) {
        dispatch({
           type: 'added',
           item: item
        });
    }

    function handleEditCard(item) {
        dispatch({
            type: 'edited',
            item: item
        });
    }

    function handleDeleteCard(id) {
        dispatch({
            type: 'removed',
            id: id
        });
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
                <Panel onAddCard={handleAddCard}
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
                       onEditCard={handleEditCard}
                />
            </div>
            {isAddCard && <ModalCreateCard onClose={() => {
                document.body.classList.remove('off-scroll');
                document.querySelector('.simple-bar').classList.remove('off-scroll');
                setIsAddCard(false)
            }}
                                           onAddCard={handleAddCard}
            />}
        </main>
    );
}

export default Main;
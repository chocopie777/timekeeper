import React, {useState} from 'react';
import styles from './panel.module.css';
import Filter from "./Filter/Filter";
import ModalCreateCard from "../../Common/ModalCreateCard/ModalCreateCard";

function Panel({onAddCard, sortBy, groupBy, onSort, onGroup, onClear, onSearch}) {
    const [isAddCard, setIsAddCard] = useState(false);

    return (
        <div className={styles.panel}>
            <h1 className={styles.title}>Timers</h1>
            <div className={styles.wrapper}>
                <button className={styles.btn_add_card} onClick={() => {
                    document.body.classList.add('off-scroll');
                    document.querySelector('.simple-bar').classList.add('off-scroll');
                    setIsAddCard(true)
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="white"/>
                    </svg>
                    Add Card
                </button>

                <div className={styles.custom_input}>
                    <input className={styles.input_search} type="text" placeholder="Search"
                           onInput={(e) => onSearch(e.target.value)}/>
                </div>
                <Filter sortBy={sortBy}
                        groupBy={groupBy}
                        onSort={onSort}
                        onGroup={onGroup}
                        onClear={onClear}/>
            </div>
            {isAddCard && <ModalCreateCard
                onClose={() => {
                    document.body.classList.remove('off-scroll');
                    document.querySelector('.simple-bar').classList.remove('off-scroll');
                    setIsAddCard(false);
                }}
                onAddCard={onAddCard}
            />}
        </div>
    );
}

export default Panel;
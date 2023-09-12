import React, {useState} from 'react';
import styles from './filter.module.css';

function Filter(props) {
    const [isFilter, setIsFulter] = useState(false);
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

    function handleSortBy(id) {
        setSortBy(sortBy.map((item) => {
            if (item.id === id) {
                return {
                    ...item,
                    checked: true,
                    increase: !item.increase
                }
            } else {
                return item;
            }
            // TODO реализовать сброс checked и increase для item.id !== id,
            //  чтбоы не было несколько одновременно включенных sort_by
        }));

    }

    return (
        <div className={styles.filter}>
            <button className={styles.btn_filter} onClick={() => {
                setIsFulter(!isFilter)
            }}>
                Filter
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M3 6V8H21V6H3ZM3 18H9V16H3V18ZM15 13H3V11H15V13Z"
                          fill="black"/>
                </svg>
            </button>
            {isFilter && (
                <div className={styles.dropdown}>
                    <div className={styles.wrapper_dropdown}>
                        <div className={styles.dropdown_sort_by}>
                            <span className={styles.text}>Sort by</span>
                            {sortBy.map((item) => {
                                if (item.checked) {
                                    if(item.increase) {
                                        return <div key={item.id}
                                                    className={`${styles.item_sort_by} ${styles.item_sort_by_active} ${styles.rotate}`}
                                                    onClick={() => {
                                                        handleSortBy(item.id)
                                                    }}>{item.title}
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25"
                                                 viewBox="0 0 24 25" fill="none">
                                                <path
                                                    d="M4 12.5L5.41 11.0019L11 16.9306V4H13V16.9306L18.58 10.9913L20 12.5L12 21L4 12.5Z"
                                                    fill="black"/>
                                            </svg>
                                        </div>;
                                    } else {
                                        return <div key={item.id}
                                                    className={`${styles.item_sort_by} ${styles.item_sort_by_active}`}
                                                    onClick={() => {
                                                        handleSortBy(item.id)
                                                    }}>{item.title}
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25"
                                                 viewBox="0 0 24 25" fill="none">
                                                <path
                                                    d="M4 12.5L5.41 11.0019L11 16.9306V4H13V16.9306L18.58 10.9913L20 12.5L12 21L4 12.5Z"
                                                    fill="black"/>
                                            </svg>
                                        </div>;

                                    }
                                } else {
                                    return <div key={item.id} className={styles.item_sort_by}
                                                onClick={() => {
                                                    handleSortBy(item.id)
                                                }}>{item.title}</div>;
                                }
                            })}
                        </div>
                        <div className={styles.dropdown_group_by}>
                            <span className={styles.text_group}>Group by</span>
                            {groupBy.map((item) => {
                                return <div key={item.id} className={styles.item_group_by}>{item.title}</div>;
                            })}
                        </div>
                    </div>
                    <div className={styles.wrapper_setting}>
                        <button className={styles.btn}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"
                                 fill="none">
                                <path
                                    d="M16.625 5.60875L15.3912 4.375L10.5 9.26625L5.60875 4.375L4.375 5.60875L9.26625 10.5L4.375 15.3912L5.60875 16.625L10.5 11.7337L15.3912 16.625L16.625 15.3912L11.7337 10.5L16.625 5.60875Z"
                                    fill="white"/>
                            </svg>
                            Clear Filters
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Filter;
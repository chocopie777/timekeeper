import React, {useState} from 'react';
import styles from "./cardSettings.module.css";

function CardSettings({onDeleteCard, onSetIsEditCard}) {
    const [isSettings, setIsSettings] = useState(false);
    return (
        <div className={styles.settings}>
            <button className={styles.setting_btn}
                    onClick={() => setIsSettings(!isSettings)}
                    onBlur={() => setIsSettings(false)}>
                <span></span>
                <span></span>
                <span></span>
            </button>
            {
                isSettings && (
                    <div className={styles.dropdown}>
                        <ul className={styles.list}>
                            <li className={styles.item_title}>
                                Settings
                            </li>
                            <li className={styles.item}>
                                <div className={styles.setting}
                                     onMouseDown={onDeleteCard}>
                                    Delete
                                </div>
                            </li>
                            <li className={styles.item}>
                                <div className={styles.setting}
                                     onMouseDown={() => onSetIsEditCard(true)}>
                                    Edit
                                </div>
                            </li>
                        </ul>
                    </div>
                )
            }

        </div>
    )
        ;
}

export default CardSettings;
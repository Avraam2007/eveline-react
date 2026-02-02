import React, { useEffect } from 'react';
import styles from '../content.module.scss'

declare global {
    interface Window {
        TrademcAPI: any;
    }
}

const TradeMcWidget: React.FC = () => {
    useEffect(() => {
        if (window.TrademcAPI) {
            window.TrademcAPI.GetBuyForm({
                "Shop": "206786",
                "Title": "Buy donate",
                "Nickname": "Enter your nickname",
                "Item": "Select an item",
                "Coupon": "Enter coupon, if it is",
                "Button": "Continue",
                "Success_URL": "https://trademc.org",
                "Pending_URL": "https://trademc.org",
                "Fail_URL": "https://trademc.org",
                "PastPlaceID": "trademc-buyform-container"
            });
        } else {
            console.error("TrademcAPI не знайдено. Переконайтеся, що головний скрипт підключено в index.html");
        }
    }, []);
    return (
        <div id="trademc-buyform-container" className={styles.trademcBuyform}></div>
    );
};

export default TradeMcWidget;
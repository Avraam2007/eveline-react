import { useState } from 'react';
import styles from '../content.module.scss';

interface ILocalization {
    localization:string;
}

function Timer({localization}:ILocalization) {
        const [time,setTime] = useState<String>();
        // const timerEl = useRef();
    
        const timer = function () {
            const countDownDate = new Date("Jun 30, 2026 00:00:00").getTime();
            const nowDate = new Date().getTime();
            const distance = countDownDate - nowDate;
    
            if (distance < 0) {
                if(localization === "rus") setTime("ЗАКОНЧИЛАСЬ!");
                else if(localization === "ukr") setTime("ЗАКІНЧИЛАСЯ!");
                else setTime("IT'S OVER!");
                return;
            } 
    
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
            if(localization === "rus") setTime(`${days}дн ${hours}ч ${minutes}м ${seconds}с`);
            else if(localization === "ukr") setTime(`${days}дн ${hours}г ${minutes}хв ${seconds}с`);
            else setTime(`${days}d ${hours}h ${minutes}m ${seconds}s`);
            return;
        }
    
        setInterval(timer,1000);

        return (
            <>
                <p id="timer" className={styles.timer}>{time}</p>
            </>
        )
    
}

export default Timer;
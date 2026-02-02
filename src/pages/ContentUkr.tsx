import { useState } from 'react';
import styles from '../content.module.scss'
import TradeMcWidget from '../components/trademc';

function ContentUkr() {
            const [time,setTime] = useState<String>();
            // const timerEl = useRef();
        
            const toTheTop = () => {
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
            }
        
            const timer = function () {
                const countDownDate = new Date("Jun 30, 2026 00:00:00").getTime();
                const nowDate = new Date().getTime();
                const distance = countDownDate - nowDate;
        
                if (distance < 0) {
                    setTime("ЗАКІНЧИЛАСЬ!");
                    return;
                } 
        
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
                setTime(`${days}дн ${hours}г ${minutes}хв ${seconds}с`);
                return;
            }
        
            setInterval(timer,1000);
        
        
        return (
        <>
        <main className="main">
            <div className={styles.intro}>
                <h1 className={styles.mainTitle}>ЛАСКАВО ПРОСИМО ДО НАШОГО СЕРВЕРУ EVELINE!</h1>
                <div className={styles.introInfo}>
                    <p className={styles.infoText}><span className={styles.yellow}>Eveline</span> - це захоплюючий Minecraft-сервер, який пропонує унікальний PvP. На цьому сервері ви зможете будувати вражаючі споруди, розважатися, боротися з іншими гравцями та небезпечними мобами. 
                    Завдяки активній спільноті, ви також зможете знайти нових друзів та обмінюватись досвідом. Приєднуйтесь до нашого серверу Eveline і зануртесь у незабутній світ творчості та пригоди!</p>
                    <img src="./images/intro_skin.png" alt="intro_skin.png" className={styles.introSkin}/>
                </div>
            </div>
        <div className={styles.address}>
            <h1 className={styles.mainTitle}>НАШ СЕРВЕР</h1>
            <div className={styles.serverInfo}>
                <ul className={styles.server}>
                    <li className={styles.serverOption}>
                        <img src="./images/ip.png" alt="ip.png" className={styles.ip}/>
                        <p className="option">IP: eveline.gomc.fun</p>
                    </li>
                    <li className={styles.serverOption}>
                        <img src="./images/port.png" alt="port.png" className={styles.port}/>
                        <p className="option">Порт: 7477</p>
                    </li>
                    <li className={styles.serverOption}>
                        <img src="./images/version.png" alt="version.png" className={styles.version}/>
                        <p className="option">Версія: 1.18-1.19</p>
                    </li>
                    <li className={styles.serverOption}>
                        <img src="./images/discord.png" alt="discord.png" className={styles.port}/>
                        <p className="option">Наша спільнота: <a href="https://discord.gg/j4zgSQ3w">ds</a></p>
                    </li>
                </ul>
                <div className={styles.serverBtn}>
                    <a href="minecraft://?addExternalServer=Eveline|eveline.gomc.fun:7477/" className="server-link">Приєднатися</a>
                </div>
            </div>
        </div>
        <div className={styles.have}>
            <h1 className={styles.mainTitle}>ЩО В НАС Є?</h1>
            <div className={styles.listbox}>
                <ul className={styles.advantageList}>
                    <li className={styles.listAdvantage}>
                        <p className={styles.listText}>Найкращі PvP та арена</p>   
                    </li>
                    <li className={styles.listAdvantage}>
                        <p className={styles.listText}>Найкращі донат-набори за свою ціну</p> 
                    </li>
                    <li className={styles.listAdvantage}>
                        <p className={styles.listText}>Найгарніше лобі</p> 
                    </li>
                    <li className={styles.listAdvantage}>
                        <p className={styles.listText}>Відповідальна адміністрація</p> 
                    </li>
                    <li className={styles.listAdvantage}>
                        <p className={styles.listText}>Найкращий античіт</p> 
                    </li>
                </ul>
                <ul className={styles.advantageList}>
                    <li className={styles.listAdvantage}>
                        <p className={styles.listText}>Автошахта</p>   
                    </li>
                    <li className={styles.listAdvantage}>
                        <p className={styles.listText}>Аєрдропи</p> 
                    </li>
                    <li className={styles.listAdvantage}>
                        <p className={styles.listText}>Гора Олімпу</p> 
                    </li>
                    <li className={styles.listAdvantage}>
                        <p className={styles.listText}>Варпи</p> 
                    </li>
                    <li className={styles.listAdvantage}>
                        <p className={styles.listText}>Аукціони</p> 
                    </li>
                </ul>
            </div>
        </div>
        <div className={styles.sale}>
            <h1 className={styles.mainTitle}>АКЦІЯ!</h1>
            <div className={styles.saleInfo}>
                <img src="./images/cake.gif" alt="cake.gif" className={styles.cake}/>
                <p className={styles.saleText}>На честь відкриття нашого сайту ви можете знайти шалкера з подарунками у різних координатах. Окрім цього в нас дія знижка на всі товари в розмірі 25%! Також лови промокод: <span className={styles.yellow}>Eveline</span>.</p>
            </div>
            <p className={styles.saleText}>До кінця акції залишилось</p>
            <p id="timer" className={styles.timer}>{time}</p>
        </div>
        <div className={styles.goods}>
            <h1 className={styles.mainTitle}>Товари</h1>
            <ul className={styles.goodsList}>
                <li className={styles.good}>
                    <div className={styles.top}>
                        <img src="./images/demon.png" alt="demon.png" className={styles.goodImage}/>
                        <h3 className={styles.goodTitle}>Демон</h3>
                        <ul className={styles.goodList}>
                            <li className={styles.goodAdvantage}>
                                <p className={styles.goodDescription}>Сет Демона</p>
                            </li>
                            <li className={styles.goodAdvantage}>
                                <p className={styles.goodDescription}>Сфера Демона</p>
                            </li>
                            <li className={styles.goodAdvantage}>
                                <p className={styles.goodDescription}>Талісман Демона</p>
                            </li>
                            <li className={styles.goodAdvantage}>
                                <p className={styles.goodDescription}>Префікс</p>
                            </li>
                            <li className={styles.goodAdvantage}>
                                <p className={styles.goodDescription}>2 точки дому</p>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.bottom}>
                        <h4 className={styles.goodPrice}>20.00 ₴</h4>
                        <div className={styles.buyBtn}>
                            <a href="https://eveline.trademc.org" className={styles.buyLink}>Купити!*</a>
                        </div>
                    </div>
                </li>
                <li className={styles.good}>
                    <div className={styles.top}>
                        <img src="./images/hermes.png" alt="hermes.png" className={styles.goodImage}/>
                        <h3 className={styles.goodTitle}>Гермес</h3>
                        <ul className={styles.goodList}>
                            <li className={styles.goodAdvantage}>
                                <p className={styles.goodDescription}>Сет Гермеса</p>
                            </li>
                            <li className={styles.goodAdvantage}>
                                <p className={styles.goodDescription}>Сфера Гермеса</p>
                            </li>
                            <li className={styles.goodAdvantage}>
                                <p className={styles.goodDescription}>Талісман Гермеса</p>
                            </li>
                            <li className={styles.goodAdvantage}>
                                <p className={styles.goodDescription}>Префікс</p>
                            </li>
                            <li className={styles.goodAdvantage}>
                                <p className={styles.goodDescription}>2 точки дома</p>
                            </li>
                            <li className={styles.goodAdvantage}>
                                <p className={styles.goodDescription}>Кирка Гермеса</p>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.bottom}>
                        <h4 className={styles.goodPrice}>50.00 ₴</h4>
                        <div className={styles.buyBtn}>
                            <a href="https://eveline.trademc.org" className={styles.buyLink}>Купити!*</a>
                        </div>
                    </div>
                </li>
                <li className={styles.good}>
                    <div className={styles.top}>
                        <img src="./images/hephaestus.png" alt="hephaestus.png" className={styles.goodImage}/>
                        <h3 className={styles.goodTitle}>Гефест</h3>
                        <ul className={styles.goodList}>
                            <li className={styles.goodAdvantage}>
                                <p className={styles.goodDescription}>Сет Гефеста</p>
                            </li>
                            <li className={styles.goodAdvantage}>
                                <p className={styles.goodDescription}>Сфера Гефеста</p>
                            </li>
                            <li className={styles.goodAdvantage}>
                                <p className={styles.goodDescription}>Талісман Гефеста</p>
                            </li>
                            <li className={styles.goodAdvantage}>
                                <p className={styles.goodDescription}>Префікс</p>
                            </li>
                            <li className={styles.goodAdvantage}>
                                <p className={styles.goodDescription}>2 точки дома</p>
                            </li>
                            <li className={styles.goodAdvantage}>
                                <p className={styles.goodDescription}>Кирка Гефеста</p>
                            </li>
                            <li className={styles.goodAdvantage}>
                                <p className={styles.goodDescription}>Політ на 15 хвилин</p>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.bottom}>
                        <h4 className={styles.goodPrice}>100.00 ₴</h4>
                        <div className={styles.buyBtn}>
                            <a href="https://eveline.trademc.org" className={styles.buyLink}>Купити!*</a>
                        </div>
                    </div>
                </li>
                <li className={styles.good}>
                    <div className={styles.top}>
                        <img src="./images/hades.png" alt="hades.png" className={styles.goodImage}/>
                        <h3 className={styles.goodTitle}>Аїд</h3>
                        <ul className={styles.goodList}>
                            <li className={styles.goodAdvantage}>
                                <p className={styles.goodDescription}>Сет Аїда</p>
                            </li>
                            <li className={styles.goodAdvantage}>
                                <p className={styles.goodDescription}>Сфера Аїда</p>
                            </li>
                            <li className={styles.goodAdvantage}>
                                <p className={styles.goodDescription}>Талісман Аїда</p>
                            </li>
                            <li className={styles.goodAdvantage}>
                                <p className={styles.goodDescription}>Префікс</p>
                            </li>
                            <li className={styles.goodAdvantage}>
                                <p className={styles.goodDescription}>3 точки дома</p>
                            </li>
                            <li className={styles.goodAdvantage}>
                                <p className={styles.goodDescription}>Кирка Аїда</p>
                            </li>
                            <li className={styles.goodAdvantage}>
                                <p className={styles.goodDescription}>Політ на 30 хвилин</p>
                            </li>
                            <li className={styles.goodAdvantage}>
                                <p className={styles.goodDescription}>Команди вилікувати й нагодувати себе</p>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.bottom}>
                        <h4 className={styles.goodPrice}>150.00 ₴</h4>
                        <div className={styles.buyBtn}>
                            <a href="https://eveline.trademc.org" className={styles.buyLink}>Купити!*</a>
                        </div>
                    </div>
                </li>

                <li className={styles.good}>
                    <div className={styles.top}>
                        <img src="./images/zeus.png" alt="zeus.png" className={styles.goodImage}/>
                        <h3 className={styles.goodTitle}>Зевс</h3>
                        <ul className={styles.goodList}>
                            <li className={styles.goodAdvantage}>
                                <p className={styles.goodDescription}>Сет Зевса</p>
                            </li>
                            <li className={styles.goodAdvantage}>
                                <p className={styles.goodDescription}>Сфера Зевса</p>
                            </li>
                            <li className={styles.goodAdvantage}>
                                <p className={styles.goodDescription}>Талісман Зевса</p>
                            </li>
                            <li className={styles.goodAdvantage}>
                                <p className={styles.goodDescription}>Префікс</p>
                            </li>
                            <li className={styles.goodAdvantage}>
                                <p className={styles.goodDescription}>4 точки дома</p>
                            </li>
                            <li className={styles.goodAdvantage}>
                                <p className={styles.goodDescription}>Кирка Зевса</p>
                            </li>
                            <li className={styles.goodAdvantage}>
                                <p className={styles.goodDescription}>Політ на 45 хвилин</p>
                            </li>
                            <li className={styles.goodAdvantage}>
                                <p className={styles.goodDescription}>Команди вилікувати й нагодувати себе</p>
                            </li>
                            <li className={styles.goodAdvantage}>
                                <p className={styles.goodDescription}>Ендер-скриня коли захочеться</p>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.bottom}>
                        <h4 className={styles.goodPrice}>500.00 ₴</h4>
                        <div className={styles.buyBtn}>
                            <a href="https://eveline.trademc.org" className={styles.buyLink}>Купити!*</a>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div className={styles.shop}>
            <TradeMcWidget/>
            <h2 className={styles.dontwork}>Віджет не працює?**</h2>
            <div className={styles.shopBtn}>
                <a href="https://eveline.trademc.org" className={styles.shopLink}>Натисни тут</a>
            </div>
            <p className={styles.ps}>  *Товар діє тільки 30 днів</p>
            <p className={styles.ps}>  **Товар може з'явится через 1-2 доби</p>
        </div>
    </main>
    <footer>
        <div className={styles.info}>
            <p className={styles.footerName} onClick={toTheTop}>EVELINE</p>
            <p className={styles.footerCopyright}>    IP: eveline.gomc.fun</p>
            <p className={styles.footerCopyright}>    Порт: 7477</p>
            <p className={styles.footerCopyright}>    Магазин: <a href="https://eveline.trademc.org" className={styles.footerLink1}>https://eveline.trademc.org</a></p>
            <p className={styles.footerCopyright}>    E-mail: <a href="mailto:eveline.gomc.supp@gmail.com" className={styles.footerLink1}>eveline.gomc.supp@gmail.com</a></p>
        </div>
        <a href="https://discord.gg/j4zgSQ3w" className={styles.discord}><img src="./images/discord.png" alt="discord.png" className={styles.discordImg}/></a>
    </footer>
    {/* <script src="index_eng.js"></script>
    <script src="burger_menu.js"></script> */}
    </>
    );
}

export default ContentUkr;
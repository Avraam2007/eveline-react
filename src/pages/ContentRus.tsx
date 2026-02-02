import { useState } from 'react';
import styles from '../content.module.scss'
import TradeMcWidget from '../components/trademc';

function ContentRus() {
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
                setTime("ЗАКОНЧИЛАСЬ!");
                return;
            } 
    
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
            setTime(`${days}дн ${hours}ч ${minutes}м ${seconds}с`);
            return;
        }
    
        setInterval(timer,1000);
    
    
    return (
        <>
        <main className="main">
            <div className={styles.intro}>
                <h1 className={styles.mainTitle}>ДОБРО ПОЖАЛОВАТЬ НА НАШ СЕРВЕР EVELINE!</h1>
                <div className={styles.introInfo}>
                    <p className={styles.infoText}><span className={styles.yellow}>Eveline</span> - это захватывающий Minecraft-сервер, который предлагает уникальный PvP. На этом сервере вы можете строить удивительные сооружения, развлекатся, дратся з другими игроками и опасными мобами. 
                    Благодаря активному сообществу, ви также можете найти новых друзей и обмениваться опытом. Присоединяйтесь к нашему серверу Eveline и погрузитесь в незабываемый мир творчества и приключения!</p>
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
                        <p className="option">Версия: 1.18-1.19</p>
                    </li>
                    <li className={styles.serverOption}>
                        <img src="./images/discord.png" alt="discord.png" className={styles.port}/>
                        <p className="option">Нашее сообщество: <a href="https://discord.gg/j4zgSQ3w">ds</a></p>
                    </li>
                </ul>
                <div className={styles.serverBtn}>
                    <a href="minecraft://?addExternalServer=Eveline|eveline.gomc.fun:7477/" className="server-link">Приєднатися</a>
                </div>
            </div>
        </div>
        <div className={styles.have}>
            <h1 className={styles.mainTitle}>ЧТО У НАС ЕСТЬ?</h1>
            <div className={styles.listbox}>
                <ul className={styles.advantageList}>
                    <li className={styles.listAdvantage}>
                        <p className={styles.listText}>Самые лучшие PvP и арена</p>   
                    </li>
                    <li className={styles.listAdvantage}>
                        <p className={styles.listText}>Самые лучшие донат-наборы за свою цену</p> 
                    </li>
                    <li className={styles.listAdvantage}>
                        <p className={styles.listText}>Самое красивое лобби</p> 
                    </li>
                    <li className={styles.listAdvantage}>
                        <p className={styles.listText}>Ответственная администрация</p> 
                    </li>
                    <li className={styles.listAdvantage}>
                        <p className={styles.listText}>Самый лучший античит</p> 
                    </li>
                </ul>
                <ul className={styles.advantageList}>
                    <li className={styles.listAdvantage}>
                        <p className={styles.listText}>Автошахта</p>   
                    </li>
                    <li className={styles.listAdvantage}>
                        <p className={styles.listText}>Аирдропы</p> 
                    </li>
                    <li className={styles.listAdvantage}>
                        <p className={styles.listText}>Гора Олимпа</p> 
                    </li>
                    <li className={styles.listAdvantage}>
                        <p className={styles.listText}>Варпы</p> 
                    </li>
                    <li className={styles.listAdvantage}>
                        <p className={styles.listText}>Аукционы</p> 
                    </li>
                </ul>
            </div>
        </div>
        <div className={styles.sale}>
            <h1 className={styles.mainTitle}>АКЦИЯ!</h1>
            <div className={styles.saleInfo}>
                <img src="./images/cake.gif" alt="cake.gif" className={styles.cake}/>
                <p className={styles.saleText}>В честь открытия нашего сайта вы можете найти шалкера с подарками на разных координатах. Кроме этого у нас действует скидка на все товары в размере 25%! Также лови промокод: <span className={styles.yellow}>Eveline</span>.</p>
            </div>
            <p className={styles.saleText}>До конца акции осталось</p>
            <p id="timer" className={styles.timer}>{time}</p>
        </div>
        <div className={styles.goods}>
            <h1 className={styles.mainTitle}>Товары</h1>
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
                                <p className={styles.goodDescription}>Талисман Демона</p>
                            </li>
                            <li className={styles.goodAdvantage}>
                                <p className={styles.goodDescription}>Префикс</p>
                            </li>
                            <li className={styles.goodAdvantage}>
                                <p className={styles.goodDescription}>2 точки дома</p>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.bottom}>
                        <h4 className={styles.goodPrice}>20.00 ₴</h4>
                        <div className={styles.buyBtn}>
                            <a href="https://eveline.trademc.org" className={styles.buyLink}>Купить!*</a>
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
                                <p className={styles.goodDescription}>Талисман Гермеса</p>
                            </li>
                            <li className={styles.goodAdvantage}>
                                <p className={styles.goodDescription}>Префикс</p>
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
                            <a href="https://eveline.trademc.org" className={styles.buyLink}>Купить!*</a>
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
                                <p className={styles.goodDescription}>Талисман Гефеста</p>
                            </li>
                            <li className={styles.goodAdvantage}>
                                <p className={styles.goodDescription}>Префикс</p>
                            </li>
                            <li className={styles.goodAdvantage}>
                                <p className={styles.goodDescription}>2 точки дома</p>
                            </li>
                            <li className={styles.goodAdvantage}>
                                <p className={styles.goodDescription}>Кирка Гефеста</p>
                            </li>
                            <li className={styles.goodAdvantage}>
                                <p className={styles.goodDescription}>Полёт на 15 минут</p>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.bottom}>
                        <h4 className={styles.goodPrice}>100.00 ₴</h4>
                        <div className={styles.buyBtn}>
                            <a href="https://eveline.trademc.org" className={styles.buyLink}>Купить!*</a>
                        </div>
                    </div>
                </li>
                <li className={styles.good}>
                    <div className={styles.top}>
                        <img src="./images/hades.png" alt="hades.png" className={styles.goodImage}/>
                        <h3 className={styles.goodTitle}>Аид</h3>
                        <ul className={styles.goodList}>
                            <li className={styles.goodAdvantage}>
                                <p className={styles.goodDescription}>Сет Аида</p>
                            </li>
                            <li className={styles.goodAdvantage}>
                                <p className={styles.goodDescription}>Сфера Аида</p>
                            </li>
                            <li className={styles.goodAdvantage}>
                                <p className={styles.goodDescription}>Талисман Аида</p>
                            </li>
                            <li className={styles.goodAdvantage}>
                                <p className={styles.goodDescription}>Префикс</p>
                            </li>
                            <li className={styles.goodAdvantage}>
                                <p className={styles.goodDescription}>3 точки дома</p>
                            </li>
                            <li className={styles.goodAdvantage}>
                                <p className={styles.goodDescription}>Кирка Аида</p>
                            </li>
                            <li className={styles.goodAdvantage}>
                                <p className={styles.goodDescription}>Полёт на 30 минут</p>
                            </li>
                            <li className={styles.goodAdvantage}>
                                <p className={styles.goodDescription}>Команды вылечить и накормить себя</p>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.bottom}>
                        <h4 className={styles.goodPrice}>150.00 ₴</h4>
                        <div className={styles.buyBtn}>
                            <a href="https://eveline.trademc.org" className={styles.buyLink}>Купить!*</a>
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
                                <p className={styles.goodDescription}>Талисман Зевса</p>
                            </li>
                            <li className={styles.goodAdvantage}>
                                <p className={styles.goodDescription}>Префикс</p>
                            </li>
                            <li className={styles.goodAdvantage}>
                                <p className={styles.goodDescription}>4 точки дома</p>
                            </li>
                            <li className={styles.goodAdvantage}>
                                <p className={styles.goodDescription}>Кирка Зевса</p>
                            </li>
                            <li className={styles.goodAdvantage}>
                                <p className={styles.goodDescription}>Полёт на 45 минут</p>
                            </li>
                            <li className={styles.goodAdvantage}>
                                <p className={styles.goodDescription}>Команды вылечить и накормить себя</p>
                            </li>
                            <li className={styles.goodAdvantage}>
                                <p className={styles.goodDescription}>Эндер-сундук когда хочется</p>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.bottom}>
                        <h4 className={styles.goodPrice}>500.00 ₴</h4>
                        <div className={styles.buyBtn}>
                            <a href="https://eveline.trademc.org" className={styles.buyLink}>Купить!*</a>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div className={styles.shop}>
            <TradeMcWidget/>
            <h2 className={styles.dontwork}>Виджет не работает?**</h2>
            <div className={styles.shopBtn}>
                <a href="https://eveline.trademc.org" className={styles.shopLink}>Нажми здесь</a>
            </div>
            <p className={styles.ps}>  *Товар действует только 30 дней</p>
            <p className={styles.ps}>  **Товар может появиться через 1-2 дня</p>
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

export default ContentRus;
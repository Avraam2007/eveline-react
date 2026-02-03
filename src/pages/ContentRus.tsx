import styles from '../content.module.scss'
import TradeMcWidget from '../components/trademc';
import Timer from '../components/timer';
import Footer from '../components/footer';
import GoodsRus from '../components/goodsRus';

function ContentRus() {
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
            <Timer localization="rus"/>
        </div>
        <GoodsRus/>
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
    <Footer localization="rus"/>
    </>
    );
}

export default ContentRus;
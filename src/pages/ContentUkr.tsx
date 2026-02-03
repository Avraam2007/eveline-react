import styles from '../content.module.scss'
import TradeMcWidget from '../components/trademc';
import Timer from '../components/timer';
import Footer from '../components/footer';
import GoodsUkr from '../components/goodsUkr';

function ContentUkr() {        
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
            <Timer localization="ukr"/>
        </div>
        <GoodsUkr/>
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
    <Footer localization="ukr"/>
    </>
    );
}

export default ContentUkr;
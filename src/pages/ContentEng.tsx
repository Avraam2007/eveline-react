import styles from '../content.module.scss'
import TradeMcWidget from '../components/trademc';
import Timer from '../components/timer';
import Footer from '../components/footer';
import GoodsEng from '../components/goods';

function ContentEng() {
    return (
        <>
        <main className="main">
            <div className={styles.intro}>
                <h1 className={styles.mainTitle}>WELCOME TO OUR SERVER EVELINE!</h1>
                <div className={styles.introInfo}>
                    <p className={styles.infoText}><span className={styles.yellow}>Eveline</span> is an exciting Minecraft server with unique PvP features. 
                        On this server, you can build awesome buildings, have fun, battle with other players and dangerous crowds. Thanks to an active community, you can make new friends and share your experiences as well. Join our waiter Eveline and soak up the unforgettable world of creativity and adventure!</p>
                    <img src="./images/intro_skin.png" alt="intro_skin.png" className={styles.introSkin}/>
                </div>
            </div>
        <div className={styles.address}>
            <h1 className={styles.mainTitle}>OUR SERVER</h1>
            <div className={styles.serverInfo}>
                <ul className={styles.server}>
                    <li className={styles.serverOption}>
                        <img src="./images/ip.png" alt="ip.png" className={styles.ip}/>
                        <p className="option">IP: eveline.gomc.fun</p>
                    </li>
                    <li className={styles.serverOption}>
                        <img src="./images/port.png" alt="port.png" className={styles.port}/>
                        <p className="option">Port number: 7477</p>
                    </li>
                    <li className={styles.serverOption}>
                        <img src="./images/version.png" alt="version.png" className={styles.version}/>
                        <p className="option">Version: 1.18-1.19</p>
                    </li>
                    <li className={styles.serverOption}>
                        <img src="./images/discord.png" alt="discord.png" className={styles.port}/>
                        <p className="option">Our community: <a href="https://discord.gg/j4zgSQ3w">ds</a></p>
                    </li>
                </ul>
                <div className={styles.serverBtn}>
                    <a href="minecraft://?addExternalServer=Eveline|eveline.gomc.fun:7477/" className="server-link">Join</a>
                </div>
            </div>
        </div>
        <div className={styles.have}>
            <h1 className={styles.mainTitle}>WHAT DO WE HAVE?</h1>
            <div className={styles.listbox}>
                <ul className={styles.advantageList}>
                    <li className={styles.listAdvantage}>
                        <p className={styles.listText}>The best PvP and area</p>   
                    </li>
                    <li className={styles.listAdvantage}>
                        <p className={styles.listText}>The best donation sets for their price</p> 
                    </li>
                    <li className={styles.listAdvantage}>
                        <p className={styles.listText}>The best lobby</p> 
                    </li>
                    <li className={styles.listAdvantage}>
                        <p className={styles.listText}>Responsible administration</p> 
                    </li>
                    <li className={styles.listAdvantage}>
                        <p className={styles.listText}>the best anti-cheat</p> 
                    </li>
                </ul>
                <ul className={styles.advantageList}>
                    <li className={styles.listAdvantage}>
                        <p className={styles.listText}>Automine</p>   
                    </li>
                    <li className={styles.listAdvantage}>
                        <p className={styles.listText}>Airdrops</p> 
                    </li>
                    <li className={styles.listAdvantage}>
                        <p className={styles.listText}>Olympus Mount</p> 
                    </li>
                    <li className={styles.listAdvantage}>
                        <p className={styles.listText}>Warps</p> 
                    </li>
                    <li className={styles.listAdvantage}>
                        <p className={styles.listText}>Auctions</p> 
                    </li>
                </ul>
            </div>
        </div>
        <div className={styles.sale}>
            <h1 className={styles.mainTitle}>SALE!</h1>
            <div className={styles.saleInfo}>
                <img src="./images/cake.gif" alt="cake.gif" className={styles.cake}/>
                <p className={styles.saleText}>In honour of the opening of our website, we can find shulker boxes with gifts in a random coordinates. In addiction, we have a reduction of action on all products up to 25%! Also watch the promo code: <span className={styles.yellow}>Eveline</span>.</p>
            </div>
            <p className={styles.saleText}>Until the end of the action remained</p>
            <Timer localization="eng"/>
        </div>
        <GoodsEng/>
        <div className={styles.shop}>
            <TradeMcWidget/>
            <h2 className={styles.dontwork}>Widget not working?**</h2>
            <div className={styles.shopBtn}>
                <a href="https://eveline.trademc.org" className={styles.shopLink}>Tap here</a>
            </div>
            <p className={styles.ps}>  *Item is valid for 30 days only</p>
            <p className={styles.ps}>  **Item is giving 1-2 days later</p>
        </div>
    </main>
    <Footer localization="eng"/>
    </>
    );
}

export default ContentEng;
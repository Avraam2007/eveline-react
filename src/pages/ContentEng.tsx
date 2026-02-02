import { useState } from 'react';
import styles from '../content.module.scss'
import TradeMcWidget from '../components/trademc';

function ContentEng() {
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
            setTime("IT'S OVER!");
            return;
        } 

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTime(`${days}d ${hours}h ${minutes}m ${seconds}s`);
        return;
    }

    setInterval(timer,1000);


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
            <p id="timer" className={styles.timer}>{time}</p>
        </div>
        <div className={styles.goods}>
            <h1 className={styles.mainTitle}>Goods</h1>
            <ul className={styles.goodsList}>
                <li className={styles.good}>
                    <div className={styles.top}>
                        <img src="./images/demon.png" alt="demon.png" className={styles.goodImage}/>
                        <h3 className={styles.goodTitle}>Demon</h3>
                        <ul className={styles.goodList}>
                            <li className={styles.goodAdvantage}>
                                <p className={styles.goodDescription}>Demon set</p>
                            </li>
                            <li className={styles.goodAdvantage}>
                                <p className={styles.goodDescription}>Demon sphere</p>
                            </li>
                            <li className={styles.goodAdvantage}>
                                <p className={styles.goodDescription}>Demon talisman</p>
                            </li>
                            <li className={styles.goodAdvantage}>
                                <p className={styles.goodDescription}>Prefix</p>
                            </li>
                            <li className={styles.goodAdvantage}>
                                <p className={styles.goodDescription}>2 set homes</p>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.bottom}>
                        <h4 className={styles.goodPrice}>20.00 ₴</h4>
                        <div className={styles.buyBtn}>
                            <a href="https://eveline.trademc.org" className={styles.buyLink}>Buy it!*</a>
                        </div>
                    </div>
                </li>
                <li className={styles.good}>
                    <div className={styles.top}>
                        <img src="./images/hermes.png" alt="hermes.png" className={styles.goodImage}/>
                        <h3 className={styles.goodTitle}>Hermes</h3>
                        <ul className={styles.goodList}>
                            <li className={styles.goodAdvantage}>
                                <p className={styles.goodDescription}>Hermes set</p>
                            </li>
                            <li className={styles.goodAdvantage}>
                                <p className={styles.goodDescription}>Hermes sphere</p>
                            </li>
                            <li className={styles.goodAdvantage}>
                                <p className={styles.goodDescription}>Hermes talisman</p>
                            </li>
                            <li className={styles.goodAdvantage}>
                                <p className={styles.goodDescription}>Prefix</p>
                            </li>
                            <li className={styles.goodAdvantage}>
                                <p className={styles.goodDescription}>2 set homes</p>
                            </li>
                            <li className={styles.goodAdvantage}>
                                <p className={styles.goodDescription}>Hermes pickaxe</p>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.bottom}>
                        <h4 className={styles.goodPrice}>50.00 ₴</h4>
                        <div className={styles.buyBtn}>
                            <a href="https://eveline.trademc.org" className={styles.buyLink}>Buy it!*</a>
                        </div>
                    </div>
                </li>
                <li className={styles.good}>
                    <div className={styles.top}>
                        <img src="./images/hephaestus.png" alt="hephaestus.png" className={styles.goodImage}/>
                        <h3 className={styles.goodTitle}>Hephaestus</h3>
                        <ul className={styles.goodList}>
                            <li className={styles.goodAdvantage}>
                                <p className={styles.goodDescription}>Hephaestus set</p>
                            </li>
                            <li className={styles.goodAdvantage}>
                                <p className={styles.goodDescription}>Hephaestus sphere</p>
                            </li>
                            <li className={styles.goodAdvantage}>
                                <p className={styles.goodDescription}>Hephaestus talisman</p>
                            </li>
                            <li className={styles.goodAdvantage}>
                                <p className={styles.goodDescription}>Prefix</p>
                            </li>
                            <li className={styles.goodAdvantage}>
                                <p className={styles.goodDescription}>2 set homes</p>
                            </li>
                            <li className={styles.goodAdvantage}>
                                <p className={styles.goodDescription}>Hephaestus pickaxe</p>
                            </li>
                            <li className={styles.goodAdvantage}>
                                <p className={styles.goodDescription}>15-minute flight</p>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.bottom}>
                        <h4 className={styles.goodPrice}>100.00 ₴</h4>
                        <div className={styles.buyBtn}>
                            <a href="https://eveline.trademc.org" className={styles.buyLink}>Buy it!*</a>
                        </div>
                    </div>
                </li>
                <li className={styles.good}>
                    <div className={styles.top}>
                        <img src="./images/hades.png" alt="hades.png" className={styles.goodImage}/>
                        <h3 className={styles.goodTitle}>Hades</h3>
                        <ul className={styles.goodList}>
                            <li className={styles.goodAdvantage}>
                                <p className={styles.goodDescription}>Hades set</p>
                            </li>
                            <li className={styles.goodAdvantage}>
                                <p className={styles.goodDescription}>Hades sphere</p>
                            </li>
                            <li className={styles.goodAdvantage}>
                                <p className={styles.goodDescription}>Hades talisman</p>
                            </li>
                            <li className={styles.goodAdvantage}>
                                <p className={styles.goodDescription}>Prefix</p>
                            </li>
                            <li className={styles.goodAdvantage}>
                                <p className={styles.goodDescription}>3 set homes</p>
                            </li>
                            <li className={styles.goodAdvantage}>
                                <p className={styles.goodDescription}>Hades pickaxe</p>
                            </li>
                            <li className={styles.goodAdvantage}>
                                <p className={styles.goodDescription}>30-minute flight</p>
                            </li>
                            <li className={styles.goodAdvantage}>
                                <p className={styles.goodDescription}>Healing and feeding commands</p>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.bottom}>
                        <h4 className={styles.goodPrice}>150.00 ₴</h4>
                        <div className={styles.buyBtn}>
                            <a href="https://eveline.trademc.org" className={styles.buyLink}>Buy it!*</a>
                        </div>
                    </div>
                </li>

                <li className={styles.good}>
                    <div className={styles.top}>
                        <img src="./images/zeus.png" alt="zeus.png" className={styles.goodImage}/>
                        <h3 className={styles.goodTitle}>Zeus</h3>
                        <ul className={styles.goodList}>
                            <li className={styles.goodAdvantage}>
                                <p className={styles.goodDescription}>Zeus set</p>
                            </li>
                            <li className={styles.goodAdvantage}>
                                <p className={styles.goodDescription}>Zeus sphere</p>
                            </li>
                            <li className={styles.goodAdvantage}>
                                <p className={styles.goodDescription}>Zeus talisman</p>
                            </li>
                            <li className={styles.goodAdvantage}>
                                <p className={styles.goodDescription}>Prefix</p>
                            </li>
                            <li className={styles.goodAdvantage}>
                                <p className={styles.goodDescription}>4 set homes</p>
                            </li>
                            <li className={styles.goodAdvantage}>
                                <p className={styles.goodDescription}>Zeus pickaxe</p>
                            </li>
                            <li className={styles.goodAdvantage}>
                                <p className={styles.goodDescription}>45-minute flight</p>
                            </li>
                            <li className={styles.goodAdvantage}>
                                <p className={styles.goodDescription}>Healing and feeding commands</p>
                            </li>
                            <li className={styles.goodAdvantage}>
                                <p className={styles.goodDescription}>Ender Chest whenever you want</p>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.bottom}>
                        <h4 className={styles.goodPrice}>500.00 ₴</h4>
                        <div className={styles.buyBtn}>
                            <a href="https://eveline.trademc.org" className={styles.buyLink}>Buy it!*</a>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
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
    <footer>
        <div className={styles.info}>
            <p className={styles.footerName} onClick={toTheTop}>EVELINE</p>
            <p className={styles.footerCopyright}>    IP: eveline.gomc.fun</p>
            <p className={styles.footerCopyright}>    Port number: 7477</p>
            <p className={styles.footerCopyright}>    Shop: <a href="https://eveline.trademc.org" className={styles.footerLink1}>https://eveline.trademc.org</a></p>
            <p className={styles.footerCopyright}>    E-mail: <a href="mailto:eveline.gomc.supp@gmail.com" className={styles.footerLink1}>eveline.gomc.supp@gmail.com</a></p>
        </div>
        <a href="https://discord.gg/j4zgSQ3w" className={styles.discord}><img src="./images/discord.png" alt="discord.png" className={styles.discordImg}/></a>
    </footer>
    </>
    );
}

export default ContentEng;
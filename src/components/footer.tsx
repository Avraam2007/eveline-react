import styles from '../content.module.scss';


interface ILocalization {
    localization:string;
}


function Footer({localization}:ILocalization) {
    const toTheTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    return (
        <footer>
            <div className={styles.info}>
                <p className={styles.footerName} onClick={toTheTop}>EVELINE</p>
                <p className={styles.footerCopyright}>
                        IP: eveline.gomc.fun
                </p>
                <p className={styles.footerCopyright}>
                        {localization === "ukr" || localization === "rus" ? "Порт" : "Port number"}: 7477
                </p>
                <p className={styles.footerCopyright}>
                        {localization === "ukr" || localization === "rus" ? "Магазин" : "Shop"}: <a href="https://eveline.trademc.org" className={styles.footerLink1}>https://eveline.trademc.org</a>
                </p>
                <p className={styles.footerCopyright}>
                        E-mail: <a href="mailto:eveline.gomc.supp@gmail.com" className={styles.footerLink1}>eveline.gomc.supp@gmail.com</a>
                </p>
            </div>
            <a href="https://discord.gg/j4zgSQ3w" className={styles.discord}><img src="./images/discord.png" alt="discord.png" className={styles.discordImg}/></a>
        </footer>
    )
}

export default Footer;
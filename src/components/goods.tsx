import styles from '../content.module.scss'
import sets from "../sets.json";

function GoodsEng() {
    return (
        <div className={styles.goods}>
            <h1 className={styles.mainTitle}>Goods</h1>
            <ul className={styles.goodsList}>
                {sets.map((element,idx) => {
                    return(<li key={element.id} className={styles.good}>
                        <div className={styles.top}>
                            <img src={element.image} alt={element.shortImage} className={styles.goodImage}/>
                            <h3 className={styles.goodTitle}>{element.name}</h3>
                            <ul className={styles.goodList}>
                                {element.pros.map((el,index)=> {
                                    return (<li className={styles.goodAdvantage} key={index+100}>
                                        <p className={styles.goodDescription}>{el}</p>
                                    </li>)
                                })}
                            </ul>
                        </div>
                        <div className={styles.bottom}>
                            <h4 className={styles.goodPrice}>{element.price}</h4>
                            <div className={styles.buyBtn}>
                                <a href="https://eveline.trademc.org" className={styles.buyLink}>Buy it!*</a>
                            </div>
                        </div>
                    </li>
                )})}
            </ul>
        </div>
    );
}

export default GoodsEng;
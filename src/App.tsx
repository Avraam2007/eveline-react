import styles from './App.module.scss'
import { Link, Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useRef } from 'react';

const TITLE = "Eveline";

function App() {
  const burger = useRef<HTMLDivElement>(null);

  const toTheTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
  }

  function onBurgerClick() {
    if(burger.current) {
      if(burger.current.style.display === "flex") {
        burger.current.style.display = "none";
      }
      else {
        burger.current.style.display = "flex";
      }
    }
  }

  return (
    <><Helmet>
      <meta charSet="utf-8" />
      <title>{TITLE}</title>
    </Helmet><div className="App">
        <header className={styles.header}>
          <div className={styles.logoLink} onClick={toTheTop}><img src="./images/logo.png" alt="logo.png" className={styles.logo}/></div>
          <nav className={styles.navMain}>
            <ul className={styles.languages}>
                <li className={styles.language}>
                    <Link className={styles.languageLink} to="/uk">
                        <p className={styles.languageText}>UKR</p>
                    </Link>
                </li>
                <li className={styles.language}>
                    <Link className={styles.languageLink} to="/ru">
                        <p className={styles.languageText}>RUS</p>
                    </Link>
                </li>
                <li className={styles.language}>
                    <Link className={styles.languageLink} to="/en">
                        <p className={styles.languageText}><span className={styles.yellow}>ENG</span></p>
                    </Link>
                </li>
            </ul>
            <div className={styles.menuIcon} id="burgerMenu" onClick={onBurgerClick}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className={styles.langContainer} id="langContainer" ref={burger}>
                <li className={styles.language}>
                    <Link className={styles.languageLink} to="/uk">
                        <p className={styles.languageText}>UKR</p>
                    </Link>
                </li>
                <li className={styles.language}>
                    <Link className={styles.languageLink} to="/ru">
                        <p className={styles.languageText}>RUS</p>
                    </Link>
                </li>
                <li className={styles.language}>
                    <Link className={styles.languageLink} to="/en">
                        <p className={styles.languageText}><span className={styles.yellow}>ENG</span></p>
                    </Link>
                </li>
        </div>
          </nav>
        </header>
        <main className={styles.main}>
          <Outlet />
        </main>
      </div></>
  );
}

export default App;

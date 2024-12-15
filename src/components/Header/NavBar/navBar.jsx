import styles from "/src/components/Header/NavBar/navBar.module.css"
import { Link } from "@tanstack/react-router";

export const NavBar = () => {
    return(
        <div className={styles.NavBar}>
            <Link to="/aboutUs"><p className={styles.NavBar__p}>О нас</p></Link>
            <Link to="/brends"><p className={styles.NavBar__p}>Бренды</p></Link>
            <Link><p className={styles.NavBar__p}>Каталог</p></Link>
            <Link to="/contacts"><p className={styles.NavBar__p}>Контакты</p></Link>
            <Link to="/pay"><p className={styles.NavBar__p}>Способы оплаты</p></Link>
            <Link to="/dostavka"><p className={styles.NavBar__p}>Доставка</p></Link>
        </div>
    );
}
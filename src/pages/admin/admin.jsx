import styles from "/src/pages/admin/admin.module.css";
import { Link } from "@tanstack/react-router";

export const Admin = () => {
    return (
        <div className={styles.Admin}>
            <div className={styles.Admin__inner}>
                <div className={styles.Admin__inner_navig}>
                    <Link to="/"><p>Главная /</p></Link>
                    <Link to="/profile"><p>Личный кабинет /</p></Link>
                    <p>Добавление товара</p>
                </div>
                <div className={styles.Admin__inner_content}>

                </div>
            </div>
        </div>
    )
}
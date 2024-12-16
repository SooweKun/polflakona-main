import styles from "/src/pages/aboutUs/map/map.module.css"
import map from "/src/assets/map.png"

export const Map = () => {
    return (
        <div className={styles.Map}>
            <div className={styles.Map__inner}>
                <div className={styles.content}>
                    <h1>Мы работаем</h1>
                    <h2>ВО  ВСЕМ МИРЕ</h2>
                </div>
                <div className={styles.Map_text}>
                    <p>Наша парфюмерия - это международная компания,
                       которая работает в разных странах мира.
                       Мы гордимся тем, что наши ароматы любят и ценят
                       люди разных культур и национальностей.
                    </p>
                    <img src={map} alt="" />
                </div>
            </div>
        </div>
    );
}
import styles from "/src/pages/aboutUs/mission/mission.module.css"
import catalog from "/src/assets/catalog.png"

export const Mission = () => {
    return (
        <div className={styles.Mission}>
            <div className={styles.Mission__inner}>
                <img src={catalog} alt="" />
                <div className={styles.Mission__inner_content}>
                    <h1><span>наша</span>МИССИЯ</h1>
                    <p>Мы стремимся сделать мир парфюмерии доступным для каждого.
                       Мы тщательно отбираем только лучшие бренды и эксклюзивные
                       ароматы, чтобы предложить вам широкий ассортимент, который
                       удовлетворит даже самых взыскательных ценителей.
                    </p>
                </div>
            </div>
        </div>
    );
}
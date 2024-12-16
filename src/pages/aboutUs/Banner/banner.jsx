import styles from "./banner.module.css"

export const Banner = () => {
    return (
        <div className={styles.Banner}>
            <div className={styles.Banner__inner}>
                <div className={styles.Banner__text}>
                    <p className={styles.Banner__description}>
                        Добро пожаловать
                    </p>
                    <p className={styles.Banner__description}>
                        в парфюмерный онлайн-бар
                    </p>
                    <h1 className={styles.Banner__title}> PolFlacona</h1>
                </div>
            </div>
        </div>
    )
}
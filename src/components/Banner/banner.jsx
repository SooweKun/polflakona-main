import { useNavigate } from "@tanstack/react-router"
import styles from "./banner.module.css"

export const Banner = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate({ to: '/catalog' })
    }

    return (
        <div className={styles.Banner}>
            <div className={styles.Banner__inner}>
                <div className={styles.Banner__text}>
                    <h1 className={styles.Banner__title}>PolFlacona</h1>
                    <p className={styles.Banner__description}>
                    Это пространство, с самой разной парфюмерией: <br />
                    от классики до ниши, от России до Франции и Италии,
                    от популярного до никому неизвестного.</p>
                </div>
                <button className={styles.Banner__button} onClick={handleClick}>СМОТРЕТЬ</button>
            </div>
        </div>
    )
}
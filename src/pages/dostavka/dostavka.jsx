import styles from "/src/pages/dostavka/dostavka.module.css"
import { Link } from "@tanstack/react-router";
import { Footer } from "/src/components/Footer/footer.jsx";
import boxberry from "/src/assets/boxberry.png"
import pochta from "/src/assets/pochta.png"
import yandex from "/src/assets/yandex.png"
import sdek from "/src/assets/sdek.png"

const info = {
    data: [
        {
            id: 1,
            img: boxberry,
            text: "Специализация на быстрой доставке и самовывозе."
        },

        {
            id: 2,
            img: yandex,
            text: "Быстрая доставка от Яндекса: курьер и самовывоз."
        },

        {
            id: 3,
            img: sdek,
            text: "Удобная доставка с различными тарифами и пунктами."
        },

        {
            id: 4,
            img: pochta,
            text: "Классическая доставка с широкой сетью и доступными тарифами."
        }
    ]
}

export const Dostavka = () => {
    return (
        <div className={styles.Dostavka}>
            <div className={styles.Dostavka__inner}>
                <div className={styles.Dostavka__inner_navig}>
                    <Link><p>Главная /</p></Link>
                    <p className={styles.Dostavka__inner_navig_p}>Доставка</p>
                </div>
                <h1>Доставка</h1>
                <p>МЫ ОСУЩЕСТВЛЯЕМ ДОСТАВКУ ВО ВСЕ РЕГИОНЫ <br /> СТРАНЫ СЛЕДУЮЩИМИ СПОСОБАМИ</p>
                <div className={styles.Dostavka__inner_content}>
                    {info.data.map(({ id, img, text }) => (
                        <div className={styles.content_card} key={id}>
                            <img src={img} alt="" />
                            <div className={styles.overlay}>
                                <p className={styles.overlayText}>{text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}
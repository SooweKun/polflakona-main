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
        },

        {
            id: 2,
            img: yandex,
        },

        {
            id: 3,
            img: sdek,
        },

        {
            id: 4,
            img: pochta,
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
                    {info.data.map(({id, img}) => (
                        <div className={styles.content_card} key={id}>
                            <img src={img} alt="" />
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}
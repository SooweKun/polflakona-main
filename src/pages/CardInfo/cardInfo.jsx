import { useDataStore } from "/src/store/store";
import { Link } from "@tanstack/react-router";
import { MainSlider } from "/src/components/MainSlider/mainSlider.jsx";
import { MainSlider2 } from "/src/pages/CardInfo/MainSlider2/mainSlider2.jsx";
import { Footer } from "/src/components/Footer/footer.jsx";
import styles from "/src/pages/CardInfo/cardInfo.module.css"
import { InfoMain } from "./infoMain/infoMain";
import { useEffect } from "react";


export const CardInfo = () => {
    const data = useDataStore(state => state.data)

    return (
        <div className={styles.CardInfo}>
            <div className={styles.CardInfo__inner}>
                <div className={styles.CardInfo__inner_navig}>
                    <Link to="/"><p>Главная /</p></Link>
                    <Link><p>Наш каталог /</p></Link>
                    {data.map(({ title, id }) => (
                        <p className={styles.CardInfo__inner_navig_p} key={id}>{title}</p>
                    ))}
                </div>
                {data.map(({ title, id }) => (
                    <h1 className={styles.h1} key={id}>{title}</h1>
                ))}
                {
                    data.map(({ title, id, img, price }) => (
                        <InfoMain
                            title={title}
                            key={id}
                            img={img}
                            price={price}
                        />
                    ))
                }
            </div>
            <MainSlider />
            <MainSlider2 />
            <Footer />
        </div>
    );
}
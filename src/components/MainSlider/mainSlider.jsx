/* eslint-disable react/prop-types */
// import { Card } from "./Card/card";
import { Heart } from "/src/components/MainSlider/heart/heart.jsx";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import styles from "/src/components/MainSlider/mainSlider.module.css"
import { useStore } from "/src/store/store";
import { useState } from "react";
import one from "/src/assets/1.png"
import two from "/src/assets/2.png"
import three from "/src/assets/3.png"
import four from "/src/assets/4.png"
import five from "/src/assets/5.png"
import nextImg from "/src/assets/right.svg"
import backImg from "/src/assets/left.svg"

const info = {
    data: [
        {
            id: 1,
            price: "7 889 ₽ ",
            img: one,
            title: "Akro /",
            name: "Bake"
        },

        {
            id: 2,
            price: "5 889 ₽ ",
            img: two,
            title: "KARL LAGERFELD /",
            name: "Shibuya"
        },

        {
            id: 3,
            price: "7 199 ₽ ",
            img: three,
            title: "ROBERTO CAVALLI /",
            name: "Just Cavalli"
        },

        {
            id: 4,
            price: "6 689 ₽ ",
            img: four,
            title: "JIMMY CHOO /",
            name: "Urban Hero"
        },

        {
            id: 5,
            price: "8 869 ₽ ",
            img: five,
            title: "DOLCE&GABBANA /",
            name: "L'peratrice"
        }
    ]
}

export const MainSlider = () => {
    const countPlus = useStore(state => state.countPlus)
    const [fill, setFill] = useState("none");

    const handleClick = () => {
        setFill(prev => prev === "none" ? "#603699" : "none" )
    }

    const responsive = {
        1440: { items: 4 },
        1440: { items: 4 },
        1440: { items: 4 },
        1440: { items: 4 },
    };

    const items = info.data.map(({id, price, img, title, name}) => (
        <div className={styles.MainSlider__card} key={id}>
            <div className={styles.MainSlider__card_imgs}>
                <Heart
                    fill={fill}
                    handleClick={handleClick}
                    className={styles.MainSlider__card_favorite}
                />
                <img src={img} alt="" className={styles.MainSlider__card_flacon}/>
            </div>
            <div className={styles.MainSlider__card_text}>
                <h1 className={styles.MainSlider__card_text_price}>{price}</h1>
                <p className={styles.MainSlider__card_text_title}>{title}<span>{name}</span></p>
                <p className={styles.MainSlider__card_text_p}>Есть в наличие</p>
            </div>
            <div className={styles.MainSlider__card_btn}>
                <button className={styles.MainSlider__card_btn_carzina} onClick={countPlus}>В корзину</button>
                <button className={styles.MainSlider__card_btn_click}>Купить в 1 клик</button>
            </div>
        </div>
    ))
        
    return(
        <div className={styles.MainSlider}>
            <div className={styles.MainSlider__inner}>
                <h1 className={styles.MainSlider__inner_h1}>ХИТЫ ПРОДАЖ </h1>
                <div className={styles.MainSlider__cards}>
                    <img src={backImg} alt="" className={styles.back}/>
                    <AliceCarousel
                        mouseTracking
                        items={items}
                        responsive={responsive}
                        controlsStrategy="alternate"
                    />
                    <img src={nextImg} alt="" className={styles.next}/>
                </div>
            </div>
        </div>
    );
}
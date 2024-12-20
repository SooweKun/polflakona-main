/* eslint-disable no-dupe-keys */
/* eslint-disable react/prop-types */
// import { Card } from "./Card/card";
import { Heart } from "/src/components/MainSlider/heart/heart.jsx";
import styles from "/src/components/MainSlider/mainSlider.module.css"
import { useStoreCard } from "/src/store/store";
import { useState } from "react";
import { useNavigate } from '@tanstack/react-router';
import one from "/src/assets/1.png"
import two from "/src/assets/2.png"
import three from "/src/assets/3.png"
import four from "/src/assets/4.png"
import five from "/src/assets/5.png"
import nextImg from "/src/assets/right.svg"
import backImg from "/src/assets/left.svg"
import axios from "axios";

const info = {
    data: [
        {
            id: 1,
            price: 7889,
            img: one,
            title: "Akro /",
            name: "Bake"
        },

        {
            id: 2,
            price: 5889,
            img: two,
            title: "KARL LAGERFELD /",
            name: "Shibuya"
        },

        {
            id: 3,
            price: 7199,
            img: three,
            title: "ROBERTO CAVALLI /",
            name: "Just Cavalli"
        },

        {
            id: 4,
            price: 6689,
            img: four,
            title: "JIMMY CHOO /",
            name: "Urban Hero"
        },

        {
            id: 5,
            price: 8869,
            img: five,
            title: "DOLCE&GABBANA /",
            name: "L'peratrice"
        }
    ]
}



export const MainSlider = () => {
    const navigate = useNavigate();
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 4;

    const ofor = () => {
        axios.get("")
    }

    const handleNext = () => {
        if (currentIndex + itemsPerPage < info.data.length) {
            setCurrentIndex(prevIndex => prevIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevIndex => prevIndex - 1);
        }
    };  

    return (
        <div className={styles.MainSlider}>
            <div className={styles.MainSlider__inner}>
                <h1 className={styles.MainSlider__inner_h1}>ХИТЫ ПРОДАЖ </h1>
                <div className={styles.MainSlider__cards}>
                    <img src={backImg} alt="" className={styles.back} onClick={handlePrev} disabled={currentIndex === 0}/>
                    {info.data.slice(currentIndex, currentIndex + itemsPerPage).map(({ id, price, img, title, name }) => {
                        const addCard = useStoreCard(state => state.addCard)
                        const [fill, setFill] = useState("none");
                        const card = useStoreCard(state => state.card)
                        const handleClick = () => {
                            setFill(prev => prev === "none" ? "#603699" : "none")
                        }
                        const ofor = () => {
                            navigate({to: '/oformlenie'})
                            addCard({ id, price, title, img})
                        }
                        return (
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
                                    <h1 className={styles.MainSlider__card_text_price}>{price.toLocaleString('en-US')} ₽</h1>
                                    <p className={styles.MainSlider__card_text_title}>{title}<span>{name}</span></p>
                                    <p className={styles.MainSlider__card_text_p}>Есть в наличие</p>
                                </div>
                                <div className={styles.MainSlider__card_btn}>
                                    <button className={styles.MainSlider__card_btn_carzina} onClick={() => addCard({ id, price, img, title, name })}>В корзину</button>
                                    <button className={styles.MainSlider__card_btn_click} onClick={ofor}>Купить в 1 клик</button>
                                </div>
                            </div>
                        )
                    })
                    }
                    <img src={nextImg} alt="" className={styles.next} onClick={handleNext} disabled={currentIndex + itemsPerPage >= info.data.length}/>
                </div>
            </div>
        </div>
    );
}
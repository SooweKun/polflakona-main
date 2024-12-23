/* eslint-disable no-dupe-keys */
/* eslint-disable react/prop-types */
// import { Card } from "./Card/card";
import { Heart } from "/src/components/MainSlider/heart/heart.jsx";
import styles from "/src/pages/CardInfo/MainSlider2/mainSlider2.module.css"
import { useStoreCard, useDataStore } from "/src/store/store";
import { useState } from "react";
import { useNavigate } from '@tanstack/react-router';
import four from "/src/assets/4.png"
import six from "/src/assets/6.png"
import seven from "/src/assets/7.png"
import eight from "/src/assets/8.png"
import nine from "/src/assets/9.png"
import nextImg from "/src/assets/next2.svg"
import backImg from "/src/assets/back2.svg"
import axios from "axios";

const info = {
    data: [
        {
            id: 1,
            price: 6689,
            img: four,
            title: "JIMMY CHOO /",
            name: "Urban Hero"
        },

        {
            id: 2,
            price: 6559,
            img: six,
            title: "YOU /",
            name: "Tobacco & Vanilla"
        },

        {
            id: 3,
            price: 6559,
            img: seven,
            title: "LAB FRAGRANCE /",
            name: "Chinese plum"
        },

        {
            id: 4,
            price: 7889,
            img: eight,
            title: "ZADIG&VOLTAIRE  /",
            name: "This is her!"
        },

        {
            id: 5,
            price: 5559,
            img: nine,
            title: "MOSCHINO  /",
            name: "Funny"
        },
    ]
}



export const MainSlider2 = () => {
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
                <h1 className={styles.MainSlider__inner_h1}>Похожие товары  </h1>
                <div className={styles.MainSlider__cards}>
                    <img src={backImg} alt="" className={styles.back} onClick={handlePrev} disabled={currentIndex === 0} />
                    {info.data.slice(currentIndex, currentIndex + itemsPerPage).map(({ id, price, img, title, name }) => {
                        const addCard = useStoreCard(state => state.addCard)
                        const addData = useDataStore(state => state.addData)
                        const [fill, setFill] = useState("none");
                        const card = useStoreCard(state => state.card)
                        const handleClick = () => {
                            setFill(prev => prev === "none" ? "#603699" : "none")
                        }
                        const ofor = () => {
                            navigate({ to: '/oformlenie' })
                            addData({ id, price, title, img })
                        }
                        const imgClick = () => {
                            navigate({ to: '/cardinfo' })
                            addData({ id, price, title, img })
                        }
                        return (
                            <div className={styles.MainSlider__card} key={id}>
                                <div className={styles.MainSlider__card_imgs}>
                                    <Heart
                                        fill={fill}
                                        handleClick={handleClick}
                                        className={styles.MainSlider__card_favorite}
                                    />
                                    <img src={img} alt="" className={styles.MainSlider__card_flacon} onClick={imgClick}/>
                                </div>
                                <div className={styles.MainSlider__card_text}>
                                    <h1 className={styles.MainSlider__card_text_price}>{price.toLocaleString('ru-RU')} ₽</h1>
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
                    <img src={nextImg} alt="" className={styles.next} onClick={handleNext} disabled={currentIndex + itemsPerPage >= info.data.length} />
                </div>
            </div>
        </div>
    );
}
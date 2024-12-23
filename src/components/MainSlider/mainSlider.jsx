/* eslint-disable no-dupe-keys */
/* eslint-disable react/prop-types */
// import { Card } from "./Card/card";
import { Heart } from "/src/components/MainSlider/heart/heart.jsx";
import styles from "/src/components/MainSlider/mainSlider.module.css"
import { useStoreCard, useDataStore } from "/src/store/store";
import { useState, useEffect } from "react";
import { useNavigate } from '@tanstack/react-router';
import one from "/src/assets/1.png"
import two from "/src/assets/2.png"
import three from "/src/assets/3.png"
import four from "/src/assets/4.png"
import five from "/src/assets/5.png"
import nextImg from "/src/assets/right.svg"
import backImg from "/src/assets/left.svg"
import axios from "axios";
import { useMediaQuery } from "react-responsive";

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
    const [itemsPerPage, setItemsPerPage] = useState(4);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fillStates, setFillStates] = useState({});
    const navigate = useNavigate();
    const addCard = useStoreCard(state => state.addCard);
    const addData = useDataStore(state => state.addData);

    const updateItemsPerPage = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth <= 376) {
            setItemsPerPage(1);
            setCurrentIndex(0); // Сбрасываем индекс на 0 для мобильной версии
        } else {
            setItemsPerPage(4);
            // Проверяем, не превышает ли currentIndex количество элементов
            if (currentIndex >= info.data.length) {
                setCurrentIndex(Math.max(0, info.data.length - 4)); // Устанавливаем currentIndex в допустимый диапазон
            }
        }
    };

    useEffect(() => {
        updateItemsPerPage(); // Инициализация при монтировании
        window.addEventListener('resize', updateItemsPerPage); // Добавление обработчика события изменения размера окна
        return () => {
            window.removeEventListener('resize', updateItemsPerPage); // Удаление обработчика при размонтировании
        };
    }, []);

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

    const toggleFill = (id) => {
        setFillStates(prev => ({
            ...prev,
            [id]: prev[id] === 'none' ? '#603699' : 'none'
        }));
    };

    return (
        <div className={styles.MainSlider}>
            <div className={styles.MainSlider__inner}>
                <h1 className={styles.MainSlider__inner_h1}>ХИТЫ ПРОДАЖ </h1>
                <div className={styles.MainSlider__cards}>
                    <img src={backImg} alt="" className={styles.back} onClick={handlePrev} disabled={currentIndex === 0} />
                    {info.data.slice(currentIndex, currentIndex + itemsPerPage).map(({ id, price, img, title, name }) => {
                        const ofor = () => {
                            navigate({ to: '/oformlenie' })
                            addData({ id, price, title, img })
                        }
                        const imgClick = () => {
                            navigate({ to: '/cardInfo' })
                            addData({ id, price, title, img })
                        }
                        return (
                            <div className={styles.MainSlider__card} key={id}>
                                <div className={styles.MainSlider__card_imgs}>
                                    <Heart
                                         fill={fillStates[id] || 'none'}
                                        handleClick={() => toggleFill(id)}
                                        className={styles.MainSlider__card_favorite}
                                    />
                                    <img src={img} alt="" className={styles.MainSlider__card_flacon} onClick={imgClick} />
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
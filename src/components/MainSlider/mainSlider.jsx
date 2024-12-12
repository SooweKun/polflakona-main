/* eslint-disable react/prop-types */
import { Card } from "./Card/card";
import { useState } from "react"
import styles from "/src/components/MainSlider/mainSlider.module.css"
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
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent(current === info.data.length - 1 ? 0 : current + 4);
      };

      const prevSlide = () => {
        setCurrent(current === 0 ? info.data.length - 1 : current - 4);
      };

    return(
        <div className={styles.MainSlider}>
            <div className={styles.MainSlider__inner}>
                <h1 className={styles.MainSlider__inner_h1}>ХИТЫ ПРОДАЖ </h1>
                <div className={styles.MainSlider__cards}>
                    <img src={backImg} alt="" className={styles.back} onClick={prevSlide}/>
                    {info.data.map((img, index) => 
                        (
                            <Card 
                                key={img.id} 
                                price={img.price} 
                                img={img.img} 
                                title={img.title} 
                                name={img.name} 
                                id={img.id} 
                            />
                        ) 
                    )}
                    <img src={nextImg} alt="" className={styles.next} onClick={nextSlide}/>
                </div>
            </div>
        </div>
    );
}
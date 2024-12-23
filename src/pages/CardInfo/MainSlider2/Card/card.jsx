/* eslint-disable react/prop-types */
import styles from "/src/components/MainSlider/Card/card.module.css"
import { Heart } from "../heart/heart";
import { useState } from "react"
import { useStore } from "/src/store/store";

export const Card = ({price, img, title, name, id}) => { 
    const countPlus = useStore(state => state.countPlus)
    const [fill, setFill] = useState("none");

    const handleClick = () => {
        setFill(prev => prev === "none" ? "#603699" : "none" )
    }

    return(
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
                <h1 className={styles.MainSlider__card_text_price}>{price.toLocaleString('ru-RU')} ₽</h1>
                <p className={styles.MainSlider__card_text_title}>{title}<span>{name}</span></p>
                <p className={styles.MainSlider__card_text_p}>Есть в наличие</p>
            </div>
            <div className={styles.MainSlider__card_btn}>
                <button className={styles.MainSlider__card_btn_carzina} onClick={countPlus}>В корзину</button>
                <button className={styles.MainSlider__card_btn_click}>Купить в 1 клик</button>
            </div>
        </div>
    );
}
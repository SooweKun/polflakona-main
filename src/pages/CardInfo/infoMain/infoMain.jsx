import styles from "/src/pages/CardInfo/infoMain/infoMain.module.css"
import { Heart } from "/src/components/MainSlider/heart/heart.jsx";
import { useStoreCard } from "/src/store/store";
import { useState } from "react";

export const InfoMain = ({ title, id, img, price }) => {
    const [fill, setFill] = useState("none");
    const handleClick = () => {
        setFill(prev => prev === "none" ? "white" : "none" )
    }
    const addCard = useStoreCard(state => state.addCard)
    return (
        <div className={styles.CardInfo__inner_main}>
            <div className={styles.CardInfo__inner_main_info}>
                <div className={styles.info_imgs}>
                    <div className={styles.info_imgSmall}>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className={styles.info_imgBig}>
                        <img src={img} alt="" />
                    </div>
                </div>
                <div className={styles.info_text}>
                    <div className={styles.text}>
                        <h1>Туалетная вода, спрей </h1>
                        <div className={styles.text_btn}>
                            <button>30мл</button>
                            <button>50мл</button>
                            <button>70мл</button>
                        </div>
                    </div>
                    <div className={styles.text_info}>
                        <div className={styles.text_info_text}>
                            <p>Код продукта </p>
                            <p>000000001</p>
                        </div>
                        <div className={styles.text_info_text}>
                            <p>Тип продукта </p>
                            <p>туалетная вода</p>
                        </div>
                        <div className={styles.text_info_text}>
                            <p>Базовые ноты </p>
                            <p> ambroxan, кедр, сандал</p>
                        </div>
                        <div className={styles.text_info_text}>
                            <p>Верхние ноты </p>
                            <p> персик, ананас, бергамот</p>
                        </div>
                        <div className={styles.text_info_text}>
                            <p>Ноты сердца  </p>
                            <p>ландыш, жасмин, роза</p>
                        </div>
                        <div className={styles.text_info_text}>
                            <p>Для кого</p>
                            <p> для взрослых</p>
                        </div>
                        <div className={styles.text_info_text}>
                            <p>Пол </p>
                            <p> женский</p>
                        </div>
                    </div>
                </div>
                <div className={styles.info_price}>
                    <div className={styles.price_text}>
                        <p>Цена только для тебя</p>
                        <div className={styles.text}>
                            <h1>{price.toLocaleString('en-US')} ₽</h1>
                            <div className={styles.text_minus}>
                                <p>Стало дешевле</p>
                                <p>2 099 ₽</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.price_btns}>
                        <p>Есть в наличии</p>
                        <div className={styles.price_btn}>
                            <button onClick={() => addCard({ id, price, img, title })}>В КОРЗИНУ</button>
                            <button>
                                <Heart
                                    fill={fill}
                                    handleClick={handleClick}
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.CardInfo__inner_main_text}>
                <h1>Описание</h1>
                <p>Приготовьтесь стать звездой обложки своей уникальной жизни. Playboy Fragrances считает, что у каждого есть звёздные качества, и каждый может попасть на заветную первую полосу.Make the Cover For Her, разработанный страстными парфюмерами Роксаной Киркпатрик и Луизой Тернер, представляет собой яркий аромат с цветочными, фруктовыми и древесными нотами.</p>
            </div>
        </div>
    );
}
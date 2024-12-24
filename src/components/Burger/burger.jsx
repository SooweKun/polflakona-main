import styles from "/src/components/Burger/burger.module.css";
import { Link } from "@tanstack/react-router";
import burger from "/src/assets/burger.svg"
import krest from "/src/assets/krest.svg"
import whatsup from "/src/assets/wtsuup.svg"
import tg from "/src/assets/tg.svg"
import vk from "/src/assets/vk.svg"
import { useState } from "react";

export const Burger = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    }

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <div className={styles.Burger}>
            <img src={burger} alt="" onClick={handleOpen}/>
            {open &&
                <div className={styles.Module}>
                    <div className={styles.Module__inner}>
                        <Link to="/"><p>POLFLACONA</p></Link>
                        <img src={krest} alt="" onClick={handleClose}/>
                    </div>
                    <div className={styles.navig}>
                        <Link to="/aboutUs">О нас</Link>
                        <Link to="/brends">Бренды</Link>
                        <Link to="/catalog">Каталог</Link>
                        <Link to="/contacts">Контакты</Link>
                        <Link to="/pay">Способы оплаты</Link>
                        <Link to="/dostavka">Доставка</Link>
                    </div>
                    <div className={styles.Module__buttons}>
                        <p>Адрес: Большой
                            Гнездниковский переулок д.7</p>
                        <p>Email: polflacona@yandex.ru</p>
                        <p>+7 985 853-30-02 </p>
                        <p>ИНН 644000557305</p>
                    </div>
                    <div className={styles.Module__icons}>
                        <img src={whatsup} alt="" />
                        <img src={tg} alt="" />
                        <img src={vk} alt="" />
                    </div>
                    <div className={styles.Module__text}>
                        <p>  © 2023 – 2024. «Полфлакона».
                            Все права защищены.</p>
                    </div>
                </div>}
        </div>
    );
}
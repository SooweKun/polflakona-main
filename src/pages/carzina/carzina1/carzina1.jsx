import styles from "/src/pages/carzina/carzina1/carzina1.module.css"
import carzina from "/src/assets/carzina.png";
import { Link } from "@tanstack/react-router";

export const Carzina1 = () => {
    return (
        <div className={styles.Carzina__inner_content}>
            <div className={styles.content__text}>
                <h1>В вашей корзине ничего нет ....</h1>
                <p>воспользуйтесь каталогом и добавьте в корзину товары</p>
                <Link to="/catalog"><button className={styles.text_button}>В КАТАЛОГ</button></Link>
            </div>
            <img src={carzina} alt="" />
        </div>
    );
}
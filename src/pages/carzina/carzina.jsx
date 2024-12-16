import styles from "/src/pages/carzina/carzina.module.css";
import carzina from "/src/assets/carzina.png";
import { Link } from "@tanstack/react-router";
import { useStore } from "/src/store/store.jsx";
import { Footer } from "/src/components/Footer/footer.jsx";

export const Carzina = () => {
    const count = useStore((state) => state.count);

    return (
        <div className={styles.Carzina}>
            <div className={styles.Carzina__inner}>
                <div className={styles.Carzina__inner_navig}>
                    <Link to="/"><p>Главная /</p></Link>
                    <p className={styles.Carzina__inner_navig_p}>Корзина</p>
                </div>
                <h1>Корзина / {count} шт.</h1>
                <div className={styles.Carzina__inner_content}>
                    <div className={styles.content__text}>
                        <h1>В вашей корзине ничего нет ....</h1>
                        <p>воспользуйтесь каталогом и добавьте в корзину товары</p>
                        <Link to="/catalog"><button className={styles.text_button}>В КАТАЛОГ</button></Link>
                    </div>
                    <img src={carzina} alt="" />
                </div>
            </div>
            <Footer />
        </div>
    );
}
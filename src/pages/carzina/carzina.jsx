import styles from "/src/pages/carzina/carzina.module.css";
import { Link } from "@tanstack/react-router";
import { useStore } from "/src/store/store.jsx";
import { Footer } from "/src/components/Footer/footer.jsx";
import { Carzina1 } from "/src/pages/carzina/carzina1/carzina1.jsx";
import { Carzina2 } from "/src/pages/carzina/carzina2/carzina2.jsx";

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
                {/* <Carzina1 /> */}
                <Carzina2 />
            </div>
            <Footer />
        </div>
    );
}
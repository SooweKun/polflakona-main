import styles from "/src/pages/carzina/carzina.module.css";
import { Link } from "@tanstack/react-router";
import { useStoreCard } from "/src/store/store";
import { Footer } from "/src/components/Footer/footer.jsx";
import { Carzina1 } from "/src/pages/carzina/carzina1/carzina1.jsx";
import { Carzina2 } from "/src/pages/carzina/carzina2/carzina2.jsx";

export const Carzina = () => {
    const card = useStoreCard(state => state.card)
    return (
        <div className={styles.Carzina}>
            <div className={styles.Carzina__inner}>
                <div className={styles.Carzina__inner_navig}>
                    <Link to="/"><p>Главная /</p></Link>
                    <p className={styles.Carzina__inner_navig_p}>Корзина</p>
                </div>
                <h1>Корзина / {card.length} шт.</h1>
                {card && card.length > 0 ? <Carzina2 /> : <Carzina1 />}
            </div>
            <Footer />
        </div>
    );
}
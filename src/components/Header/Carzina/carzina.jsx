import styles from "/src/components/Header/Carzina/carzina.module.css"
import carzina from "/src/assets/carzina.svg"
import { Link } from "@tanstack/react-router";
import { useStoreCard } from "/src/store/store";

export const Carzina = () => {
    const card = useStoreCard(state => state.card)
    return(
        <Link to="/carzina">
            <button className={styles.Carzina}>
                <img src={carzina} alt="" />
                {card && card.length > 0 ? <div>{card.length}</div> : null}
            </button>
        </Link>
    );
}
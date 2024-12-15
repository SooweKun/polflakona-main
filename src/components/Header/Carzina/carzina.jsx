import styles from "/src/components/Header/Carzina/carzina.module.css"
import carzina from "/src/assets/carzina.svg"
import { Link } from "@tanstack/react-router";

export const Carzina = () => {
    return(
        <Link to="/carzina">
            <button className={styles.Carzina}>
                <img src={carzina} alt="" />
            </button>
        </Link>
    );
}
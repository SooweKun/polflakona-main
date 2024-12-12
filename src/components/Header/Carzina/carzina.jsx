import styles from "/src/components/Header/Carzina/carzina.module.css"
import carzina from "/src/assets/carzina.svg"

export const Carzina = () => {
    return(
        <button className={styles.Carzina}>
            <img src={carzina} alt="" />
        </button>
    );
}
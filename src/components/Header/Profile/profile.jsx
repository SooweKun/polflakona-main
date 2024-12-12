import styles from './profile.module.css';
import profile from "/src/assets/profile.svg"

export const Profile = () => {
    return(
        <button className={styles.Profile}>
            <img src={profile} alt="not found" />
        </button>
    );
}
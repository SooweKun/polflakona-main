import { Link } from '@tanstack/react-router';
import styles from './profile.module.css';
import profile from "/src/assets/profile.svg"

export const Profile = () => {
    return(
        <Link to="/reg">
            <button className={styles.Profile}>
                <img src={profile} alt="not found" />
            </button>
        </Link>
    );
}
import { Carzina } from './Carzina/carzina';
import { NavBar } from './NavBar/navBar';
import { Number } from './Number/number';
import { Profile } from './Profile/profile';
import { Link } from "@tanstack/react-router";
import styles from '/src/components/Header/header.module.css';

export const Header = () => {

    return(
        <div className={styles.Header}>
            <Link to="/"><h1 className={styles.Header__logo}>POLFLACONA</h1></Link>
            <NavBar/>
            <Number/>
            <div className={styles.Header__buttons}>
                <Carzina/>
                <Profile/>
            </div>
        </div>
    );
}
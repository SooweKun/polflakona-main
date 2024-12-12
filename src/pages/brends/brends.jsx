import styles from "/src/pages/brends/brends.module.css"
import { Link } from "@tanstack/react-router";
import { useMemo } from "react";
import { Card } from "/src/pages/brends/Card/card.jsx";
import { Footer } from "/src/components/Footer/footer.jsx";

export const Brends = () => {
    const brendItems = useMemo(() => {
        return Array.from({ length: 24 }).map((_, index) => (
            <Card key={index} />
        ));
      }, []);

    return (
        <div className={styles.Brends}>
            <div className={styles.Brends__inner}>
                <div className={styles.Brends__navig}>
                    <Link to="/"><p>Главная /</p></Link>
                    <p>Бренды</p>
                </div>
                <h1>Бренды</h1>
                <div className={styles.Brends__cards}>
                    {brendItems}
                </div>
            </div>
            <Footer/>
        </div>
    );
};
import { Card } from "/src/components/Brends/Card/card.jsx";
import styles from "/src/components/Brends/brends.module.css"
import { useMemo } from "react";

export const Brends = () => {
    const BrendItems = useMemo(() => {
        return Array.from({ length: 8 }).map((_, index) => (
            <Card key={index} />
        ));
      }, []);

    return (
        <div className={styles.Brends}>
            <h1 className={styles.Brends__inner_h1}>БРЕНДЫ</h1>
            <div className={styles.Brends__inner_cards}>
                {BrendItems}
            </div>
        </div>
    );
};
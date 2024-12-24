import { Card } from "/src/components/Brends/Card/card.jsx";
import styles from "/src/components/Brends/brends.module.css"
import { useMemo, useEffect, useState } from "react";

export const Brends = () => {
    const [itemsPerPage, setItemsPerPage] = useState(window.innerWidth <= 375 ? 6 : 8);

    const updateItemsPerPage = () => {
        const newItemsPerPage = window.innerWidth <= 375 ? 6 : 8;
        setItemsPerPage(newItemsPerPage);
    };

    useEffect(() => {
        // Устанавливаем обработчик события изменения размера окна
        window.addEventListener('resize', updateItemsPerPage);
        return () => {
            // Удаляем обработчик при размонтировании
            window.removeEventListener('resize', updateItemsPerPage);
        };
    }, []);

    const BrendItems = useMemo(() => {
        return Array.from({ length: itemsPerPage }).map((_, index) => (
            <Card key={index} />
        ));
    }, [itemsPerPage]); // Зависимость от itemsPerPage

    return (
        <div className={styles.Brends}>
            <h1 className={styles.Brends__inner_h1}>БРЕНДЫ</h1>
            <div className={styles.Brends__inner_cards}>
                {BrendItems}
            </div>
        </div>
    );
};
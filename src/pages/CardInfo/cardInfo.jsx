import { useStoreCard } from "/src/store/store";
import styles from "/src/pages/CardInfo/cardInfo.module.css"


export const CardInfo = () => {
    const card = useStoreCard(state => state.card)
    return (
        <div>
            {card.map(({ title, price, id, img }) => {
                return (
                    <div className={styles.menu_inf} key={id}>
                        <div className={styles.inf_items}>
                            <p className={styles.inf_items_name}>{title}</p>
                            <p className={styles.inf_items_price}> {price} ₽</p>
                        </div>
                        <p className={styles.inf_item_count}>1 шт</p>
                        <img src={img} alt="" />
                    </div>
                )
            })}
        </div>
    );
}
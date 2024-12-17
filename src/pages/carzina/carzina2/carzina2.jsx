import styles from "/src/pages/carzina/carzina2/carzina2.module.css";
import delite from "/src/assets/delete.svg";
import { useStoreCard } from "/src/store/store";

export const Carzina2 = () => {
    const card = useStoreCard(state => state.card)

    return (
        <div className={styles.Carzina2}>
            <div className={styles.Carzina2__cards}>
                {card.map(({ id, price, img, title, name }) => {
                    return (
                        <div className={styles.card} key={id}>
                            <img src={img} alt="" />
                            <div className={styles.card__text}>
                                <h1>{title}</h1>
                                <p>{name}</p>
                                <div className={styles.card__text_btn}>
                                    <div className={styles.card__text_btn_left}>
                                        <img src={delite} alt="" />
                                        <div className={styles.counter}>
                                            <button className={styles.left}>-</button>
                                            <p className={styles.count}>1</p>
                                            <button className={styles.right}>+</button>
                                        </div>
                                    </div>
                                    <p className={styles.price}>{price}₽</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className={styles.Carzina2__menu}>

            </div>
        </div>
    );
}
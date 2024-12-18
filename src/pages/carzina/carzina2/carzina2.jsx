import styles from "/src/pages/carzina/carzina2/carzina2.module.css";
import delite from "/src/assets/delete.svg";
import { useStoreCard, useStoreCount } from "/src/store/store";
import { Link } from "@tanstack/react-router";

export const Carzina2 = () => {
    const card = useStoreCard(state => state.card)
    const deleteCard = useStoreCard(state => state.deleteCard)
    console.log(card);
    const sum = card.reduce((index, value) => index + value.price, 0);
    return (
        <div className={styles.Carzina2}>
            <div className={styles.Carzina2__cards}>
                {card.map(({ id, price, img, title, name }) => {
                    // const increment = useStoreCount(state => state.increment)
                    // const decrement = useStoreCount(state => state.decrement)
                    // const count = useStoreCount(state => state.count)
                    return (
                        <div className={styles.card} key={id}>
                            <img src={img} alt="" />
                            <div className={styles.card__text}>
                                <h1>{title}</h1>
                                <p>{name}</p>
                                <div className={styles.card__text_btn}>
                                    <div className={styles.card__text_btn_left}>
                                        <img src={delite} alt="" onClick={() => deleteCard(id)} />
                                        <div className={styles.counter}>
                                            <button className={styles.left}>-</button>
                                            <p className={styles.count}>1</p>
                                            <button className={styles.right}>+</button>
                                        </div>
                                    </div>
                                    <p className={styles.price}>{price.toLocaleString('en-US')} ₽</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className={styles.Carzina2__menu}>
                <div className={styles.menu_count}>
                    <p>{card.length} шт</p>
                </div>
                <div className={styles.menu_title}>
                    {card.map(({ title, price, id }) => {
                        return (
                            <div className={styles.menu_inf} key={id}>
                                <div className={styles.inf_items}>
                                    <p key={id} className={styles.inf_items_name}>{title}</p>
                                    <p key={id} className={styles.inf_items_price}> {price.toLocaleString('en-US')} ₽</p>
                                </div>
                                <p className={styles.inf_item_count}>1 шт</p>
                            </div>
                        )
                    })}
                </div>
                <div className={styles.menu_price}>
                    <p>Итого:</p>
                    <p>{sum.toLocaleString('en-US')} ₽</p>
                </div>
                <Link to="/oformlenie"><button>к оформлению</button></Link>
                <div className={styles.menu_text}>
                    <div className={styles.menu_text_check}>
                        <input type="checkbox" readOnly/>
                        <p>я даю согласие на обработку персональных данных в соответствии с Политикой обработки персональных данных</p>
                    </div>
                    <div className={styles.menu_text_check}>
                        <input type="checkbox" />
                        <p>я даю согласие на получение рекламных рассылок в виде e‑mail, СМС, push или в мессенджерах</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
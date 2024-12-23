import styles from "/src/pages/oformlenie/oformlenie.module.css"
import { Link } from "@tanstack/react-router";
import { useDataStore } from "/src/store/store";
import { useForm } from "react-hook-form";
import sbp from "/src/assets/sbp.svg"
import cart from "/src/assets/card.svg"
import holder from "/src/assets/holder.svg"
import { Dostavka } from "/src/pages/oformlenie/dostavka/dostavka.jsx";

export const Oformlenie = () => {
    const { register, handleSubmit, formState: { errors, isSubmitSuccessful }, reset } = useForm();
    const data = useDataStore(state => state.data)
    const sum = data.reduce((index, value) => index + value.price, 0);

    const getData = (data) => {
        console.log(data);
        setTimeout(() => {
            reset();
        })
    }

    return (
        <div className={styles.Oformlenie}>
            <div className={styles.Oformlenie__inner}>
                <div className={styles.Oformlenie__inner_navig}>
                    <Link to="/"><p>Главная /</p></Link>
                    <Link to="/carzina"><p>Корзина /</p></Link>
                    <p className={styles.Oformlenie__inner_navig_p}>Оформление заказа</p>
                </div>
                <h1>Оформление заказа</h1>
                <div className={styles.Oformlenie__inner_content}>
                    <div className={styles.content_form}>
                        <form className={styles.one}>
                            <h1>1</h1>
                            <div className={styles.one_inner}>
                                <h1>Получатель</h1>
                                <div className={styles.input}>
                                    <p>Введите Фамилию</p>
                                    <input type="text" placeholder='Фамилия'
                                        {...register("lastName", { required: true })}
                                        style={{
                                            borderColor: errors.lastName ? 'red' : (isSubmitSuccessful ? 'green' : 'none')
                                        }}
                                    />
                                    <p className={styles.p2}>{errors.lastName?.type === 'required' && 'Заполните поле' || "Поле для заполнения"}</p>
                                </div>
                                <div className={styles.input}>
                                    <p>Введите имя</p>
                                    <input type="text" placeholder='Имя'
                                        {...register("Name", { required: true })}
                                        style={{
                                            borderColor: errors.Name ? 'red' : (isSubmitSuccessful ? 'green' : 'none')
                                        }}
                                    />
                                    <p className={styles.p2}>{errors.Name?.type === 'required' && 'Заполните поле' || "Поле для заполнения"}</p>
                                </div>
                                <div className={styles.input}>
                                    <p>Введите номер телефона</p>
                                    <input type="text" placeholder='Телефон'
                                        {...register("Phone", { required: true })}
                                        style={{
                                            borderColor: errors.Phone ? 'red' : (isSubmitSuccessful ? 'green' : 'none')
                                        }}
                                    />
                                    <p className={styles.p2}>{errors.Phone?.type === 'required' && 'Заполните поле' || "Поле для заполнения"}</p>
                                </div>
                                <div className={styles.input}>
                                    <p>Введите e-mail</p>
                                    <input type="text" placeholder='Email'
                                        {...register("Email", { required: true })}
                                        style={{
                                            borderColor: errors.Email ? 'red' : (isSubmitSuccessful ? 'green' : 'none')
                                        }}
                                    />
                                    <p className={styles.p2}>{errors.Email?.type === 'required' && 'Заполните поле' || "Поле для заполнения"}</p>
                                </div>
                            </div>
                        </form>
                        <form className={styles.two}>
                            <h1>2</h1>
                            <div className={styles.two_inner}>
                                <h1>Способ оплаты</h1>
                                <div className={styles.input}>
                                    <div className={styles.input_text}>
                                        <img src={sbp} alt="" />
                                        <p>СБП</p>
                                    </div>
                                    <input type="radio" />
                                </div>
                                <div className={styles.input}>
                                    <div className={styles.input_text}>
                                        <img src={cart} alt="" />
                                        <p>Картой</p>
                                    </div>
                                    <input type="radio" />
                                </div>
                                <div className={styles.input}>
                                    <div className={styles.input_text}>
                                        <img src={holder} alt="" />
                                        <p>Наличными</p>
                                    </div>
                                    <input type="radio" />
                                </div>
                            </div>
                        </form>
                        <form className={styles.three}>
                            <h1>3</h1>
                            <div className={styles.three_inner}>
                                <h1>Адрес и способ <br /> доставки</h1>
                                <div className={styles.three_inner_content}>
                                    <div className={styles.input}>
                                        <p>Введите город</p>
                                        <input type="text" placeholder='Город'
                                            {...register("City", { required: true })}
                                            style={{
                                                borderColor: errors.City ? 'red' : (isSubmitSuccessful ? 'green' : 'none')
                                            }}
                                        />
                                        <p className={styles.p2}>{errors.City?.type === 'required' && 'Заполните поле' || "Поле для заполнения"}</p>
                                    </div>
                                    <div className={styles.input}>
                                        <p>Введите населенный пункт</p>
                                        <input type="text" placeholder='Населенный пункт'
                                            {...register("punkt", { required: true })}
                                            style={{
                                                borderColor: errors.punkt ? 'red' : (isSubmitSuccessful ? 'green' : 'none')
                                            }}
                                        />
                                        <p className={styles.p2}>{errors.punkr?.type === 'required' && 'Заполните поле' || "Поле для заполнения"}</p>
                                    </div>
                                    <div className={styles.input}>
                                        <p>Введите улицу и номер дома</p>
                                        <input type="text" placeholder='Улица и номер дома'
                                            {...register("home", { required: true })}
                                            style={{
                                                borderColor: errors.home ? 'red' : (isSubmitSuccessful ? 'green' : 'none')
                                            }}
                                        />
                                        <p className={styles.p2}>{errors.home?.type === 'required' && 'Заполните поле' || "Поле для заполнения"}</p>
                                    </div>
                                </div>
                                <Dostavka />
                            </div>
                        </form>
                    </div>
                    <div className={styles.Carzina2__menu}>
                        <div className={styles.menu_count}>
                            <p>{data.length} шт</p>
                        </div>
                        <div className={styles.menu_title}>
                            {data.map(({ title, price, id }) => {
                                return (
                                    <div className={styles.menu_inf} key={id}>
                                        <div className={styles.inf_items}>
                                            <p className={styles.inf_items_name}>{title}</p>
                                            <p className={styles.inf_items_price}> {price.toLocaleString('ru-RU')} ₽</p>
                                        </div>
                                        <p className={styles.inf_item_count}>1 шт</p>
                                    </div>
                                )
                            })}
                        </div>
                        <div className={styles.menu_price}>
                            <p>Итого:</p>
                            <p>{sum.toLocaleString('ru-RU')} ₽</p>
                        </div>
                        <Link to="/oformlenie"><button onClick={handleSubmit(getData)}>к оплате</button></Link>
                        <div className={styles.menu_text}>
                            <div className={styles.menu_text_check}>
                                <input type="checkbox" readOnly />
                                <p>я даю согласие на обработку персональных данных в соответствии с Политикой обработки персональных данных</p>
                            </div>
                            <div className={styles.menu_text_check}>
                                <input type="checkbox" />
                                <p>я даю согласие на получение рекламных рассылок в виде e‑mail, СМС, push или в мессенджерах</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
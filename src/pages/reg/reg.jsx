import styles from "/src/pages/reg/reg.module.css";
import { Link } from "@tanstack/react-router";
import { useForm } from 'react-hook-form';
import { Footer } from "/src/components/Footer/footer.jsx";
import regFoto from "/src/assets/regFoto.png"

export const Reg = () => {
    const {register, handleSubmit, formState: {errors, isSubmitSuccessful}} = useForm();

    const getData = (data) => {
        console.log(data);
    }

    return (
        <div className={styles.Reg}>
            <div className={styles.Reg__inner}>
                <div className={styles.Reg__inner_navig}>
                    <Link to="/"><p>Главная /</p></Link>
                    <Link><p>Личный кабинет /</p></Link>
                    <p className={styles.Reg__inner_navig_p}>Регистрация</p>
                </div>
                <div className={styles.Reg__inner_content}>
                    <div className={styles.content__form}>
                        <form>
                            <h1>Регистрация</h1>
                            <div className={styles.content__form_inputs}>
                                <p>Имя</p>
                                <div className={styles.content__form_input}>
                                    <input type="text" placeholder="Введите имя"
                                        {...register("Name", {required: true})}  
                                        style={{
                                            borderColor: errors.Name ? 'red' : (isSubmitSuccessful ? 'green' : 'none')
                                          }}
                                    />
                                    {errors?.Name?.type === 'required' && <p className={styles.error}>Заполните поле</p>}
                                </div>
                                <div className={styles.content__form_input}>
                                    <p>Телефон</p>
                                    <input type="text" placeholder="Введите телефон"
                                        {...register("Phone", {required: true})}
                                        style={{
                                            borderColor: errors.Phone ? 'red' : (isSubmitSuccessful ? 'green' : 'none')
                                          }}
                                    />
                                    {errors?.Phone?.type === 'required' && <p className={styles.error}>Заполните поле</p>}
                                </div>
                                <div className={styles.content__form_input}>
                                    <p>E-mail</p>
                                    <input type="text" placeholder="Введите e-mail"
                                        {...register("Email", {required: true, pattern:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i})}
                                        style={{
                                            borderColor: errors.Email ? 'red' : (isSubmitSuccessful ? 'green' : 'none')
                                          }}
                                    />
                                    {errors?.Email?.type === 'required' && <p className={styles.error}>Заполните поле</p>}
                                    {errors?.Email?.type === "pattern" && <p className={styles.error}>Некорректно введен e-mail</p>}
                                </div>
                                <div className={styles.content__form_input}>
                                    <p>Пароль</p>
                                    <input type="text" placeholder="Придумайте пароль"
                                        {...register("Password", {required: true})}
                                        style={{
                                            borderColor: errors.Password ? 'red' : (isSubmitSuccessful ? 'green' : 'none')
                                          }}
                                    />
                                    {errors?.Password?.type === 'required' && <p className={styles.error}>Заполните поле</p>}
                                </div>
                                <div className={styles.content__form_input}>
                                    <p>Подтвердитте пароль</p>
                                    <input type="text" placeholder="Подтвердите пароль"
                                        {...register("Password", {required: true})}
                                        style={{
                                            borderColor: errors.Password ? 'red' : (isSubmitSuccessful ? 'green' : 'none')
                                          }}
                                    />
                                    {errors?.Password?.type === 'required' && <p className={styles.error}>Заполните поле</p>}
                                </div>
                                <div className={styles.content_form_radioButton}>
                                <input type="checkbox"/>
                                <p>Согласие на обработку персональных данных</p>
                                </div>
                            </div>
                            <button onClick={handleSubmit(getData)}>ЗАРЕГИСТРИРОВАТЬСЯ</button>
                        </form>
                    </div>
                    <div className={styles.content_title}>
                        <img src={regFoto} alt="" />
                        <h1>Есть аккаунт?</h1>
                        <p>Войдите в личный кабинет и продолжайте совершать покупки</p>
                        <Link to="/auth">
                            <button className={styles.content__title_btn}>ВОЙТИ</button>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
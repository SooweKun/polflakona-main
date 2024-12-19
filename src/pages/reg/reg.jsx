import styles from "/src/pages/reg/reg.module.css";
import { Link } from "@tanstack/react-router";
import { useForm } from 'react-hook-form';
import { Footer } from "/src/components/Footer/footer.jsx";
import regFoto from "/src/assets/regFoto.png"
import axios from "axios";

export const Reg = () => {
    const { register, handleSubmit, formState: { errors, isSubmitSuccessful } } = useForm();

    const api_url = "http://127.0.0.1:3000"

    const postData = async (data) => {
        try {
            const res = await axios({
                method: "POST",
                url: `${api_url}/v1/singup`,
                data: data,
            });
            console.log(res.data, "data");
        } catch (error) {
            console.log(error);
        }
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
                                        {...register("name", { required: true })}
                                        style={{
                                            borderColor: errors.name ? 'red' : (isSubmitSuccessful ? 'green' : 'none')
                                        }}
                                    />
                                    {errors?.name?.type === 'required' && <p className={styles.error}>Заполните поле</p>}
                                </div>
                                <div className={styles.content__form_input}>
                                    <p>Телефон</p>
                                    <input type="text" placeholder="Введите телефон"
                                        {...register("number", { required: true })}
                                        style={{
                                            borderColor: errors.number ? 'red' : (isSubmitSuccessful ? 'green' : 'none')
                                        }}
                                    />
                                    {errors?.number?.type === 'required' && <p className={styles.error}>Заполните поле</p>}
                                </div>
                                <div className={styles.content__form_input}>
                                    <p>E-mail</p>
                                    <input type="text" placeholder="Введите e-mail"
                                        {...register("login", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })}
                                        style={{
                                            borderColor: errors.login ? 'red' : (isSubmitSuccessful ? 'green' : 'none')
                                        }}
                                    />
                                    {errors?.login?.type === 'required' && <p className={styles.error}>Заполните поле</p>}
                                    {errors?.login?.type === "pattern" && <p className={styles.error}>Некорректно введен e-mail</p>}
                                </div>
                                <div className={styles.content__form_input}>
                                    <p>Пароль</p>
                                    <input type="text" placeholder="Придумайте пароль"
                                        {...register("password", { required: true })}
                                        style={{
                                            borderColor: errors.password ? 'red' : (isSubmitSuccessful ? 'green' : 'none')
                                        }}
                                    />
                                    {errors?.password?.type === 'required' && <p className={styles.error}>Заполните поле</p>}
                                </div>
                                <div className={styles.content__form_input}>
                                    <p>Подтвердитте пароль</p>
                                    <input type="text" placeholder="Подтвердите пароль"
                                        {...register("repeatpassword", { required: true })}
                                        style={{
                                            borderColor: errors.repeatpassword ? 'red' : (isSubmitSuccessful ? 'green' : 'none')
                                        }}
                                    />
                                    {errors?.repeatpassword?.type === 'required' && <p className={styles.error}>Заполните поле</p>}
                                </div>
                                <div className={styles.content_form_radioButton}>
                                    <input type="checkbox" />
                                    <p>Согласие на обработку персональных данных</p>
                                </div>
                            </div>
                            <button onClick={handleSubmit(postData)}>ЗАРЕГИСТРИРОВАТЬСЯ</button>
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
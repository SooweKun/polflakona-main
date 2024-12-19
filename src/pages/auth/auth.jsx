import styles from "/src/pages/auth/auth.module.css";
import { Link } from "@tanstack/react-router";
import { useNavigate } from '@tanstack/react-router';
import { Footer } from "/src/components/Footer/footer.jsx";
import { useForm } from 'react-hook-form';
import authFoto from "/src/assets/authFoto.png"

export const Auth = () => {
    const {register, handleSubmit, formState: {errors, isSubmitSuccessful}} = useForm();
    const navigate = useNavigate();

    const postData = () => {
        axios.post("/login")
    }

    return (
        <div className={styles.Auth}>
            <div className={styles.Auth__inner}>
                <div className={styles.Auth__inner_navig}>
                    <Link to="/"><p>Главная /</p></Link>
                    <Link to="/profile"><p>Личный кабинет /</p></Link>
                    <p>Вход</p>
                </div>
                <div className={styles.Auth__inner_content}>
                    <div className={styles.Auth__inner_content}>
                        <div className={styles.content__form}>
                            <form onSubmit={handleSubmit(postData)}>
                                <h1>Регистрация</h1>
                                <div className={styles.content__form_inputs}>
                                    <p>E-mail</p>
                                    <div className={styles.content__form_input}>
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
                                        <input type="text" placeholder="Введите пароль"
                                            {...register("Password", {required: true})}
                                            style={{
                                                borderColor: errors.Password ? 'red' : (isSubmitSuccessful ? 'green' : 'none')
                                            }}
                                        />
                                        {errors?.Password?.type === 'required' && <p className={styles.error}>Заполните поле</p>}
                                    </div>
                                </div>
                                <button  type="submit">Войти</button>
                            </form>
                        </div>
                        <div className={styles.content_title}>
                            <img src={authFoto} alt="" />
                            <h1>Есть аккаунт?</h1>
                            <p>Войдите в личный кабинет и продолжайте совершать покупки</p>
                            <Link to="/reg">
                                <button className={styles.content__title_btn}>ЗАРЕГИСТРИРОВАТЬСЯ</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
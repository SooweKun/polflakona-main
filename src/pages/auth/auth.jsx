import styles from "/src/pages/auth/auth.module.css";
import { Link } from "@tanstack/react-router";
import { useNavigate } from '@tanstack/react-router';
import { Footer } from "/src/components/Footer/footer.jsx";
import { useForm } from 'react-hook-form';
import authFoto from "/src/assets/authFoto.png"
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { useUserStore } from "/src/store/useUserStore.js";


const axiosInstanse = axios.create({
    baseURL: "http://127.0.0.1:3000"
})

export const Auth = () => {
    const { register, handleSubmit, formState: { errors, isSubmitSuccessful } } = useForm();
    const navigate = useNavigate();
    const { user, setUser } = useUserStore()
    
    const {data:LoginnedUser, mutate: Login} = useMutation({
        mutationKey: ["login"],
        mutationFn: async (data) => {
            const res = await axiosInstanse.post('/v1/login', data)
            if (res.status !== 200) throw new Error(res.statusText)
            
            return res.data
        },


        onSuccess: (data) => {
            console.log(data, "ЗАЛОГИНИН ЕПТА");
            if (data.status === "success") {
                setUser(data.user)
                navigate({to: '/profile'})
            }
        }
    })

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
                            <form onSubmit={handleSubmit((data) => Login(data))}>
                                <h1>Регистрация</h1>
                                <div className={styles.content__form_inputs}>
                                    <p>E-mail</p>
                                    <div className={styles.content__form_input}>
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
                                        <input type="text" placeholder="Введите пароль"
                                            {...register("password", { required: true })}
                                            style={{
                                                borderColor: errors.password ? 'red' : (isSubmitSuccessful ? 'green' : 'none')
                                            }}
                                        />
                                        {errors?.password?.type === 'required' && <p className={styles.error}>Заполните поле</p>}
                                    </div>
                                </div>
                                <button type="submit">Войти</button>
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
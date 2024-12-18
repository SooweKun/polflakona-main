import styles from '/src/pages/profile/profile.module.css'
import { Link } from '@tanstack/react-router';
import profile from '/src/assets/pr-bg.png'
import { useState } from 'react';
import { set, useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from '@tanstack/react-router';

export const Profile = () => {
    const [value, setValue] = useState(true);
    const [isDisabled, setIsDisabled] = useState(true);
    const navigate = useNavigate();
    const {register, handleSubmit, formState: {errors, isSubmitSuccessful}, reset} = useForm();

    const handleClick = () => {
        setValue(!value);
        setIsDisabled(false);
    }

    const adminClick = () => {
        navigate({to: '/admin'});
    }

    const handleClick2 = () => {
        setValue(!value);
        setIsDisabled(true);
        reset();
    }

    const getData = (data) => {
        console.log(data);
        setValue(!value);
        setIsDisabled(true);
        setTimeout(() => {
            reset();
        }, 2000);
        // axios.post('http://localhost:3000/').then(res => console.log(res.data)).catch(err => console.log(err));
    }

    return (
        <div className={styles.Profile}>
            <div className={styles.Profile__inner}>
                <div className={styles.Profile__inner_navig}>
                    <Link to="/"><p>Главная /</p></Link>
                    <p className={styles.Profile__inner_navig_p}>Личный кабинет</p>
                </div>
                <h1>Личный кабинет</h1>
                <div className={styles.Profile__inner_content}>
                    <div className={styles.content_profile}>
                        <div className={styles.content_profile_info}>
                            <img src={profile} alt="" />
                            <h1>Иван Иванов</h1>
                        </div>
                        <div className={styles.content_profile_text}>
                            <p><span>E-mail</span>ivan_ivanov@mail.ru</p>
                            <p><span>Телефон</span>+7 (948) 044-49-49</p>
                            <p><span>Город/Населенный пункт</span>Оренбург</p>
                        </div>
                        <button onClick={adminClick}>админка</button>
                    </div>
                    <div className={styles.content_inputs}>
                        <h1>Личные данные</h1>
                        <form>
                            <div className={styles.input}>
                                <p>Введите имя</p>
                                <input type="text" placeholder='Имя' disabled={isDisabled}
                                    {...register("Name", {required: true})}
                                    style={{
                                        borderColor: errors.Name ? 'red' : (isSubmitSuccessful ? 'green' : 'none')
                                    }}
                                />
                                <p className={styles.p2}>{errors.Name?.type === 'required' && 'Заполните поле' || "Поле для заполнения"}</p>
                            </div>
                            <div className={styles.input}>
                                <p>Введите Фамилию</p>
                                <input type="text" placeholder='Фамилия' disabled={isDisabled}
                                    {...register("lastName", {required: true})}
                                    style={{
                                        borderColor: errors.lastName ? 'red' : (isSubmitSuccessful ? 'green' : 'none')
                                    }}
                                />
                                <p className={styles.p2}>{errors.lastName?.type === 'required' && 'Заполните поле' || "Поле для заполнения"}</p>
                            </div>
                            <div className={styles.input}>
                                <p>Введите e-mail</p>
                                <input type="text" placeholder='Email' disabled={isDisabled}
                                    {...register("Email", {required: true})}
                                    style={{
                                        borderColor: errors.Email ? 'red' : (isSubmitSuccessful ? 'green' : 'none')
                                    }}
                                />
                                <p className={styles.p2}>{errors.Email?.type === 'required' && 'Заполните поле' || "Поле для заполнения"}</p>
                            </div>
                            <div className={styles.input}>
                                <p>Введите город/населенный пункт</p>
                                <input type="text" placeholder='Город/Населенный пункт' disabled={isDisabled}
                                    {...register("Map", {required: true})}
                                    style={{
                                        borderColor: errors.Map ? 'red' : (isSubmitSuccessful ? 'green' : 'none')
                                    }}
                                />
                                <p className={styles.p2}>{errors.Map?.type === 'required' && 'Заполните поле' || "Поле для заполнения"}</p>
                            </div>
                            <div className={styles.input}>
                                <p>Введите номер телефона</p>
                                <input type="text" placeholder='Телефон' disabled={isDisabled}
                                    {...register("Phone", {required: true})}
                                    style={{
                                        borderColor: errors.Phone ? 'red' : (isSubmitSuccessful ? 'green' : 'none')
                                    }}
                                />
                                <p className={styles.p2}>{errors.Phone?.type === 'required' && 'Заполните поле' || "Поле для заполнения"}</p>
                            </div>
                        </form>
                        {
                            value && (
                                <button onClick={handleClick}>Изменить</button>
                            ) || (
                                <div className={styles.buttons}>
                                    <button className={styles.save} onClick={handleSubmit(getData)}>Сохранить</button>
                                    <button onClick={handleClick2} className={styles.cancel}>Отмена</button>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
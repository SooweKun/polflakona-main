import styles from "/src/pages/admin/admin.module.css";
import { Link } from "@tanstack/react-router";
import { Footer } from "/src/components/Footer/footer.jsx";
import { useForm } from 'react-hook-form';
import warning from "/src/assets/warning.svg";
import ArrowUp from "/src/assets/arrowUp.svg";
import ArrowDown from "/src/assets/arrowDown.svg";
import { useState, useEffect } from "react";

export const Admin = () => {
    const { register, handleSubmit, formState: { errors, isSubmitSuccessful } } = useForm();
    const [openModule, setOpenModule] = useState(null);
    const [images, setImages] = useState([]);

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
        const validFiles = files.filter((file) => allowedTypes.includes(file.type));

        if (validFiles.length) {
            const newImages = validFiles.map((file) => URL.createObjectURL(file));
            setImages((prevImages) => [...prevImages, ...newImages]);
        }
    };


    const openModules = (module) => {
        setOpenModule(openModule === module ? null : module);
    };

    const postData = (data) => {
        console.log(data);
        console.log(images);
    }

    return (
        <div className={styles.Admin}>
            <div className={styles.Admin__inner}>
                <div className={styles.Admin__inner_navig}>
                    <Link to="/"><p>Главная /</p></Link>
                    <Link to="/profile"><p>Личный кабинет /</p></Link>
                    <p className={styles.Admin__inner_navig_p}>Добавление товара</p>
                </div>
            </div>
            <div className={styles.Admin__razm}>
                <div className={styles.Admin__content}>
                    <div className={styles.content__text}>
                        <h1>Добавление товара</h1>
                        <p>Весь процесс займет не более 5 минут,
                            и ваш товар увидят миллионы!</p>
                    </div>
                    <div className={styles.warning}>
                        <img src={warning} alt="" />
                        <div className={styles.warning__title}>
                            <h1>Ваша ответственность за товар</h1>
                            <p>В случае несоответствия полученного товара его описанию, расходы, связанные с его возвратом, будут возложены на вас.</p>
                        </div>
                    </div>
                    <form>
                        <div className={styles.inputs_one}>
                            <div className={styles.content__form_input}>
                                <p>Название товара</p>
                                <input type="text" placeholder="Введите название"
                                    {...register("name", { required: true })}
                                    style={{
                                        borderColor: errors.name ? 'red' : (isSubmitSuccessful ? 'green' : 'none')
                                    }}
                                />
                                {errors?.name?.type === 'required' && <p className={styles.error}>Заполните поле</p>}
                            </div>
                            <div className={styles.content__form_input_img}>
                                <p>Фотографии</p>
                                <input type="text" placeholder="Выберете несколько фото"
                                />
                                <input type="file" accept="image/*" multiple onChange={handleFileChange}
                                />
                                {
                                    images.length > 0 && (
                                        <div className={styles.img}>
                                            {images.map((image, index) => (
                                                <img
                                                    key={index}
                                                    src={image}
                                                />
                                            ))}
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                        <div className={styles.inputs_module}>
                            <div className={styles.module}>
                                <p>Категория</p>
                                <button type="button" onClick={() => openModules("kategory")}>
                                    Выбрать...
                                    <img src={openModule === "kategory" ? ArrowUp : ArrowDown} alt="" />
                                </button>
                                {
                                    openModule === "kategory" && (
                                        <div className={styles.module_text}>
                                            <div className={styles.module_text__inner}>
                                                <p>Женская парфюмерия</p>
                                                <input type="radio" />
                                            </div>
                                            <div className={styles.module_text__inner}>
                                                <p>Мужская парфюмерия</p>
                                                <input type="radio" />
                                            </div>
                                            <div className={styles.module_text__inner}>
                                                <p>Унисекс парфюмерия</p>
                                                <input type="radio" />
                                            </div>
                                            <div className={styles.module_text__inner}>
                                                <p>Нишевая парфюмерия</p>
                                                <input type="radio" />
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                            <div className={styles.module}>
                                <p>Возрастная группа</p>
                                <button type="button" onClick={() => openModules("group")}>
                                    Выбрать...
                                    <img src={openModule === "group" ? ArrowUp : ArrowDown} alt="" />
                                </button>
                                {
                                    openModule === "group" && (
                                        <div className={styles.module_text}>
                                            <div className={styles.module_text__inner}>
                                                <p>Для взрослых</p>
                                                <input type="radio" />
                                            </div>
                                            <div className={styles.module_text__inner}>
                                                <p>Для подростков</p>
                                                <input type="radio" />
                                            </div>
                                            <div className={styles.module_text__inner}>
                                                <p>Для детей</p>
                                                <input type="radio" />
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                            <div className={styles.module}>
                                <p>тип</p>
                                <button type="button" onClick={() => openModules("type")}>
                                    Выбрать...
                                    <img src={openModule === "type" ? ArrowUp : ArrowDown} alt="" />
                                </button>
                                {
                                    openModule === "type" && (
                                        <div className={styles.module_text}>
                                            <div className={styles.module_text__inner}>
                                                <p>Духи</p>
                                                <input type="radio" />
                                            </div>
                                            <div className={styles.module_text__inner}>
                                                <p>Парфюмерная вода</p>
                                                <input type="radio" />
                                            </div>
                                            <div className={styles.module_text__inner}>
                                                <p>Туалетная вода</p>
                                                <input type="radio" />
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                        <div className={styles.inputs_two}>
                            <div className={styles.content__form_input}>
                                <p>Код товара</p>
                                <input type="text" placeholder="Ввести код товара"
                                    {...register("kod", { required: true })}
                                    style={{
                                        borderColor: errors.kod ? 'red' : (isSubmitSuccessful ? 'green' : 'none')
                                    }}
                                />
                                {errors?.kod?.type === 'required' && <p className={styles.error}>Заполните поле</p>}
                            </div>
                            <div className={styles.content__form_input}>
                                <p>Базовые ноты</p>
                                <input type="text" placeholder="написать базовые ноты"
                                    {...register("baz", { required: true })}
                                    style={{
                                        borderColor: errors.baz ? 'red' : (isSubmitSuccessful ? 'green' : 'none')
                                    }}
                                />
                                {errors?.baz?.type === 'required' && <p className={styles.error}>Заполните поле</p>}
                            </div>
                            <div className={styles.content__form_input}>
                                <p>Верхние ноты</p>
                                <input type="text" placeholder="написать Верхние ноты"
                                    {...register("verh", { required: true })}
                                    style={{
                                        borderColor: errors.verh ? 'red' : (isSubmitSuccessful ? 'green' : 'none')
                                    }}
                                />
                                {errors?.verh?.type === 'required' && <p className={styles.error}>Заполните поле</p>}
                            </div>
                            <div className={styles.content__form_input}>
                                <p>Ноты сердца</p>
                                <input type="text" placeholder="Написать ноты сердца"
                                    {...register("heart", { required: true })}
                                    style={{
                                        borderColor: errors.heart ? 'red' : (isSubmitSuccessful ? 'green' : 'none')
                                    }}
                                />
                                {errors?.heart?.type === 'required' && <p className={styles.error}>Заполните поле</p>}
                            </div>
                            <div className={styles.content__form_input}>
                                <p>Цена</p>
                                <input type="text" placeholder="Ввести цену"
                                    {...register("price", { required: true })}
                                    style={{
                                        borderColor: errors.price ? 'red' : (isSubmitSuccessful ? 'green' : 'none')
                                    }}
                                />
                                {errors?.price?.type === 'required' && <p className={styles.error}>Заполните поле</p>}
                            </div>
                            <div className={styles.content__form_inputo}>
                                <p>Подробное описание</p>
                                <textarea type="text" placeholder="Например: Унисекс парфюмерия представлена восточным ароматом Byredo Parfums Bal d'Afrique. Сладкий аромат, словно вкусная конфета, опьянит, затмит разум. Париж 20-х годов после войны, роскошный и страстный, атмосфера бала в Сан-Жермен, стильная Жозефин Бейкер, звезда парижских кабаре. Всё это послужило вдохновением на создание парфюма."
                                    {...register("description", { required: true })}
                                    style={{
                                        borderColor: errors.description ? 'red' : (isSubmitSuccessful ? 'green' : 'none')
                                    }}
                                />
                                {errors?.description?.type === 'required' && <p className={styles.error}>Заполните поле</p>}
                            </div>
                        </div>
                    </form>
                    <button type="submit" onClick={handleSubmit(postData)}>ОПУБЛИКОВАТЬ</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}
import styles from "/src/components/Footer/footer.module.css";
import { Link } from "@tanstack/react-router";
import watsup from "/src/assets/wtsuup.svg"
import tg from "/src/assets/tg.svg"
import vk from "/src/assets/vk.svg"

export const Footer = () => {
    return(
        <div className={styles.Footer}>
           <div className={styles.Footer__inner}>
                <div className={styles.Footer__inner_info}>
                    <div className={styles.Footer__inner_info_title}>
                        <h1>POLFLACONA</h1>
                        <p>Это пространство, с самой разной  парфюмерией:
                           от классики до ниши,  от России до Франции и Италии,
                           от популярного до никому неизвестного.</p>
                    </div>
                    <div className={styles.Footer__inner_info_aboutUs}>
                        <Link to="/aboutUs"><h1>О нас </h1></Link>
                        <Link to="/brends"><p>Бренды</p></Link>
                        <Link to="/dostavka"><p>Доставка</p></Link>
                        <Link to="/catalog"><p>Наш каталог</p></Link>
                        <p>Хиты продаж</p>
                        <Link to="/pay"><p>Способы оплаты</p></Link>
                    </div>
                    <div className={styles.Footer__inner_info_inf}>
                        <h1>Информация</h1>
                        <Link to="/oferta"><p>Оферта</p></Link>
                        <Link to="/sogl"><p>Пользовательское соглашение</p></Link>
                        <Link to="/confid"><p>Политика конфиденциальности</p></Link>
                    </div>
                    <div className={styles.Footer__inner_info_contacts}>
                        <Link to="/contacts"><h1>Контакты</h1></Link>
                        <p>Адрес: Большой Гнездниковский переулок д. 7</p>
                        <p>+7 985 853-30-02</p>
                        <p>Email: polflacona@yandex.ru.</p>
                        <p>ИНН 644000557305</p>
                    </div>
                </div>
                <div className={styles.Footer__inner_links}>
                    <p> © 2023 – 2024. «Полфлакона». Все права защищены.</p>
                    <div className={styles.Footer__inner_links_contact}>
                        <img src={watsup} alt="" />
                        <img src={vk} alt="" />
                        <img src={tg} alt="" />
                    </div>
                </div>
           </div>
        </div>
    );
}
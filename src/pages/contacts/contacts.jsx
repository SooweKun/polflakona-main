import { Link } from "@tanstack/react-router";
import { Footer } from "/src/components/Footer/footer.jsx";
import styles from "/src/pages/contacts/contacts.module.css"
import phone from "/src/assets/phone.svg"
import mail from "/src/assets/mail.svg"

export const Contacts = () => {
    return (
        <div className={styles.Contacts}>
            <div className={styles.Contacts__inner}>
                <div className={styles.Contacts__inner_navig}>
                    <Link to="/"><p>Главная /</p></Link>
                    <p>Контакты</p>
                </div>
                <h1>Контакты</h1>
                <div className={styles.Contacts__inner_content}>
                    <div className={styles.Contacts__inner_content_info}>
                        <div className={styles.Contacts__inner_content_info_ip}>
                            <p>Торговый знак "POLFLACONA" являются собственностью:</p>
                            <p>ИП Линьков Олег Владимирович</p>
                        </div>
                        <div className={styles.Contacts__inner_content_info_contacts}>
                            <div className={styles.contacts_phone}>
                                <img src={phone} alt="" />
                                <div className={styles.contacts_phone_text}>
                                    <p>Телефон</p>
                                    <p>+7 (985) 853-30-02</p>
                                    <p>Доступен для звонков только <br /> в рабочее время.</p>
                                </div>
                            </div>
                            <div className={styles.contacts_mail}>
                                <img src={mail} alt="" />
                                <div className={styles.contacts_mail_text}>
                                    <p>Почта</p>
                                    <p>polflacona@yandex.ru</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.Contacts__inner_content_hours}>
                        <h1>РЕЖИМ РАБОТЫ</h1>
                        <div className={styles.content_hours_monday}>
                            <p>Понедельник</p>
                            <p>Выходной день</p>
                        </div>
                        <div className={styles.content_hours_tuesday}>
                            <p>Вторник - Пятница</p>
                            <p>с 14:00 до 20:00</p>
                        </div>
                        <div className={styles.content_hours_saturday}>
                            <p>Суббота - Воскресенье</p>
                            <p>с 12:00 до 18:30</p>
                        </div>  
                    </div>
                </div>
                <div className={styles.Contacts__inner_map}>
                    <iframe
                        src="https://www.google.com/maps/embed?..."
                        width="100%"
                        height="500"
                        frameborder="0"
                    />
                </div>
            </div>
            <Footer/>
        </div>
    );
};
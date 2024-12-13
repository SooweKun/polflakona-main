import styles from "/src/pages/confid/confid.module.css"
import { Link } from "@tanstack/react-router";
import { Footer } from "/src/components/Footer/footer.jsx";

export const Confid = () => {
    return (
        <div className={styles.Confid}>
            <div className={styles.Confid__inner}>
                <div className={styles.Confid__inner_navig}>
                    <Link to="/"><p>Главная /</p></Link>
                    <p className={styles.Confid__inner_navig_p}>Политика конфиденциальности</p>
                </div>
                <h1>Политика конфиденциальности</h1>
                <div className={styles.Confid__inner_content}>
                    <p><b>Конфиденциальность и защита информации</b></p>
                    <p><b>1.1. </b>Настоящий раздел регулируется следующими нормативно-правовыми актами: Федеральным законом РФ 27.07.2006г. № 152-ФЗ «О персональных данных», Федеральным законом РФ от 27.07.2006г. № 149-ФЗ «Об информации, информационных технологиях и о защите информации».</p>
                    <p><b>1.2. </b>С целью реализации прав по Договору Оферты Гость Сайта/Пользователь/Покупатель предоставляет о себе следующую информацию: <br /> — фамилия (обязательно); <br /> — имя (обязательно); <br /> — номер телефона (обязательно); <br /> — адрес электронной почты (обязательно); <br /> — пароль для доступа к личному кабинету (обязателен для осуществления регистрации на сайте); <br /> — дату рождения (необязательно). </p>
                    <p><b>1.3. </b>Под обработкой персональных данных понимается любое действие (операция) или совокупность действий (операций), совершаемых с использованием средств автоматизации или без использования таких средств с персональными данными, включая сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передачу (в том числе передачу третьим лицам, не исключая трансграничную передачу, если необходимость в ней возникла в ходе исполнения обязательств), обезличивание, блокирование, удаление, уничтожение персональных данных.</p>
                    <p><b>1.4. </b>В соответствии с пп. 2 п. 2 ст. 22 Федерального закона РФ от 27.07.2006г. № 152-ФЗ «О персональных данных» Гость Сайта/Пользователь/Покупатель, принимая условия настоящего Договора Оферты, выступая в качестве субъекта персональных данных, даёт своё согласие на обработку своих персональных данных Продавцом, а также Продавцом в отношениях с третьими лицами, а Продавец обязуется обрабатывать такие данные вышеуказанными способами исключительно для целей исполнения предмета настоящего договора и целей, указанных в «Положении о защите персональных данных и конфиденциальности информации», являющемся неотъемлемой частью настоящего Договора Оферты.</p>
                    <p><b>1.5. </b>Продавец не несёт ответственности за сведения, предоставленные Гостем Сайта/Пользователем/Покупателем на сайте в общедоступной форме.</p>
                    <p><b>1.6. </b>Продавец вправе осуществлять записи телефонных разговоров с Гостем Сайта/Пользователем/Покупателем. При этом Продавец обязуется предотвращать попытки несанкционированного доступа к информации, полученной в ходе телефонных переговоров и/или передачу её третьим лицам, не имеющим непосредственного отношения к исполнению Заказов, в соответствии с п. 4 ст. 16 Федерального закона от 27.07.2006г. № 149-ФЗ «Об информации, информационных технологиях и о защите информации».</p>
                    <p><b>1.7. </b>Отзыв согласия на обработку персональных данных осуществляется путём отзыва акцепта настоящего Договора Оферты.</p>
                </div>
            </div>
            <Footer />
        </div>
    );
};
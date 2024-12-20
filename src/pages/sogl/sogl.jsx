import { Link } from "@tanstack/react-router";
import styles from "/src/pages/sogl/sogl.module.css"
import { Footer } from "/src/components/Footer/footer.jsx";

export const Sogl = () => {
    return (
        <div className={styles.Sogl}>
            <div className={styles.Sogl__inner}>
                <div className={styles.Sogl__inner_navig}>
                    <Link to="/"><p>Главная /</p></Link>
                    <p className={styles.Sogl__inner_navig_p}>Пользовательское соглашение</p>
                </div>
                <h1>Пользовательское соглашение</h1>
                <div className={styles.Sogl__inner_content}>
                    <div className={styles.content__text_1}>
                        <p><b>1. Общие положения</b></p>
                        <p><b>1.1. </b>Продавец осуществляет продажу Товаров через интернет-магазин, расположенный по адресу:<span>https://polflacona.ru</span></p>
                        <p><b>1.2. </b>Предложенные на сайте условия продажи Товаров, включая всю информацию о Товаре, способах и сроках его доставки, оплаты и получения, размещённые на сайте, представляют из себя Договор Оферты.</p>
                        <p><b>1.3. </b>Осуществляя Заказ Товара через интернет-магазин, Пользователь принимает условия Договора Оферты и условия продажи Товара, отражённые в разделах 2–11 Договора Оферты. Отказ от принятия условий Договора Оферты и условий продажи Товара возлагает на Пользователя обязанность перестать использовать сайт.</p>
                        <p><b>1.4. </b>Договор Оферты в целом или в части может быть изменён Продавцом в одностороннем порядке, уведомление Пользователя/Покупателя о произведённых изменениях не требуется. Принимая условия настоящего Договора Оферты, Пользователь/Покупатель соглашается, что внесённые Продавцом изменения вступают в силу в течение 1 (Одного) календарного дня с момента совершения публикации новой редакции Договора Оферты на сайте.</p>
                        <p><b>1.5. </b>Оферта признается акцептованной (принятой) Пользователем/Покупателем с момента выполнения одного из следующих условий:оформления Заказа посредством общения с менеджерами интернет-магазина по номерам телефонов, указанным на сайте;осуществление Заказа посредством адреса электронной почты интернет-магазинарегистрации на сайте или добавлении необходимого Товара в корзину Покупателя;</p>
                    </div>
                    <div className={styles.content__text_2}>
                        <p><b>2 Оплата </b></p>
                        <p><b>2.1. </b>Оплата Товара осуществляется путём использования национальных платёжных инструментов, а также наличных расчётов. Договором Оферты устанавливаются следующие способы оплаты Товара <br /> Покупателем: <br /> оплата товара банковской картой на сайте; <br />  оплата товара с помощью платёжной системы «СБП»; <br /> оплата товара с помощью платёжной системы «SberPay»;</p>
                        <p>Правила возврата товара <br /> Согласно Постановлению Правительства № 2463 от 31.12.2020 «Об утверждении правил продажи товаров по договору розничной купли-продажи, перечня товаров длительного пользования, на которые не распространяется требование потребителя о безвозмездном предоставлении ему товара, обладающего этими же основными потребительскими свойствами, на период ремонт или замены такого товара, и перечня непродовольственных товаров надлежащего качества, не подлежащих обмену, а также о внесении изменений в некоторые акты Правительства РФ, парфюмерно-косметические товары надлежащего качества не подлежат возврату или обмену.
                        Интернет-магазин — Интернет-сайт <span>https://polflacona.ru</span> и торговый знак „POLFLACONA“ являются <br /> собственностью: <br /> Индивидуальный предприниматель АЛАДИНА ЛИЛИЯ КИРИЛЛОВНА <br /> ИНН 644000557305 <br /> ОГРН 304644025100059</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};
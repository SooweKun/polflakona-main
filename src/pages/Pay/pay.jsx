import styles from "/src/pages/Pay/pay.module.css"
import { Link } from "@tanstack/react-router";
import { Footer } from "/src/components/Footer/footer.jsx";
import master from "/src/assets/master.png"
import visa from "/src/assets/visa.png"
import mir from "/src/assets/mir.png"
import sbp from "/src/assets/sbp.png"

const Array = {
    data: [
        {
            id: 1,
            img: master
        },

        {
            id: 2,
            img: visa
        },

        {
            id: 3,
            img: mir
        },

        {
            id: 4,
            img: sbp
        },
    ]
}

export const Pay = () => {
    
    return (
       <div className={styles.Pay}>
            <div className={styles.Pay__inner}>
                <div className={styles.Pay__inner_navig}>
                    <Link to="/"><p>Главная /</p></Link>
                    <p>Способоы оплаты</p>
                </div>
                <h1>Способы оплаты</h1>
                <div className={styles.Pay__inner_content}>
                    <p>Платежи осуществляются  через сервисы:</p>
                    <div className={styles.content_cards}>
                        {Array.data.map(({img, id}) => (
                             <img src={img} key={id} alt="not found" className={styles.Card}/>
                        ))}
                    </div>
                    <p>ОБРАЩАЕМ ВАШЕ ВНИМАНИЕ </p>
                    <div className={styles.content_info}>
                        <p>POLFLACONA.ru не получает и не сохраняет данные вашей кредитной карты.
                           Вы оплачиваете только стоимость покупки, комиссия при оплате on-line 
                           не взимается.</p>
                    </div>
                </div>
            </div>
            <Footer />
       </div>
    );
};
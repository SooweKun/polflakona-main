import styles from "/src/pages/oformlenie/dostavka/dostavka.module.css"
import yandex from "/src/assets/dostavka-inp/yan-dostvk.svg"
import kurier from "/src/assets/dostavka-inp/kurier.svg"
import pochta from "/src/assets/dostavka-inp/rd-dostvk.svg"
import sdek from "/src/assets/dostavka-inp/sdek-dostvk.svg"
import sam from "/src/assets/dostavka-inp/samovivos.svg"
import box from "/src/assets/dostavka-inp/box-dostvk.svg"

export const Dostavka = () => {
    return (
        <div className={styles.Dostavka}>
            <div className={styles.input}>
                <div className={styles.input_text}>
                    <img src={kurier} className={styles.kurier} alt="" />
                    <p>Курьером (по Москве)</p>
                </div>
                <div className={styles.input_check}>
                    <p>от 180 ₽</p>
                    <input type="radio" />
                </div>
            </div>
            <div className={styles.input}>
                <div className={styles.input_text}>
                    <img src={sam} className={styles.sam} alt="" />
                    <p>Самовывоз</p>
                </div>
                <div className={styles.input_check}>
                    <p>от 0 ₽</p>
                    <input type="radio" />
                </div>
            </div>
            <div className={styles.input}>
                <div className={styles.input_text}>
                    <img src={box} className={styles.box} alt="" />
                    <p>Boxberry</p>
                </div>
                <div className={styles.input_check}>
                    <p>от 190 ₽</p>
                    <input type="radio" />
                </div>
            </div>
            <div className={styles.input}>
                <div className={styles.input_text}>
                    <img src={sdek} className={styles.sdek} alt="" />
                    <p>СДЭК</p>
                </div>
                <div className={styles.input_check}>
                    <p>от 185 ₽</p>
                    <input type="radio" />
                </div>
            </div>
            <div className={styles.input}>
                <div className={styles.input_text}>
                    <img src={yandex} className={styles.yandex} alt="" />
                    <p>Яндекс Доставка</p>
                </div>
                <div className={styles.input_check}>
                    <p>от 160 ₽</p>
                    <input type="radio" />
                </div>
            </div>
            <div className={styles.input_unk}>
                <div className={styles.input_text}>
                    <img src={pochta} className={styles.pochta} alt="" />
                    <p>Почта России</p>
                </div>
                <div className={styles.input_check}>
                    <p>от 195 ₽</p>
                    <input type="radio" />
                </div>
            </div>
        </div>
    );
}
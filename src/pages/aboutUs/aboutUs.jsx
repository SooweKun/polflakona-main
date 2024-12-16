import { Banner } from "./Banner/banner";
import styles from "/src/pages/aboutUs/aboutUs.module.css"
import { Link } from "@tanstack/react-router";
import box from "/src/assets/box.png"
import carzina from "/src/assets/carzina.png"
import flacon from "/src/assets/flacon.png"
import { Mission } from "./mission/mission";
import { Map } from "./map/map";
import { Footer } from "/src/components/Footer/footer";


export const AboutUs = () => {
    return (
        <div className={styles.AboutUs}>
            <div className={styles.AboutUs__inner}>
                <div className={styles.AboutUs__inner_navig}>
                    <Link to="/"><p>Главная /</p></Link>
                    <p className={styles.AboutUs__inner_navig_p}>О нас</p>
                </div>
                <Banner />
                <div className={styles.AboutUs__inner_content}>
                    <div className={styles.content_box}>
                        <div className={styles.content_box_text}>
                            <h1>350 тыс +</h1>
                            <p>заказов в день</p>
                        </div>
                        <img src={carzina} alt="" />
                    </div>
                    <div className={styles.content_box}>
                        <div className={styles.content_box_text}>
                            <h1>300 +</h1>
                            <p>ароматов</p>
                        </div>
                        <img src={flacon} alt="" />
                    </div>
                    <div className={styles.content_box}>
                        <div className={styles.content_box_text}>
                            <h1>500 тыс+</h1>
                            <p>товаров на скаладе</p>
                        </div>
                        <img src={box} alt="" />
                    </div>
                </div>
                <Mission />
                <Map />
            </div>
            <Footer />
        </div>
    );
}
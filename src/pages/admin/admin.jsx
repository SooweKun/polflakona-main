import styles from "/src/pages/admin/admin.module.css";
import { Link } from "@tanstack/react-router";
import { Footer } from "/src/components/Footer/footer.jsx";

export const Admin = () => {
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
                        <div className={styles.warning__title}>
                            <img src="" alt="" />
                            <h1>Ваша ответственность за товар</h1>
                        </div>
                        <p>В случае несоответствия полученного товара его описанию, расходы, связанные с его возвратом, будут возложены на вас.</p>
                    </div>
                    <form>
                        <div className={styles.inputs_one}>
                            <input type="text" />
                            <input type="file" />
                        </div>
                        <div className={styles.inputs_module}>
                            <button></button>
                            <button></button>
                            <button></button>
                        </div>
                        <div className={styles.inputs_two}>
                            <input type="text" />
                            <input type="text" />
                            <input type="text" />
                            <input type="text" />
                            <input type="text" />
                            <input type="text" />
                        </div>
                    </form>
                    <button>ОПУБЛИКОВАТЬ</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}
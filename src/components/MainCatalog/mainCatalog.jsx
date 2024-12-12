import styles from "/src/components/MainCatalog/mainCatalog.module.css"
import { MainCatalogCard } from "/src/components/MainCatalog/MainCatalogCard/mainCatalogCard.jsx";

export const MainCatalog = () => {

    return (
       <div className={styles.MainCatalog}>
           <h1 className={styles.MainCatalog__title}>НАШ КАТАЛОГ</h1>
            <div className={styles.MainCatalog__cards}>
                <MainCatalogCard />
            </div>
       </div>
    );
}
import styles from "/src/components/MainCatalog/MainCatalogCard/mainCatalogCard.module.css"
import woman from "/src/assets/woman.png"
import man from "/src/assets/man.png"
import universal from "/src/assets/universal.png"
import { useNavigate } from '@tanstack/react-router';

const info = {
    data: [
        {
            id: 1,
            img: woman,
            title: "Женские ароматы",
        },

        {
            id: 2,
            img: man,
            title: "Мужские ароматы",
        },

        {
            id: 3,
            img: universal,
            title: "Универсальные ароматы",
        }
    ]
}

export const MainCatalogCard = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate({ to: '/catalog' })
    }

    return(
       <>
        {info.data.map(({id, img, title}) => (
            <div className={styles.MainCatalogCard} key={id}>
                <img src={img} alt="" className={styles.MainCatalogCard__img}/>
                <div className={styles.overlay}>
                    <p className={styles.overlayText} onClick={handleClick}>ПЕРЕЙТИ</p>
                </div>
                <p className={styles.MainCatalogCard__title}>{title}</p>
            </div>
        ))}
       </>
    );
}
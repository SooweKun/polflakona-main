import styles from "/src/pages/catalog/catalog.module.css"
import { Link } from '@tanstack/react-router'
import { Heart } from "/src/components/MainSlider/heart/heart.jsx";
import ArrowDown from "/src/assets/arrowDown.svg"
import { useState } from "react"
import ArrowUp from "/src/assets/arrowUp.svg"
import one from "/src/assets/1.png"
import two from "/src/assets/2.png"
import three from "/src/assets/3.png"
import four from "/src/assets/4.png"
import five from "/src/assets/5.png"
import { useStore } from "/src/store/store";

const text = ["по популярности", "сначала дешевые", "сначала дороже"]

const info = {
    data: [
        {
            id: 1,
            price: "7 889 ₽ ",
            img: one,
            title: "Akro /",
            name: "Bake"
        },

        {
            id: 2,
            price: "5 889 ₽ ",
            img: two,
            title: "KARL LAGERFELD /",
            name: "Shibuya"
        },

        {
            id: 3,
            price: "7 199 ₽ ",
            img: three,
            title: "ROBERTO CAVALLI /",
            name: "Just Cavalli"
        },

        {
            id: 4,
            price: "6 689 ₽ ",
            img: four,
            title: "JIMMY CHOO /",
            name: "Urban Hero"
        },

        {
            id: 5,
            price: "8 869 ₽ ",
            img: five,
            title: "DOLCE&GABBANA /",
            name: "L'peratrice"
        }
    ]
}

export const Catalog = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);
    const [isOpen5, setIsOpen5] = useState(false);
    const [selectedOption, setSelectedOption] = useState('по популярности');
    const countPlus = useStore(state => state.countPlus)
    const [fill, setFill] = useState("none");

    const handleClick = () => {
        setFill(prev => prev === "none" ? "#603699" : "none" )
        countPlus();
    }

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }

    const toggleDropdown2 = () => {
        setIsOpen2(!isOpen2);
    }

    const toggleDropdown3 = () => {
        setIsOpen3(!isOpen3);
    }

    const toggleDropdown4 = () => {
        setIsOpen4(!isOpen4);
    }

    const toggleDropdown5 = () => {
        setIsOpen5(!isOpen5);
    }

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
      };

    return (
        <div className={styles.Catalog}>
            <div className={styles.Catalog__inner}>
                <div className={styles.Catalog__inner_navig}>
                    <Link to="/"><p>Главная /</p></Link>
                    <p className={styles.Catalog__inner_navig_p}>Наш каталог</p>
                </div>
                <h1>НАШ КАТАЛОГ</h1>
                <div className={styles.Catalog__inner_content}>
                    <div className={styles.content__filter}>
                        <div className={styles.content__filter_module} style={{height: isOpen ? '139px' : '40px'}}>
                            <button onClick={toggleDropdown}>
                                {selectedOption}
                                <img src={isOpen ? ArrowUp : ArrowDown} alt="" />
                            </button>
                            <div className={styles.content__filter_module_list} style={{display: isOpen ? 'flex' : 'none'}}>
                                {text.map((option, index) => (
                                    <p onClick={() => handleOptionClick(option)} key={index}>{option}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className={styles.content__info}>
                        <div className={styles.info_navbar} style={{height: isOpen2 ? "357" : "234"}}>
                            <div className={styles.navbar__wooman_module}>
                                <button onClick={toggleDropdown2}>
                                    Женская парфюмерия
                                    <img src={isOpen2 ? ArrowUp : ArrowDown} alt="" />
                                </button>
                                <div className={styles.module_text} style={{display: isOpen2 ? 'flex' : 'none'}}>
                                    <button>Духи</button>
                                    <button>Парфюмерная вода</button>
                                    <button>Туалетная вода</button>
                                </div>
                            </div>
                            <div className={styles.navbar__man_module}>
                                <button onClick={toggleDropdown3}>
                                    Мужская парфюмерия
                                    <img src={isOpen ? ArrowUp : ArrowDown} alt="" />
                                </button>
                                <div className={styles.module_text} style={{display: isOpen3 ? 'flex' : 'none'}}>
                                    <button>Духи</button>
                                    <button>Парфюмерная вода</button>
                                    <button>Туалетная вода</button>
                                </div>
                            </div>
                            <div className={styles.navbar__universal_module}>
                                <button onClick={toggleDropdown4}>
                                    Унисекс парфюмерия
                                    <img src={isOpen ? ArrowUp : ArrowDown} alt="" />
                                </button>
                                <div className={styles.module_text} style={{display: isOpen4 ? 'flex' : 'none'}}>
                                    <button>Духи</button>
                                    <button>Парфюмерная вода</button>
                                    <button>Туалетная вода</button>
                                </div>
                            </div>
                            <div className={styles.navbar__nusha_module}>
                                <button onClick={toggleDropdown5}>
                                    Нишевая парфюмерия
                                    <img src={isOpen ? ArrowUp : ArrowDown} alt="" />
                                </button>
                                <div className={styles.module_text} style={{display: isOpen5 ? 'flex' : 'none'}}>
                                    <button>Духи</button>
                                    <button>Парфюмерная вода</button>
                                    <button>Туалетная вода</button>
                                </div>
                            </div>
                        </div>
                        <div className={styles.info_catalog}>
                            {info.data.map(({id, price, img, title, name}) =>(
                                <div className={styles.MainSlider__card} key={id}>
                                <div className={styles.MainSlider__card_imgs}>
                                    <Heart
                                        fill={fill}
                                        handleClick={handleClick}
                                        className={styles.MainSlider__card_favorite}
                                    />
                                    <img src={img} alt="" className={styles.MainSlider__card_flacon}/>
                                </div>
                                <div className={styles.MainSlider__card_text}>
                                    <h1 className={styles.MainSlider__card_text_price}>{price}</h1>
                                    <p className={styles.MainSlider__card_text_title}>{title}<span>{name}</span></p>
                                    <p className={styles.MainSlider__card_text_p}>Есть в наличие</p>
                                </div>
                                <div className={styles.MainSlider__card_btn}>
                                    <button className={styles.MainSlider__card_btn_carzina} onClick={countPlus}>В корзину</button>
                                    <button className={styles.MainSlider__card_btn_click}>Купить в 1 клик</button>
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
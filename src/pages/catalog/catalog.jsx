import styles from "/src/pages/catalog/catalog.module.css"
import { Link, useNavigate } from '@tanstack/react-router'
import { Heart } from "/src/components/MainSlider/heart/heart.jsx";
import { Footer } from "/src/components/Footer/footer.jsx";
import ArrowDown from "/src/assets/arrowDown.svg"
import { useState } from "react"
import ArrowUp from "/src/assets/arrowUp.svg"
import one from "/src/assets/1.png"
import two from "/src/assets/2.png"
import three from "/src/assets/3.png"
import four from "/src/assets/4.png"
import five from "/src/assets/5.png"
import six from "/src/assets/6.png"
import seven from "/src/assets/7.png"
import eight from "/src/assets/8.png"
import nine from "/src/assets/9.png"
import { useStoreCard, useDataStore } from "/src/store/store";

const text = ["по популярности", "сначала дешевые", "сначала дороже"]

const info = {
    data: [
        {
            id: 1,
            price: 7889,
            img: one,
            title: "Akro /",
            name: "Bake"
        },

        {
            id: 2,
            price: 5889,
            img: two,
            title: "KARL LAGERFELD /",
            name: "Shibuya"
        },

        {
            id: 3,
            price: 7199,
            img: three,
            title: "ROBERTO CAVALLI /",
            name: "Just Cavalli"
        },

        {
            id: 4,
            price: 6689,
            img: four,
            title: "JIMMY CHOO /",
            name: "Urban Hero"
        },

        {
            id: 5,
            price: 8869,
            img: five,
            title: "DOLCE&GABBANA /",
            name: "L'peratrice"
        },

        {
            id: 6,
            price: 6559,
            img: six,
            title: "YOU /",
            name: "Tobacco & Vanilla"
        },

        {
            id: 7,
            price: 6559,
            img: seven,
            title: "LAB FRAGRANCE /",
            name: "Chinese plum"
        },

        {
            id: 8,
            price: 7889,
            img: eight,
            title: "ZADIG&VOLTAIRE  /",
            name: "This is her!"
        },

        {
            id: 9,
            price: 5559,
            img: nine,
            title: "MOSCHINO  /",
            name: "Funny"
        },
    ]
}

export const Catalog = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [openModule, setOpenModule] = useState(null);
    const [selectedOption, setSelectedOption] = useState('по популярности')
    const navigate = useNavigate();

    const handleClick = () => {
        setFill(prev => prev === "none" ? "#603699" : "none")
    }

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }

    const openModules = (module) => {
        setOpenModule(openModule === module ? null : module);
    };

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
                        <div className={styles.content__filter_module} style={{ height: isOpen ? '139px' : '40px' }}>
                            <button onClick={toggleDropdown}>
                                {selectedOption}
                                <img src={isOpen ? ArrowUp : ArrowDown} alt="" />
                            </button>
                            <div className={styles.content__filter_module_list} style={{ display: isOpen ? 'flex' : 'none' }}>
                                {text.map((option, index) => (
                                    <p onClick={() => handleOptionClick(option)} key={index}>{option}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className={styles.content__info}>
                        <div className={styles.info_navbar}>
                            <div className={styles.navbar__module}>
                                <button onClick={() => openModules("wooman")} className={styles.navbar__module_btn}>
                                    Женская парфюмерия
                                    <img src={isOpen ? ArrowUp : ArrowDown} alt="" />
                                </button>
                                {
                                    openModule === "wooman" && (
                                        <div className={styles.module_text}>
                                            <button>Духи</button>
                                            <button>Парфюмерная вода</button>
                                            <button>Туалетная вода</button>
                                        </div>
                                    )
                                }
                            </div>
                            <div className={styles.navbar__module}>
                                <button onClick={() => openModules("man")} className={styles.navbar__module_btn}>
                                    Мужская парфюмерия
                                    <img src={isOpen ? ArrowUp : ArrowDown} alt="" />
                                </button>
                                {
                                    openModule === "man" && (
                                        <div className={styles.module_text}>
                                            <button>Духи</button>
                                            <button>Парфюмерная вода</button>
                                            <button>Туалетная вода</button>
                                        </div>
                                    )
                                }
                            </div>
                            <div className={styles.navbar__module}>
                                <button onClick={() => openModules("universal")} className={styles.navbar__module_btn}>
                                    Унисекс парфюмерия
                                    <img src={isOpen ? ArrowUp : ArrowDown} alt="" />
                                </button>
                                {
                                    openModule === "universal" && (
                                        <div className={styles.module_text}>
                                            <button>Духи</button>
                                            <button>Парфюмерная вода</button>
                                            <button>Туалетная вода</button>
                                        </div>
                                    )
                                }
                            </div>
                            <div className={styles.navbar__module}>
                                <button onClick={() => openModules("nusha")} className={styles.navbar__module_btn}>
                                    Нишевая парфюмерия
                                    <img src={openModules === "nusha" ? ArrowUp : ArrowDown} alt="" />
                                </button>
                                {
                                    openModule === "nusha" && (
                                        <div className={styles.module_text}>
                                            <button>Духи</button>
                                            <button>Парфюмерная вода</button>
                                            <button>Туалетная вода</button>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                        <div className={styles.info_catalog}>
                            {info.data.map(({ id, price, img, title, name }) => {
                                const addCard = useStoreCard(state => state.addCard)
                                const addData = useDataStore(state => state.addData)
                                const [fill, setFill] = useState("none");
                                const handleClick = () => {
                                    setFill(prev => prev === "none" ? "#603699" : "none")
                                }
                                const ofor = () => {
                                    navigate({ to: '/oformlenie' })
                                    addData({ id, price, title, img })
                                }

                                const imgClick = () => {
                                    navigate({ to: `/cardinfo` })
                                    addData({ id, price, title, img })
                                }
                                return (
                                    <div className={styles.MainSlider__card} key={id}>
                                        <div className={styles.MainSlider__card_imgs}>
                                            <Heart
                                                fill={fill}
                                                handleClick={handleClick}
                                                className={styles.MainSlider__card_favorite}
                                            />
                                            <img src={img} alt="" className={styles.MainSlider__card_flacon} onClick={imgClick} />
                                        </div>
                                        <div className={styles.MainSlider__card_text}>
                                            <h1 className={styles.MainSlider__card_text_price}>{price.toLocaleString('ru-RU')} ₽</h1>
                                            <p className={styles.MainSlider__card_text_title}>{title}<span>{name}</span></p>
                                            <p className={styles.MainSlider__card_text_p}>Есть в наличие</p>
                                        </div>
                                        <div className={styles.MainSlider__card_btn}>
                                            <button className={styles.MainSlider__card_btn_carzina} onClick={() => addCard({ id, price, img, title, name })}>В корзину</button>
                                            <button className={styles.MainSlider__card_btn_click} onClick={ofor}>Купить в 1 клик</button>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
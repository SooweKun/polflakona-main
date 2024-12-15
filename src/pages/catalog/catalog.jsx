import styles from "/src/pages/catalog/catalog.module.css"
import { Link } from '@tanstack/react-router'
import ArrowDown from "/src/assets/arrowDown.svg"
import { useState } from "react"
import ArrowUp from "/src/assets/arrowUp.svg"

const text = ["по популярности", "сначала дешевые", "сначала дороже"]

export const Catalog = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('по популярности');

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
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
                            <div className={styles.content__filter_module_list} style={{opacity: isOpen ? '1' : '0'}}>
                                {text.map((option, index) => (
                                    <p onClick={() => handleOptionClick(option)} key={index}>{option}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
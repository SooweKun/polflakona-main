import styles from "/src/pages/CardInfo/infoMain/infoMain.module.css"

export const InfoMain = ({title}) => {
    return (
        <div className={styles.CardInfo__inner_main}>
            <p>{title}</p>
        </div>
    );
}
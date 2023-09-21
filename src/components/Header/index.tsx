import PokeBall from '../../assets/Pok.png'
import styles from './header.module.scss'

const Header = () => {
    return(
        <div className={styles.header}>
            <div className={styles["header_logo"]}><img src={PokeBall} height="50px" /></div>
            <h1 className={styles["header_title"]}>Catch a Pokemon</h1>
            <div className={styles["header_accont"]}>Accont</div>
        </div>
    )
}


export default Header
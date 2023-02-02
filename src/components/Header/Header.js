import style from "./Header.module.css"

function Header(){
    return(
        <div className={style["wrapper"]}>
            <div className={style["header-wrapper"]}>
                <div className={style["logo"]}></div>
                <div className={style["basket"]}></div>
            </div>
            <nav>
                <p>Новинки</p>
                <p>Платья</p>
                <p>Верх</p>
                <p>Низ</p>
                <p>Куртки</p>
                <p>Мелочи</p>
                <p>Костюмы</p>
                <p>#Boorivagirls</p>
            </nav>
        </div>
    )
}

export default Header
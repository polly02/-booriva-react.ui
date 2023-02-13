import { Link } from "react-router-dom"
import style from "./Header.module.css"
import NavItem from "./NavItem"

function Header() {
    const arr = ["Новинки", "Платья", "Верх", "Низ", "Куртки", "Мелочи", "Костюмы", "#Boorivagirls"]
    return (
        <div className={style["wrapper"]}>
            <div className={style["header-wrapper"]}>
                <div className={style["logo"]}></div>
                <Link to={"/basket"}><div className={style["basket"]}></div></Link>
            </div>


            <nav>
                {arr.map((el, index) => <NavItem key={index} name={el} />)}
            </nav>
        </div>
    )
}

export default Header
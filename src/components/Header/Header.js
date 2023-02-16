import { Link } from "react-router-dom"
import basket from "../../context/basket"
import style from "./Header.module.css"
import NavItem from "./NavItem"

function Header() {

    function dropBasket() {
        let end = basket.length
        for (let i = 0; i < end; i++) {
            basket.pop()
            end = basket.length
        }
        console.log(basket);
    }

    const arr = ["Новинки", "Платья", "Верх", "Низ", "Куртки", "Мелочи", "Костюмы", "#Boorivagirls"]
    return (
        <div className={style["wrapper"]}>
            <div className={style["header-wrapper"]}>
                <Link to={"/products"}> <div className={style["logo"]} onClick={dropBasket}></div></Link>
                <Link to={"/basket"}><div className={style["basket"]}></div></Link>
            </div>


            <nav>
                {arr.map((el, index) => <NavItem key={index} name={el} />)}
            </nav>
        </div>
    )
}

export default Header
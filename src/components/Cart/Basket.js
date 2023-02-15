import basket from "../../context/basket"
import style from "./Basket.module.css"
import ProductItem from "./ProductItem";

function Basket() {

    function getCount() {
        let count = 0
        if (basket.length === 1) {
            count = `${basket.length} товар`
        } else if (basket.length === 2 || basket.length === 3 || basket.length === 4) {
            count = `${basket.length} товара`
        } else {
            count = `${basket.length} товаров`
        }
        return count
    }

    function getSumma() {
        let sum = basket.reduce(function (sum, elem) {
            return sum + elem.price
        }, 0)
        return sum
    }

    return (
        <div className={style["cart"]}>
            <div className={style["img-cart"]}></div>
            <div className={style["wrapper-cart"]}>

                {basket.map(el => <ProductItem key={el.id} name={el.name} price={el.price} path={el.path} />)}
            </div>

            <div className={style["total-quantity"]}>
                <p>Всего: . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .</p>
                <p className={style["quantity"]}> {getCount()} </p>
            </div>
            <div className={style["total-count"]}>
                <p>Сумма заказа:  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . </p>
                <p className={style["count"]}>{getSumma()} ₴</p>
            </div>
            <div className={style["btn"]}></div>
        </div>
    )
}

export default Basket
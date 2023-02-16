import { useState } from "react";
import basket from "../../context/basket"
import style from "./Basket.module.css"
import ProductItem from "./ProductItem";

function Basket() {

    let [arrayBasket, setArrayBasket] = useState(basket)

    function getCount() {
        let count = 0
        if (arrayBasket.length === 1) {
            count = `${arrayBasket.length} товар`
        } else if (arrayBasket.length === 2 || arrayBasket.length === 3 || arrayBasket.length === 4) {
            count = `${arrayBasket.length} товара`
        } else {
            count = `${arrayBasket.length} товаров`
        }
        return count
    }

    function getSumma() {
        let sum = arrayBasket.reduce(function (sum, elem) {
            return sum + elem.price
        }, 0)
        return sum
    }

    return (
        <div className={style["cart"]}>
            <div className={style["img-cart"]}></div>
            <div className={style["wrapper-cart"]}>

                {arrayBasket.map(el => <ProductItem arrayBasket={arrayBasket} setArrayBasket={setArrayBasket} key={el.id} id={el.id} name={el.name} price={el.price} path={el.path} />)}
            </div>

            <div className={style["total-quantity"]}>
                <p>Всего: . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .</p>
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
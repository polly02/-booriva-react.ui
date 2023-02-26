import axios from "axios";
import { useEffect, useState } from "react";
import style from "./Basket.module.css"
import ProductItem from "./ProductItem";

function Basket() {
    let [arrayBasket, setArrayBasket] = useState([])

    async function getBasketProduct() {
        try {
            const response = await axios.get("/basket")
            setArrayBasket(response.data)
            console.log(response.data);
        } catch (error) {
            alert(error.message)
        }
    }

    useEffect(() => {
        getBasketProduct()
    }, [])

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
                {arrayBasket.map(el => <ProductItem key={Math.random()} id={el.id} title={el.title} price={el.price} setArrayBasket={setArrayBasket} />)}
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
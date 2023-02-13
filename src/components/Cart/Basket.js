import basket from "../../context/basket"
import style from "./Basket.module.css"
import ProductItem from "./ProductItem";

function Basket() {
    return (
        <div className={style["cart"]}>
            <div className={style["img-cart"]}></div>
            <div className={style["wrapper-cart"]}>
                
                {basket.map(el => <ProductItem key={el.id} name={el.name} price={el.price} path={el.path}/>)}
            </div>

            <div className={style["total-quantity"]}>
                <p>Всего: . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .</p>
                <p className={style["quantity"]}>6 товаров</p>
            </div>
            <div className={style["total-count"]}>
                <p>Сумма заказа:  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . </p>
                <p className={style["count"]}>5 000 ₴</p>
            </div>
            <div className={style["btn"]}></div>
        </div>
    )
}

export default Basket
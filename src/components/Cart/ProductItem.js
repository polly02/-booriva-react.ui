import basket from "../../context/basket"
import style from "./Basket.module.css"


function ProductItem({ setArrayBasket, arrayBasket, id, name, price, path }) {

    function deleteFromBasket() {
        let filtered = arrayBasket.filter(el => id !== el.id)
        setArrayBasket(filtered)
    }

    return (
        <div className={style["product"]}>
            <div className={style["block-info"]}>
                <img alt={name} className={style["product-img"]} src={require(`../../storage/assets/${path}`)}></img>
            </div>
            <div className={style["product-info"]}>
                <h2>{name}</h2>
                <p className={style["size"]}>S — M</p>
                <p className={style["price"]}>{price} ₴</p>
            </div>
            <div className={style["product-delete"]} onClick={deleteFromBasket}></div>
        </div>
    )
}
export default ProductItem
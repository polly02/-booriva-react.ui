import basket from "../../context/basket"
import style from "./Basket.module.css"


function ProductItem({ id, title, price }) {

    return (
        <div className={style["product"]}>
            <div className={style["block-info"]}>
                <div className={style["product-img"]}></div>
            </div>
            <div className={style["product-info"]}>
                <h2>{title}</h2>
                <p className={style["size"]}>S — M</p>
                <p className={style["price"]}>{price} ₴</p>
            </div>
            <div className={style["product-delete"]}></div>
        </div>
    )
}
export default ProductItem
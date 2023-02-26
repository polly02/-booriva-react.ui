import style from "./Basket.module.css"
import axios from "axios";

function ProductItem({ id, title, price, setArrayBasket }) {

    async function deleteFromBasket() {
        try {
            const response = await axios.delete(`/basket/${id}`)
            setArrayBasket(response.data)
            console.log(response.data);
        } catch (error) {
            alert(error.message)
        }
    }

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
            <div className={style["product-delete"]} onClick={deleteFromBasket}></div>
        </div>
    )
}
export default ProductItem
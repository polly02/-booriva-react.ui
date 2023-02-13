import style from "./Basket.module.css"

function ProductItem({ name, price, path }) {
    return (
        <div className={style["product"]}>
            <div className={style["block-info"]}>
                <img alt={name} className={style["product-img"]} src={require(`../../storage/assets/${path}`)}></img>
            </div>
            <div className={style["product-info"]}>
                <h2>{name}</h2>
                <p className={style["size"]}>S — M</p>
                <p className={style["price"]}>{price}</p>
            </div>
            <div className={style["product-delete"]}></div>
        </div>
    )
}
export default ProductItem
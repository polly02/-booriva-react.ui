import style from "./Cart.module.css"

function Cart() {
    return (
        <div className={style["cart"]}>
            <div className={style["img-cart"]}></div>
            <div className={style["wrapper-cart"]}>
                <div className={style["product"]}>
                    <div className={style["product-img"]}></div>
                    <div className={style["product-info"]}>
                        <h2>Бомбер Gone Crazy хаки</h2>
                        <p className={style["size"]}>S — M</p>
                        <p className={style["price"]}>2 499 ₴</p>
                    </div>
                    <div className={style["product-delete"]}></div>
                </div>
                <div className={style["product"]}>
                    <div className={style["product-img"]}></div>
                    <div className={style["product-info"]}>
                        <h2>Бомбер Gone Crazy хаки</h2>
                        <p className={style["size"]}>S — M</p>
                        <p className={style["price"]}>2 499 ₴</p>
                    </div>
                    <div className={style["product-delete"]}></div>
                </div>
                <div className={style["product"]}>
                    <div className={style["product-img"]}></div>
                    <div className={style["product-info"]}>
                        <h2>Бомбер Gone Crazy хаки</h2>
                        <p className={style["size"]}>S — M</p>
                        <p className={style["price"]}>2 499 ₴</p>
                    </div>
                    <div className={style["product-delete"]}></div>
                </div>
                <div className={style["product"]}>
                    <div className={style["product-img"]}></div>
                    <div className={style["product-info"]}>
                        <h2>Бомбер Gone Crazy хаки</h2>
                        <p className={style["size"]}>S — M</p>
                        <p className={style["price"]}>2 499 ₴</p>
                    </div>
                    <div className={style["product-delete"]}></div>
                </div>
                <div className={style["product"]}>
                    <div className={style["product-img"]}></div>
                    <div className={style["product-info"]}>
                        <h2>Бомбер Gone Crazy хаки</h2>
                        <p className={style["size"]}>S — M</p>
                        <p className={style["price"]}>2 499 ₴</p>
                    </div>
                    <div className={style["product-delete"]}></div>
                </div>
                <div className={style["product"]}>
                    <div className={style["product-img"]}></div>
                    <div className={style["product-info"]}>
                        <h2>Бомбер Gone Crazy хаки</h2>
                        <p className={style["size"]}>S — M</p>
                        <p className={style["price"]}>2 499 ₴</p>
                    </div>
                    <div className={style["product-delete"]}></div>
                </div>
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

export default Cart
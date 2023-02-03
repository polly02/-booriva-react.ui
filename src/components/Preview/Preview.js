import style from "./Preview.module.css"

function Preview() {
    return (
        <div className={style["wrapper"]}>
            <div className={style["img-womens"]}></div>
            <div className={style["price"]}>
                <div className={style["price-1099"]}></div>
                <div className={style["price-1299"]}></div>
                <div className={style["price-2499"]}></div>
                <div className={style["price-899"]}></div>
            </div>
            <div className={style["name"]}>
                <p>Cвитшот вставка клетка</p>
                <p>Платье прозрачное в цветочек черное</p>
                <p>Бомбер Gone Crazy хаки</p>
                <p>Платье-футболка рыбы в аквариуме</p>
            </div>
            <div className={style["img-coll"]}></div>
            <div className={style["img-store"]}></div>

            <div className={style["advantages"]}>
                <div>
                    <div className={style["icon-send"]}></div>
                    <h2>Отправка день в день</h2>
                    <p>При заказе до 1800</p>
                </div>
                <div>
                    <div className={style["icon-change"]}></div>
                    <h2>Легкий возврат/обмен</h2>
                    <p>В течении 14 дней</p>
                </div>
                <div>
                    <div className={style["icon-made"]}></div>
                    <h2>Сделано в Украине</h2>
                    <p>Прям в Киеве</p>
                </div>
            </div>
        </div>
    )
}

export default Preview
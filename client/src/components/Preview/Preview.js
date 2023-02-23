import AdvantageItem from "./AdvantageItem"
import style from "./Preview.module.css"

function Preview() {
    const advantages = [{
        id: 1,
        image: "image-1",
        logo: "Отправка день в день",
        paragraph: "При заказе до 1800"
    },
    {
        id: 2,
        image: "image-2",
        logo: "Легкий возврат/обмен",
        paragraph: "В течении 14 дней"
    },
    {
        id: 3,
        image: "image-3",
        logo: "Сделано в Украине",
        paragraph: "Прям в Киеве"
    }]

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
                {advantages.map(el => <AdvantageItem key={el.id} logo={el.logo} paragraph={el.paragraph} image={el.image} />)}
            </div>
        </div>
    )
}

export default Preview
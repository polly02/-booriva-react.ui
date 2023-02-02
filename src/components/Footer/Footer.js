import style from "./Footer.module.css"

function Footer() {
    return (
        <div className={style["wrapper"]}>
            <div className={style["logo"]}></div>
            <nav>
                <p>Контакты</p>
                <p>Система лояльности</p>
                <p>Обмен и возврат</p>
                <p>Доставка и оплата</p>
            </nav>
        </div>
    )
}

export default Footer
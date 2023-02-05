import style from "./Categories.module.css"

function Categories() {
    return (
        <div className={style["categories"]}>
            <div className={style["img-heading"]}></div>
            <div className={style["wrapper-categories"]}>
                <div className={style["dress"]}>
                    <div className={style["dress-img"]}></div>
                    <p>Платье прозрачное в цветочек чёрное</p>
                    <div className={style["price"]}>1 299 ₴</div>
                </div>
                <div className={style["sweatshirt"]}>
                    <div className={style["sweatshirt-img"]}></div>
                    <p>Платье прозрачное в цветочек чёрное</p>
                    <div className={style["price"]}>1 299 ₴</div>
                </div>
                <div className={style["bomber"]}>
                    <div className={style["bomber-img"]}></div>
                    <p>Платье прозрачное в цветочек чёрное</p>
                    <div className={style["price"]}>1 299 ₴</div>
                </div>
                <div className={style["dress-t-shirt"]}>
                    <div className={style["dress-t-shirt-img"]}></div>
                    <p>Платье прозрачное в цветочек чёрное</p>
                    <div className={style["price"]}>1 299 ₴</div>
                </div>
                <div className={style["sweatshirt2"]}>
                    <div className={style["sweatshirt-img"]}></div>
                    <p>Платье прозрачное в цветочек чёрное</p>
                    <div className={style["price"]}>1 299 ₴</div>
                </div>
                <div className={style["dress2"]}>
                    <div className={style["dress-img"]}></div>
                    <p>Платье прозрачное в цветочек чёрное</p>
                    <div className={style["price"]}>1 299 ₴</div>
                </div>
            </div>
        </div>
    )
}

export default Categories
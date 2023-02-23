import basket from '../../context/basket'
import style from './Products.module.css'

function ProductItem({ id, title, price }) {

    function addToBasket() {
        const keys = basket.map(el=>el.id)
        if(!keys.includes(id)) basket.push({ id, title, price })

        // event.target.style = "background-image: url(./assets/)"
    }

    return (
        <>
            <div className={style['line-shop']}>

                <div className={style['block']}>
                    <div className={style["block-image"]} >
                        <div className={style['img']} ></div>
                        <div onClick={addToBasket} className={style['like']}></div>
                    </div>
                    <hr></hr>
                    <div className={style['title-flex']}>
                        <h1>{title}</h1>
                        <p>{price}</p>
                    </div>
                </div>
            </div>
        </>
    )

}

export default ProductItem
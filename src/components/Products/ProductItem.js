import basket from '../../context/basket'
import style from './Products.module.css'

function ProductItem({ id, name, price, path }) {

    function addToBasket() {
        const keys = basket.map(el=>el.id)
        if(!keys.includes(id)) basket.push({ id, name, price, path })

        // event.target.style = "background-image: url(./assets/)"
    }

    return (
        <>
            <div className={style['line-shop']}>

                <div className={style['block']}>
                    <div className={style["block-image"]} >
                        <img alt={name} className={style['img']} src={require(`../../storage/assets/${path}`)}></img>
                        <div onClick={addToBasket} className={style['like']}></div>
                    </div>
                    <hr></hr>
                    <div className={style['title-flex']}>
                        <h1>{name}</h1>
                        <p>{price}</p>
                    </div>
                </div>
            </div>
        </>
    )

}

export default ProductItem
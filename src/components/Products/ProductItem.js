import basket from '../../context/basket'
import style from './Products.module.css'

function ProductItem({ name, price, path }) {
    function addToBasket() {
        basket.push({ name, price, path })
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
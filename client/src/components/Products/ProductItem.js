// import basket from '../../context/basket'
import style from './Products.module.css'
import axios from "axios";

function ProductItem({ id, title, price }) {

    async function addToBasket() {
        try {
            const response = await axios.post(`/basket/${id}`)
            console.log(response.data);
        } catch (error) {
            alert(error.message)
        }
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
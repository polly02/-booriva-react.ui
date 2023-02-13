import style from './Products.module.css'
import products from '../../storage/products'
import ProductItem from './ProductItem'

function Products() {
    return (
        <>
            <div className={style['boorivia-store']}> </div>
            <div className={style['products-wrapper']}>
                {products.map((el) => <ProductItem key={el.id} name={el.name} price={el.price} path={el.path} />)}
            </div>


        </>

    )
}
export default Products